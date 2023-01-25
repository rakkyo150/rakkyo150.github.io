# 作成したMODやツールまとめ<!-- omit in toc -->

## 開発予定リスト<!-- omit in toc -->
[こちら](https://github.com/users/rakkyo150/projects/2)で今後やっていきたいことをリストアップしています

---

- [Beat Saber関係](#beat-saber関係)
  - [GetNearRank系](#getnearrank系)
    - [GetNearRankMod](#getnearrankmod)
    - [GetNearRankScript](#getnearrankscript)
    - [GetNearRankDocker](#getnearrankdocker)
  - [PredictStarNumber系](#predictstarnumber系)
    - [PredictStarNumber](#predictstarnumber)
    - [PredictStarNumberMod](#predictstarnumbermod)
    - [PredictStarNumberExtension](#predictstarnumberextension)
    - [PredictStarNumberHelper](#predictstarnumberhelper)
    - [RankedMapData](#rankedmapdata)
  - [Mod管理系ツール](#mod管理系ツール)
    - [BSModManager](#bsmodmanager)
  - [カスタムカウンター](#カスタムカウンター)
    - [CenterDistanceCounter](#centerdistancecounter)
    - [YokoNotesTokaYurusenaiCounter](#yokonotestokayurusenaicounter)
    - [AccStandardDeviationCounter](#accstandarddeviationcounter)
  - [既存MODの改良版](#既存modの改良版)
    - [CounterPlus-Improved](#counterplus-improved)
    - [SaberTailor-Improved](#sabertailor-improved)
    - [SongPlayHistoryContinued-Extended](#songplayhistorycontinued-extended)
    - [EnhancedMissCounter](#enhancedmisscounter-1)
  - [オリジナルの単発ツール](#オリジナルの単発ツール)
    - [ConfirmPlaylistDifficulty](#confirmplaylistdifficulty)
    - [MissCountOnResults](#misscountonresults)
    - [BeatSaverSearchPlaylistCreator](#beatsaversearchplaylistcreator)
    - [NotifySSRankChanged](#notifyssrankchanged)
    - [BeatSaberCustomNotes-NoteTrail](#beatsabercustomnotes-notetrail-1)
    - [CloseBrowsers](#closebrowsers)
    - [dailypp](#dailypp)
- [osu!関係](#osu関係)
  - [OsuNewBeatmapPackNotification2Discord](#osunewbeatmappacknotification2discord)
- [その他ツール](#その他ツール)
  - [Gmail2Discord](#gmail2discord)

---

## Beat Saber関係

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
リンクは[こちら](https://predictstarnumber.onrender.com)

#### [PredictStarNumberMod](https://github.com/rakkyo150/PredictStarNumberMod)

Mod版<br>
オリジナルのBetterSongListとともに使用してください

![スクリーンショット2](https://user-images.githubusercontent.com/86054813/149370978-b97d82a1-ac4a-4268-93e2-817752d37ee0.png)

#### [PredictStarNumberExtension](https://github.com/rakkyo150/PredictStarNumberExtension)

Chrome拡張機能版

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

#### [BeatSaverSearchPlaylistCreator](https://github.com/rakkyo150/BeatSaverSearchPlaylistCreator)

BeatSaverでの検索結果をプレイリストにするGoogle Chromeの拡張機能<br>

![description](https://user-images.githubusercontent.com/86054813/189758107-60e05119-9d61-4807-9aef-6f8898aa34c0.png)

#### [NotifySSRankChanged](https://github.com/rakkyo150/NotifySSRankChanged)

ScoreSaberの順位が変動した時にiOSで通知を出すスクリプト。<br>

#### [BeatSaberCustomNotes-NoteTrail](https://github.com/rakkyo150/BeatSaberCustomNotes-NoteTrail)

ノーツにトレイルを付けることで時間依存性を視覚化しようとしたMOD<br>

#### [CloseBrowsers](https://github.com/rakkyo150/CloseBrowsers)

ゲームプレイ画面移行時にブラウザーを終了させるBeat SaberのMOD<br>
ブラウザー消し忘れてプチフリとか起こしたことある人は導入してみるといいかも

#### [dailypp](https://github.com/rakkyo150/dailypp)

スコアセイバーアカウントの情報を24:00に毎日投稿するTwitterのBotでした<br>
もともとWebAPIを触ってみたかったのが作成の主な理由だったので、ScoreSaberがAPIを導入してからAPIに対応させていません<br>
ということで、**今は稼働していないです**

![dailypp](https://user-images.githubusercontent.com/86054813/126014296-f4f4d666-74af-455f-80e6-1fcb8462273e.png)

## osu!関係

### [OsuNewBeatmapPackNotification2Discord](https://github.com/rakkyo150/OsuNewBeatmapPackNotification2Discord)

osu!stdのビートマップパックの更新があったらwebhookに通知を投げるやつ<br>
Discordでしか動作確認してないです<br>

## その他ツール

### [Gmail2Discord](https://github.com/rakkyo150/Gmail2Discord)

定期的に未読のGmailのメールをDiscordに投げるGASのスクリプト<br>
GASを触ってみたかったから作った
