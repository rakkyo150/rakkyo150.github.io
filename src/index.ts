interface Env {
  ASSETS: Fetcher;
	GITHUB_CLIENT_ID: string;
	GITHUB_CLIENT_SECRET: string;
}

type Status = 'error' | 'success';

const handleAuth = async(url: URL, env: Env) => {
  const client_id = env.GITHUB_CLIENT_ID;
  try {
    const redirectUrl = new URL('https://github.com/login/oauth/authorize');
    redirectUrl.searchParams.set('client_id', client_id);
    redirectUrl.searchParams.set('redirect_uri', `${url.origin}/api/callback`);
    redirectUrl.searchParams.set('scope', 'repo user');
    redirectUrl.searchParams.set('state', crypto.getRandomValues(new Uint8Array(12)).join(''));
    return Response.redirect(redirectUrl.href, 302);
  } catch (err: unknown) {
    let message = '';
    if (err && typeof err === 'object' && 'message' in err && typeof (err as any).message === 'string') {
      message = (err as any).message;
    } else {
      message = String(err);
    }
    return new Response(message, { status: 500 });
  }
}

function renderBody(status: Status, content: any) {
  const html = `
  <script>
    const receiveMessage = (message) => {
      window.opener.postMessage(
        'authorization:github:${status}:${JSON.stringify(content)}',
        message.origin
      );
      window.removeEventListener("message", receiveMessage, false);
    }
    window.addEventListener("message", receiveMessage, false);
    window.opener.postMessage("authorizing:github", "*");
  </script>`;
  return new Blob([html]);
}

const handleCallback = async(url: URL, env: Env) => {
  const client_id = env.GITHUB_CLIENT_ID;
  const client_secret = env.GITHUB_CLIENT_SECRET;
  try {
    const code = url.searchParams.get('code');
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'user-agent': 'cf-pages-oauth', 'accept': 'application/json' },
      body: JSON.stringify({ client_id, client_secret, code }),
    });
    const result: any = await response.json();
    if (result.error) {
      return new Response(renderBody('error', result), { headers: { 'content-type': 'text/html;charset=UTF-8' }, status: 401 });
    }
    const token = result.access_token;
    const provider = 'github';
    return new Response(renderBody('success', { token, provider }), { headers: { 'content-type': 'text/html;charset=UTF-8' }, status: 200 });
  } catch (error: unknown) {
    let message = '';
    if (error && typeof error === 'object' && 'message' in error && typeof (error as any).message === 'string') {
      message = (error as any).message;
    } else {
      message = String(error);
    }
    return new Response(message, { headers: { 'content-type': 'text/html;charset=UTF-8' }, status: 500 });
  }
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
		if (url.pathname.startsWith('/auth')) {
			return handleAuth(url, env);
		}
		if (url.pathname.startsWith('/api/callback')) {
			return handleCallback(url, env);
		}
    return env.ASSETS.fetch(request);
	},
};
