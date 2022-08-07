# org
**https://creative-community.space/org/**

## This Page
https://creative-community.space/org/thebestitems/


## about.php
このページは私のベストな持ち物をリストアップするページです。
about.phpではページ左側のこのページの説明について記述します。
95列〜97列に説明文を書きます。
一番下のリンクの管理もしています。増やしたいときは行を増やします。
## about.csv
絞り込みカテゴリーについてを記述するCSVファイル
［絞り込みについて］の表記を変更します。
人が見たときに何のことかわかるように説明を加えたり変更したりします。
## img.csv
カバービジュアル／写真付きリストに表示する内容を記述するCSVファイル
カバービジュアル／写真付きリストは一番のお気に入りのものです。
画像はimgのフォルダに入れます。（フォルダは管理しやすいように増やしてもOK）
（are.naやtumblrに画像を置き、そのリンクを貼るでもOK）
絞り込みカテゴリーを選択、大きさ（cover.cssを参照）を指定、imgフォルダから画像の名前をコピーし貼り付けます。
写真付きリストに表示する品目のタイトルと説明を記述します。
カバービジュアルの並び順は、この記述を反映します。下に追加したものが上レイヤーに反映されます。
写真付きリストは右端から、csvの下から反映されます。
25列まではカバービジュアルに反映され、25列以降は写真付きリストのみに反映されます。
gifも入れれて、切り抜きはpngにしたら入れれます。
## img.php
一番お気に入りのもの
このファイルは触らない
## cover.css
カバービジュアルをスタイリングするCSSファイル
cover.cssにはカバービジュアルの表示サイズが管理してあります。
img.csvにこのサイズを記述してカバービジュアルの大きさを編集します。
## test/index.php 
textフォルダは各リストのフォルダです。
81列にリストのタイトルを記述します。
着るもの / 身支度に使うもの / 読むもの / 聞くもの / 見るもの / 家で使うもの / 飾るもの / その他
## __/list.csv
所有するものリスト用CSVファイル
リストの詳細（持ち物）を管理します。
## index.js
ページの説明文／操作音を設定するジャバスクリプトファイル

*　　


# index.php

<head>はサイトの概要になります。
ここをきちんと記述しておくと、ちゃんとしたサイトとして認識されます。
  
63列の<style>が見た目を変える部分です。
65列〜74列で、テキストや背景などの色を変更します。
83列は絞り込みなどのフォントを管理します。
84列のtransformは長体・平体の記述です。（1,1）の場合デフォルト比率になります。
  
92列はタイトルや説明文おフォントを管理します。
font-familyはまず最初のフォント、そのフォントがなければ次に指定したフォントになります。
  
133列〜134列はスクロールバーの見た目を管理します。
  
311列の<body>はサイトの中身を管理します。
314列はページ右上の小さいタイトルです。
316列は流れる文章です。
319列のは大きな文字のタイトルです。
  
> header > title | meta 編集
> 
> body > ._more | #marquee | #nav を編集
> 
> body > .mousedragscrollable | script > $("#__").load("__/index.php"); を編集
> 


*CSS Text & Color*

フォント一覧

https://www.cssfontstack.com/

https://mimi.moe.in/nmp/fonts/allfonts

https://book.studio947.net/article/1634/

https://fonts.google.com/


カラーチャート

https://fromkato.com/color

https://htmlcolorcodes.com/color-names/


参考ツール

https://picular.co/

https://pigment.shapefactory.co/

https://colorable.jxnblk.com/



GitHub

[https://github.com/the-things-i-we-own](https://github.com/the-things-i-we-own)


GitHub Team

https://github.com/orgs/the-things-i-we-own/teams/org
