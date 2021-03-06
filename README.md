# 作成したMODやツールまとめ<!-- omit in toc -->
---

- [Beat Saber関係](#beat-saber関係)
  - [MODとBeat Saberのバージョンの対応表](#modとbeat-saberのバージョンの対応表)
  - [GetNearRank系](#getnearrank系)
    - [GetNearRankMod](#getnearrankmod)
    - [GetNearRankScript](#getnearrankscript)
    - [GetNearRankDocker](#getnearrankdocker)
  - [PredictStarNumber系](#predictstarnumber系)
    - [PredictStarNumber](#predictstarnumber)
    - [PredictStarNumberExtension](#predictstarnumberextension)
    - [BetterSongList-PredictStarNumber](#bettersonglist-predictstarnumber)
    - [PredictStarNumberHelper](#predictstarnumberhelper)
    - [RankedMapData](#rankedmapdata)
  - [Mod管理系ツール](#mod管理系ツール)
    - [BSModManager](#bsmodmanager)
    - [GithubModUpdateCheckerConsole](#githubmodupdatecheckerconsole)
  - [カスタムカウンター](#カスタムカウンター)
    - [CenterDistanceCounter](#centerdistancecounter)
    - [YokoNotesTokaYurusenaiCounter](#yokonotestokayurusenaicounter)
    - [AccStandardDeviationCounter](#accstandarddeviationcounter)
  - [既存MODの改良版](#既存modの改良版)
    - [CounterPlus-Improved](#counterplus-improved)
    - [SaberTailor-Improved](#sabertailor-improved)
    - [SongPlayHistoryContinued-Extended](#songplayhistorycontinued-extended)
    - [EnhancedMissCounter](#enhancedmisscounter)
  - [オリジナルの単発ツール](#オリジナルの単発ツール)
    - [ConfirmPlaylistDifficulty](#confirmplaylistdifficulty)
    - [MissCountOnResults](#misscountonresults)
    - [BeatSaberCustomNotes-NoteTrail](#beatsabercustomnotes-notetrail)
    - [CloseBrowsers](#closebrowsers)
    - [dailypp](#dailypp)
- [osu!関係](#osu関係)
  - [OsuNewBeatmapPackNotification2Discord](#osunewbeatmappacknotification2discord)
- [その他ツール](#その他ツール)
  - [Gmail2Discord](#gmail2discord)

---

## Beat Saber関係

### MODとBeat Saberのバージョンの対応表

はじめに、MODの動作確認をしたBeat Saberのバージョンを表でまとめておきます<br>
対応表は随時更新していきます<br>
"?"は不明、"〇"は問題なく動く、"△"は多分問題なさそう、"×"は現時点では動かないという意味です<br>
1.15以前はModに携わっていなかったので、すべてのMODについて動作するかは不明です

|MOD名|1.16|1.17|1.18|1.19|1.20|1.21|1.22|1.23|1.24|
|:--|:--:|:--:|:--:|:--:|:--:|:--:|:---:|:---:|:---:|
|[GetNearRankMod](https://github.com/rakkyo150/GetNearRankMod/releases)|?|?|〇|〇|〇|〇|〇|〇|〇|
|[BetterSongList-PredictStarNumber](https://github.com/rakkyo150/BetterSongList-PredictStarNumber/releases)|?|?|?|〇|〇|〇|〇|〇|〇|
|[CenterDistanceCounter](https://github.com/rakkyo150/CenterDistanceCounter/releases)|〇|〇|〇|〇|〇|〇|〇|〇|〇|
|[YokoNotesTokaYurusenaiCounter](https://github.com/rakkyo150/YokoNotesTokaYurusenaiCounter)|?|?|?|?|?|?|〇|〇|〇|
|[AccStandardDeviationCounter](https://github.com/rakkyo150/AccStandardDeviationCounter/releases)|〇|〇|〇|〇|〇|〇|〇|〇|△|
|[CounterPlus-Improved](https://github.com/rakkyo150/CounterPlus-Improved/releases)|〇|〇|〇|〇|〇|〇|〇|〇|〇|
|[SaberTailor-Improved](https://github.com/rakkyo150/SaberTailor-Improved/releases)|〇|〇|〇|〇|〇|〇|〇|〇|△|
|[SongPlayHistoryContinued-Extended](https://github.com/rakkyo150/SongPlayHistoryContinued-Extended/releases)|?|〇|〇|〇|△|〇|〇|〇|〇|
|[EnhancedMissCounter](https://github.com/rakkyo150/EnhancedMissCounter/releases)|?|?|?|〇|〇|〇|〇|〇|〇|
|[ConfirmPlaylistDifficulty](https://github.com/rakkyo150/ConfirmPlaylistDifficulty)|?|?|?|?|?|〇|〇|〇|〇|
|[MissCountOnResults](https://github.com/rakkyo150/MissCountOnResults/releases)|?|〇|〇|〇|△|〇|〇|〇|△|
|[BeatSaberCustomNotes-NoteTrail](https://github.com/rakkyo150/BeatSaberCustomNotes-NoteTrail/releases)|?|?|〇|×|×|×|×|×|×|
|[CloseBrowsers](https://github.com/rakkyo150/CloseBrowsers/releases)|〇|〇|〇|〇|〇|〇|〇|〇|〇|

### GetNearRank系

[GetNearRank](https://github.com/culage/GetNearRank)が原案の、順位が近くの人が自分よりPPを多く取ったランク曲を取得してプレイリストにするツール<br>
ScoreSaberの公式APIが実装されたのをきっかけに作成<br>
日本ランクでのみ動作<br>

#### [GetNearRankMod](https://github.com/rakkyo150/GetNearRankMod)
PCModを使用できる方用

![スクリーンショット 2021-10-15 022423](https://user-images.githubusercontent.com/86054813/137366553-a565529a-0d47-4335-a632-029e226efcd6.png)


#### [GetNearRankScript](https://github.com/rakkyo150/GetNearRankScript)
GetNearRankModが使えない環境の方で、WindowsかMacをもっている方用

#### [GetNearRankDocker](https://github.com/rakkyo150/GetNearRankDocker)
GetNearRankModもGetNearRankScriptも使えない方用

### PredictStarNumber系
アンランクの譜面でもランクになったらどれくらいの星がつくか予測するツール

#### [PredictStarNumber](https://github.com/rakkyo150/PredictStarNumber)
ブラウザ版<br>
リンクは[こちら](https://predictstarnumber.herokuapp.com/)

#### [PredictStarNumberExtension](https://github.com/rakkyo150/PredictStarNumberExtension)
Chrome拡張機能版

#### [BetterSongList-PredictStarNumber](https://github.com/rakkyo150/BetterSongList-PredictStarNumber)
BetterSongListの改造版で、ゲーム内でも予測結果を見ることができるMOD<br>

![スクリーンショット2](https://user-images.githubusercontent.com/86054813/149370978-b97d82a1-ac4a-4268-93e2-817752d37ee0.png)

#### [PredictStarNumberHelper](https://github.com/rakkyo150/PredictStarNumberHelper)
PredictStarNumberの予測のための学習済みモデルを定期的に作成しています<br>
おまけでデータの簡単な解析結果も作成しています<br>

#### [RankedMapData](https://github.com/rakkyo150/RankedMapData)
PredictStarNumberHelperの学習のためのデータを定期的に更新しています<br>
csv形式なのでexcelなどで見れます

### Mod管理系ツール

#### [BSModManager](https://github.com/rakkyo150/BSModManager)
ModAssistantで管理できないBeat SaberのModを管理するツール

![BSModManager](https://user-images.githubusercontent.com/86054813/170963389-e70e6757-a9f7-4b73-a375-c64ede837aa0.png)

#### [GithubModUpdateCheckerConsole](https://github.com/rakkyo150/GithubModUpdateCheckerConsole)
GitHubに上がってるBeat SaberのModのアップデートなどをある程度自動で行うツール<br>
[BSModManager](#bsmodmanager)の前身

### カスタムカウンター

#### [CenterDistanceCounter](https://github.com/rakkyo150/CenterDistanceCounter)
斬ったノーツの中心と切断点の絶対的距離・相対的距離の平均をcm単位で表示するCountersPlusのカスタムカウンター

![サンプル](https://github.com/rakkyo150/CenterDistanceCounter/raw/master/Images/sample.png)

#### ([EnhancedMissCounter](#enhancedmisscounter-1))<!-- omit in toc -->

#### [YokoNotesTokaYurusenaiCounter](https://github.com/rakkyo150/YokoNotesTokaYurusenaiCounter)
横ノーツでミスした回数やボムを切った回数を表するカスタムカウンター<br>
![YokoNotesTokaYurusenaiCounter](https://user-images.githubusercontent.com/86054813/172263444-a076ca25-ca5e-4d12-acaf-5b994c91d0c9.png)

#### [AccStandardDeviationCounter](https://github.com/rakkyo150/AccStandardDeviationCounter)
中心精度の標準偏差を表示するCountersPlusのカスタムカウンター<br>
一番最初に作成したMODなので多少思い入れはあります

![AccStandardDeviationCounter](https://github.com/rakkyo150/AccStandardDeviationCounter/raw/master/Images/sample.jpg)

### 既存MODの改良版

#### [CounterPlus-Improved](https://github.com/rakkyo150/CounterPlus-Improved)
ScoreCounter,ProgressCounter,CutCounter,MissCounter,NoteCounter,NoteLeftCounter,SpeedCounterにおいて、任意の閾値ごとに任意の色を付けることができるようにしたもの<br>

![Counters+](https://github.com/rakkyo150/CounterPlus-Improved/raw/master/Images/Counters%2B.png)

#### [SaberTailor-Improved](https://github.com/rakkyo150/SaberTailor-Improved)
- セイバーの位置と角度とワールドオフセットのより細かな設定が可能に
- セイバーの位置とワールドオフセットの上限を拡張
- UIの変更

![SaberTailer](https://github.com/rakkyo150/SaberTailor-Improved/raw/master/Images/process5.png)

#### [SongPlayHistoryContinued-Extended](https://github.com/rakkyo150/SongPlayHistoryContinued-Extended)
ミスカウントの記録に対応

![hover1](https://user-images.githubusercontent.com/86054813/132974076-e95b8ee9-0e36-49e6-a7f6-28cf983983a0.png)
![hover2](https://user-images.githubusercontent.com/86054813/132974178-5a64ea43-24ff-45ac-a196-2e17e7749024.png)
![max combo](https://user-images.githubusercontent.com/86054813/132974188-2a3af5e4-959f-458c-b985-e471cb67f945.png)

#### ([BetterSongList-PredictStarNumber](#bettersonglist-predictstarnumber))<!-- omit in toc -->

#### ([BeatSaberCustomNotes-NoteTrail](#beatsabercustomnotes-notetrail-1))<!-- omit in toc -->

#### [EnhancedMissCounter](https://github.com/rakkyo150/EnhancedMissCounter)
- ブルームに対応
- より細かな位置調整ができます
  
メタデータ変えちゃったので、プルリク出さずにこちらでリリースしてます

![EnhancedMissCounter](https://pbs.twimg.com/media/FNl6l-4aMAEvNK7?format=jpg&name=small)

### オリジナルの単発ツール

#### [ConfirmPlaylistDifficulty](https://github.com/rakkyo150/ConfirmPlaylistDifficulty)
プレイリストが指定している難易度を選んでいるかどうかをプレイボタンの色で判断できるようになるMod

![Gif](https://github.com/rakkyo150/ConfirmPlaylistDifficulty/blob/master/Gif/ConfirmPlaylistDifficulty.gif)

#### [MissCountOnResults](https://github.com/rakkyo150/MissCountOnResults)
リザルト画面でミス数と最高記録からのミス数の増減を表示するMOD<br>
[SongPlayHistoryContinued-Extended](#SongPlayHistoryContinued-Extended)との連携をしないとミス数の増減は表示されないです

![スクショ](https://user-images.githubusercontent.com/86054813/133114217-15b24401-343d-4bd2-9ffa-f3381dea164f.jpg)

#### [BeatSaberCustomNotes-NoteTrail](https://github.com/rakkyo150/BeatSaberCustomNotes-NoteTrail)
ノーツにトレイルを付けることで時間依存性を視覚化しようとしたMOD<br>

#### [CloseBrowsers](https://github.com/rakkyo150/CloseBrowsers)
ゲームプレイ画面移行時にブラウザーを終了させるBeat SaberのMOD<br>
ブラウザー消し忘れてプチフリとか起こしたことある人は導入してみるといいかも

#### [dailypp](https://github.com/rakkyo150/dailypp)
スコアセイバーアカウントの情報を24:00に毎日投稿するTwitterのBotでした<br>
もともとWebAPIを触ってみたかったのが作成の主な理由だったので、ScoreSaberがAPIを導入してからAPIに対応させていません<br>
ということで、今は稼働していないです

![dailypp](https://user-images.githubusercontent.com/86054813/126014296-f4f4d666-74af-455f-80e6-1fcb8462273e.png)


## osu!関係

### [OsuNewBeatmapPackNotification2Discord](https://github.com/rakkyo150/OsuNewBeatmapPackNotification2Discord)
osu!stdのビートマップパックの更新があったらwebhookに通知を投げるやつ<br>
Discordでしか動作確認してないです<br>

## その他ツール

### [Gmail2Discord](https://github.com/rakkyo150/Gmail2Discord)
定期的に未読のGmailのメールをDiscordに投げるGASのスクリプト<br>
GASを触ってみたかったから作った
