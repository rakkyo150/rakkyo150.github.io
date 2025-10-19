---
title: "BeatSaber関係"
date: 2025-10-18T03:21:31+09:00
series: ["制作物"]
series_order: 1
tags: ["Mod", "BeatSaber"]
---
## GetNearRank系

[GetNearRank](https://github.com/culage/GetNearRank)が原案の、順位が近くの人が自分よりPPを多く取ったランク曲を取得してプレイリストにするツール  
ScoreSaberの公式APIが実装されたのをきっかけに作成  
日本ランクでのみ動作  

### GetNearRankMod
PCModを使用できる方用

![スクリーンショット 2021-10-15 022423](https://user-images.githubusercontent.com/86054813/137366553-a565529a-0d47-4335-a632-029e226efcd6.png)

{{< github repo="rakkyo150/GetNearRankMod" showThumbnail=false >}}

### GetNearRankScript

GetNearRankModが使えない環境の方で、WindowsかMacをもっている方用

{{< github repo="rakkyo150/GetNearRankScript" showThumbnail=false >}}

### GetNearRankDocker

GetNearRankModもGetNearRankScriptも使えない方用

{{< github repo="rakkyo150/GetNearRankDocker" showThumbnail=false >}}

## PredictStarNumber系

アンランクの譜面でもランクになったらどれくらいの星がつくか予測するツール

それぞれの関係性は以下の通り

{{< mermaid >}}
flowchart
First(RankedMapData) -- Training Data --> Second(PredictStarNumberHelper)
Second -- Learned Model --> Third(PredictStarNumber)
Second -- Learned Model --> PredictStarNumberMod
Second -- Learned Model --> maybe-overrated-underrated-map-playlist
Second -- Learned Model --> PredictStarNumberExtension
{{< /mermaid >}}

### PredictStarNumber

ブラウザ版  
[こちら](https://predictstarnumber.onrender.com)から利用できます

{{< github repo="rakkyo150/PredictStarNumber" showThumbnail=false >}}

### [PredictStarNumberMod](https://github.com/rakkyo150/PredictStarNumberMod)

Mod版  
オリジナルのBetterSongListとともに使用してください

![スクリーンショット2](https://user-images.githubusercontent.com/86054813/149370978-b97d82a1-ac4a-4268-93e2-817752d37ee0.png)

{{< github repo="rakkyo150/PredictStarNumberMod" showThumbnail=false >}}

### PredictStarNumberExtension

Chrome拡張機能版

{{< github repo="rakkyo150/PredictStarNumberExtension" showThumbnail=false >}}

### maybe-overrated-underrated-map-playlist

PredictStarNumberによる星予測と実際の星予測の差ごとのプレイリストを作成しています

{{< github repo="rakkyo150/maybe-overrated-underrated-map-playlist" showThumbnail=false >}}

## データ・統計

### PredictStarNumberHelper

PredictStarNumberの予測のための学習済みモデルを定期的に作成しています  
ランク譜面の簡単な解析もしています

{{< github repo="rakkyo150/PredictStarNumberHelper" showThumbnail=false >}}

### RankedMapData

PredictStarNumberHelperの学習のためのデータを定期的に更新しています  
csv形式なのでexcelなどで見れます

{{< github repo="rakkyo150/RankedMapData" showThumbnail=false >}}

### player_count_by_bs_version

Beat SaberのバージョンごとやHMDごとなどのプレイヤーの分布を定期的に集計しています

{{< github repo="rakkyo150/player_count_by_bs_version" showThumbnail=false >}}

## Mod管理ツール

### BSModManager

ModAssistantで管理できないBeat SaberのModを管理するツール

![BSModManager](https://user-images.githubusercontent.com/86054813/170963389-e70e6757-a9f7-4b73-a375-c64ede837aa0.png)

{{< github repo="rakkyo150/BSModManager" showThumbnail=false >}}

## カスタムカウンター

### CenterDistanceCounter

斬ったノーツの中心と切断点の絶対的距離・相対的距離の平均をcm単位で表示するCountersPlusのカスタムカウンター

![サンプル](https://github.com/rakkyo150/CenterDistanceCounter/raw/master/Images/sample.png)

{{< github repo="rakkyo150/CenterDistanceCounter" showThumbnail=false >}}

### YokoNotesTokaYurusenaiCounter

横ノーツでミスした回数、ボムを切った回数、壁にめり込んだ回数と時間を表示するカスタムカウンター  
![YokoNotesTokaYurusenaiCounter](https://user-images.githubusercontent.com/86054813/208406697-bc5bc538-7c87-4b2f-b762-14d1b071957a.png)

{{< github repo="rakkyo150/YokoNotesTokaYurusenaiCounter" showThumbnail=false >}}

### AccStandardDeviationCounter

中心精度の標準偏差を表示するCountersPlusのカスタムカウンター  
一番最初に作成したMODなので多少思い入れはありますが、実用性はないです。

![AccStandardDeviationCounter](https://github.com/rakkyo150/AccStandardDeviationCounter/raw/master/Images/sample.jpg)

{{< github repo="rakkyo150/AccStandardDeviationCounter" showThumbnail=false >}}

## 既存MODの改良版

### CounterPlus-Improved

ScoreCounter,ProgressCounter,CutCounter,MissCounter,NoteCounter,NoteLeftCounter,SpeedCounterにおいて、任意の閾値ごとに任意の色を付けることができるようにしたもの  

![Counters+](https://github.com/rakkyo150/CounterPlus-Improved/raw/master/Images/Counters%2B.png)

{{< github repo="rakkyo150/CounterPlus-Improved" showThumbnail=false >}}

### SaberTailor-Improved

改良部分は以下の通り。

- セイバーの位置と角度とワールドオフセットのより細かな設定が可能に
- セイバーの位置とワールドオフセットの上限を拡張
- UIの変更

![SaberTailer](https://github.com/rakkyo150/SaberTailor-Improved/raw/master/Images/process5.png)

{{< github repo="rakkyo150/SaberTailor-Improved" showThumbnail=false >}}

### SongPlayHistoryContinued-Extended

ミスカウントの記録に対応

![hover1](https://user-images.githubusercontent.com/86054813/132974076-e95b8ee9-0e36-49e6-a7f6-28cf983983a0.png)
![hover2](https://user-images.githubusercontent.com/86054813/132974178-5a64ea43-24ff-45ac-a196-2e17e7749024.png)
![max combo](https://user-images.githubusercontent.com/86054813/132974188-2a3af5e4-959f-458c-b985-e471cb67f945.png)

{{< github repo="rakkyo150/SongPlayHistoryContinued-Extended" showThumbnail=false >}}

### BetterMissCounter

旧EnhancedMissCounterの改良版

![image](https://user-images.githubusercontent.com/45233053/153546888-6f96efc3-c32b-48f7-ac36-ffc8991ab48d.png)

CountersPlusのMissCounterとの違いは以下の通り。

- スコアセイバーとビートリーダーから取得した個人の最高ミス数を表示します
- テキストと色をカスタマイズ可能
- ブルームに対応
- より細かな位置調整ができます

メタデータ変えちゃったので、プルリク出さずにこちらでリリースしてます  
2025.10.19現在はフォーク元がリポジトリを削除してしまったようで、私しかメンテしていません

{{< github repo="rakkyo150/BetterMissCounter" showThumbnail=false >}}

## その他オリジナルのもの

### ConfirmPlaylistDifficulty

プレイリストが指定している難易度を選んでいるかどうかをプレイボタンの色で判断できるようになるMod

![Gif](https://github.com/rakkyo150/ConfirmPlaylistDifficulty/blob/master/Gif/ConfirmPlaylistDifficulty.gif)

{{< github repo="rakkyo150/ConfirmPlaylistDifficulty" showThumbnail=false >}}

### MissCountOnResults

リザルト画面でミス数と最高記録からのミス数の増減を表示するMOD  
SongPlayHistoryContinued-Extendedとの連携をしないとミス数の増減は表示されないです

![スクショ](https://user-images.githubusercontent.com/86054813/133114217-15b24401-343d-4bd2-9ffa-f3381dea164f.jpg)

{{< github repo="rakkyo150/MissCountOnResults" showThumbnail=false >}}

### BeatSaverSearchPlaylistCreator

BeatSaverでの検索結果をプレイリストにするGoogle Chromeの拡張機能  

![description](https://user-images.githubusercontent.com/86054813/189758107-60e05119-9d61-4807-9aef-6f8898aa34c0.png)

{{< github repo="rakkyo150/BeatSaverSearchPlaylistCreator" showThumbnail=false >}}

### NotifySSRankChanged

ScoreSaberの順位が変動した時にiOSで通知を出すスクリプト。  
iOS26にアプデしたのが原因かわからないが、通知来なくなった？

{{< github repo="rakkyo150/NotifySSRankChanged" showThumbnail=false >}}

### CloseBrowsers

ゲームプレイ画面移行時にブラウザーを終了させるBeat SaberのMOD  
ブラウザー消し忘れてプチフリとか起こしたことある人は導入してみるといいかも

{{< github repo="rakkyo150/CloseBrowsers" showThumbnail=false >}}

## アーカイブ済み

### BetterSongList-PredictStarNumber
PredictStarNumberModに移行しました

{{< github repo="rakkyo150/BetterSongList-PredictStarNumber" showThumbnail=false >}}

### BeatSaberCustomNotes-NoteTrail
ノーツにトレイルを付けることで時間依存性を視覚化しようとしたMOD  

{{< github repo="rakkyo150/BeatSaberCustomNotes-NoteTrail" showThumbnail=false >}}