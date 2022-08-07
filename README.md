# org
**https://creative-community.space/org/**

## This Page
https://creative-community.space/org/thebestitems/


## about.php
このホームページの説明文を記述するファイル。<br>
97行目にリスト区分についての説明文、<br>
99行目以降に絞り込みについての説明文を書いたら完成。<br>
（リンクが増える場合もこのファイルを編集する）<br>
このファイルはindex.phpの横スクロールリスト一番左に埋め込まれます。<br>

## about.csv
about.php内の絞り込みについて部分に表示するカテゴリー説明文を記述するファイル。<br>
それぞれのカテゴリーについて、よりわかりやすい説明文を用意したら完成。<br>
（カテゴリーが増えた場合もこのファイルに説明文を追加）

## img.csv
カバービジュアル／写真付きリストに表示する内容を記述するCSVファイル<br>
カバービジュアル／写真付きリストは一番のお気に入りのものです。<br>
画像はimgのフォルダに入れます。（フォルダは管理しやすいように増やしてもOK）<br>
（are.naやtumblrに画像を置き、そのリンクを貼るでもOK）<br>
絞り込みカテゴリーを選択、大きさ（cover.cssを参照）を指定、imgフォルダから画像の名前をコピーし貼り付けます。<br>
写真付きリストに表示する品目のタイトルと説明を記述します。<br>
カバービジュアルの並び順は、この記述を反映します。下に追加したものが上レイヤーに反映されます。<br>
写真付きリストは右端から、csvの下から反映されます。<br>
25列まではカバービジュアルに反映され、25列以降は写真付きリストのみに反映されます。<br>
gifも入れれて、切り抜きはpngにしたら入れれます。<br>
## img.php
index.phpの横スクロールリスト一番右に表示される写真付きリストのファイル。<br>
このファイルを編集したら写真付きリストが表示されなくなるので要注意！<br>

## cover.css
カバービジュアルの画像サイズについて書かれたファイル。<br>
img.csvに記述する画像サイズの名前をこのファイルで確認できます。<br>
（このファイルを削除・編集したらカバービジュアルが表示されなくなります。要注意！）<br>

## test/index.php 
新たにテキストリストを追加したいときはこのファイルを複製します。このファイルが原本になるので、触らない。<br>
［ファイルを複製する方法］<br>
testフォルダのindex.phpの、右端のゴミ箱の隣のアイコンを押してコピー<br>
リポジトリーに戻り、add file → create new fileを押して、edit new fileの1にコピーしたものを貼り付け<br>
貼り付けしたらその上のthebestitems/Name your fileにフォルダ（リスト）の名前を記入、／を入れます。その次にindex.phpと記入してコミット<br>
そうするとフォルダ（リスト）の名前のフォルダができます。
リストのタイトルは81列に記述します。
着るもの / 身支度に使うもの / 読むもの / 聞くもの / 見るもの / 家で使うもの / 飾るもの / その他

## __/list.csv
テキストリスト用のcsvファイル。<br>
テキストリストフォルダごとに、品目を記述するlist.csvファイルを作る。

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
