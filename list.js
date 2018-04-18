//カードの位置をリストに入れる。
var wordkeep = []
// var yourcard = []
// yourcard.push("dog")
// yourcard.push("kabuto")
// yourcard.push("penguin")
// yourcard.push("sai")
// yourcard.push("monkey")
// yourcard.push("shark")
// yourcard.push("skymachine")
// yourcard.push("firemagician")
// yourcard.push("skelton")
//相手のカード移動用
// var yourcard2 = []
// yourcard2.push(dog)
// yourcard2.push(kabuto)
// yourcard2.push(penguin)
// yourcard2.push(sai)
// yourcard2.push(monkey)
// yourcard2.push(firemagician)
// yourcard2.push(shark)
// var yourgotype = []
// yourgotype.push("normal")
// yourgotype.push("normal")
// yourgotype.push("unique")
// yourgotype.push("unique")
// yourgotype.push("power")
// yourgotype.push("normal")
// var yourstep = []
// yourstep.push(3)
// yourstep.push(1)
// yourstep.push(1)
// yourstep.push(2)
// yourstep.push(4)
// yourstep.push(1)
//進む場所
var wherecan = []
var fastwherecan = []
var priority = []
//ホーム画面移動用
//ホームで動くもの
var dog2 = {
  image: new Image({
    url: "./image/card/stand/dog.png",
    width: 100,
    height: 100,
  }),
  name: "dog",
  keep: 0,
  keep2: 0,
  keep3: 0,
  keep4: 0,
  SorH: 0
}
dog2.image.hide()
var kabuto2 = {
  image: new Image({
    url: "./image/card/stand/kabuto.png",
    width: 100,
    height: 100,
  }),
  name: "kabuto",
  keep: 0,
  keep2: 0,
  keep3: 0,
  keep4: 0,
  SorH: 0
}
kabuto2.image.hide()
var penguin2 = {
  image: new Image({
    url: "./image/card/stand/penguin.png",
    width: 100,
    height: 70,
  }),
  name: "penguin",
  keep: 0,
  keep2: 0,
  keep3: 0,
  keep4: 0,
  SorH: 0
}
penguin2.image.hide()
var penking2 = {
  image: new Image({
    url: "./image/card/stand/penking.png",
    width: 100,
    height: 100,
  }),
  name: "penking",
  keep: 0,
  keep2: 0,
  keep3: 0,
  keep4: 0,
  SorH: 0
}
penking2.image.hide()
var jyassyu2 = {
  image: new Image({
    url: "./image/card/stand/jyassyu.png",
    width: 100,
    height: 100,
  }),
  name: "jyassyu",
  keep: 0,
  keep2: 0,
  keep3: 0,
  keep4: 0,
  SorH: 0
}
jyassyu2.image.hide()
var angora2 = {
  image: new Image({
    url: "./image/card/stand/angora.png",
    width: 100,
    height: 100,
  }),
  name: "angora",
  keep: 0,
  keep2: 0,
  keep3: 0,
  keep4: 0,
  SorH: 0
}
angora2.image.hide()
var skymachine2 = {
  image: new Image({
    url: "./image/card/stand/skymachine.png",
    width: 100,
    height: 100,
  }),
  name: "skymachine",
  keep: 0,
  keep2: 0,
  keep3: 0,
  keep4: 0,
  SorH: 0
}
skymachine2.image.hide()
var eariaru2 = {
  image: new Image({
    url: "./image/card/stand/eariaru.png",
    width: 100,
    height: 100,
  }),
  name: "eariaru",
  keep: 0,
  keep2: 0,
  keep3: 0,
  keep4: 0,
  SorH: 0
}
eariaru2.image.hide()
var skelton2 = {
  image: new Image({
    url: "./image/card/stand/skelton.png",
    width: 100,
    height: 100,
  }),
  name: "skelton",
  keep: 0,
  keep2: 0,
  keep3: 0,
  keep4: 0,
  SorH: 0
}
skelton2.image.hide()
var walklist = []
walklist.push(dog2)
walklist.push(kabuto2)
walklist.push(penguin2)
walklist.push(penking2)
walklist.push(jyassyu2)
walklist.push(angora2)
walklist.push(skymachine2)
walklist.push(eariaru2)
walklist.push(skelton2)
every(2, "seconds", () => {
  if(walksplite == 1){
   range(0,walklist.length).forEach(i => {
     if(walklist[i].SorH == 1){
     walklist[i].keep = random(-1,1)
     walklist[i].keep2 = random(-1,1)
     walklist[i].keep3 = walklist[i].image.x
     walklist[i].keep4 = walklist[i].image.y
     Tkeepmath2 = walklist[i].keep*110
     Tkeepmath3 = walklist[i].keep2*110
     console.log(walklist[i].keep4)
     if(walklist[i].keep3 + Tkeepmath2 < 10*grid && walklist[i].keep3 + Tkeepmath2 > -10*grid && walklist[i].keep4 +  Tkeepmath3 < 6*grid && walklist[i].keep4 + Tkeepmath3 > -10*grid ){
      repeat(random(90,110), () => {
        walklist[i].image.x += walklist[i].keep
        walklist[i].image.y += walklist[i].keep2
      })
     }
    }
   })
  }
})
//
var allcard = []
var cardsetting = []
cardsetting.push(dog)
cardsetting.push(kabuto)
cardsetting.push(penguin)
cardsetting.push(penking)
cardsetting.push(sai)
cardsetting.push(monkey)
cardsetting.push(angora)
cardsetting.push(shark)
cardsetting.push(jyassyu)
cardsetting.push(skymachine)
cardsetting.push(eariaru)
cardsetting.push(firemagician)
cardsetting.push(skelton)
var costshows = []
range(0,cardsetting.length).forEach(i => {
  var costshow = {
    text: new Text({
     text: () => "コスト:" + cardsetting[i].cost,
     size: 30,
     color: "rgb(100, 50, 240)",
     fontFamily: "arial"
   }),
    of:cardsetting[i]
  }
  costshow.text.hide()
  costshows.push(costshow)
})
// var blockpoint = []
// blockpoint.push(dog,"バランス")
// blockpoint.push(kabuto,"バランス")
// blockpoint.push(penguin,"特殊攻撃")
// blockpoint.push(sai,"特殊攻撃")
// blockpoint.push(monkey,"攻撃特化")
// blockpoint.push(firemagician,"バランス")
// blockpoint.push(shark,"攻撃特化")
//カード位置を把握
var mycardX = []
var mycardY = []
var yourcardX = []
var yourcardY = []
//消す
var Ydelatelist = []
//音楽
var musicname = []
musicname.push(music0)
musicname.push(music1)
musicname.push(music2)
musicname.push(home0)
musicname.push(home1)
musicname.push(home2)
//チュートリアル
var textlist = []
textlist.push("こんにちは")
textlist.push("今から、戦いの基本を教えます。")
textlist.push("まずは、配置の仕方を教えます。")
textlist.push("「配置」のボタンを押してください。")
textlist.push("左の犬のカードをクリックしてください。")
textlist.push("下に表示されている範囲内に置くと、配置できます。")
textlist.push("配置は１ターン2体までです。")
textlist.push("次は、火の魔法使いを範囲の右上端配置してください。")
textlist.push("右に写っているカードはカードは「W」で上に、「S」で下に動かせます.")
textlist.push("このターンにできることは終わったので、「戻る」、「終了」を押してください。") //9
textlist.push("次は、移動です。")
textlist.push("「移動」のボタンを押してください。")
textlist.push("配置した犬をクリックしてください")
textlist.push("今表示されている赤色のところが、移動できる範囲です")
textlist.push("一番前のマスの赤色のところをクリックしてください。")
textlist.push("戻るを押してください。")
textlist.push("次は、アイテムです。")
textlist.push("「アイテム」のボタンを押してください。")
textlist.push("左の、海の秘石をクリックしてください。")
textlist.push("アイテムは、カードがどこにいても使用できます。") //19
textlist.push("犬のカードをクリックしてください。")
textlist.push("これでアイテムを使えました。")
textlist.push("戻るを押してください。")
textlist.push("最後に、技です。")
textlist.push("「技」のボタンを押してください。")
textlist.push("配置した火の魔法使いをクリックして,fireballを選んでください")
textlist.push("今表示されている赤色のところが、攻撃できる範囲です")
textlist.push("特別に,一体敵を出します")
textlist.push("敵のいるマスをクリックしてください")
textlist.push("これですべての説明が終わりました。ホームに戻ります。")
var usetextlist = []
//ロード背景
var loads = []
var load = {
  image: new Image({
    url: "./background/loadback.jpg",
    width: 40*grid,
    height: 20*grid,
  })
}
load.image.hide()
loads.push(load)
var load = {
  image: new Image({
    url: "./background/loadback2.jpg",
    width: 40*grid,
    height: 20*grid,
  })
}
load.image.hide()
loads.push(load)
//デッキ
var clones = []
var deck = []
var deck2 = []
var cardkind = []
var yourdeck = []
//アイテム
var itemsetting = []
itemsetting.push(landstone)
itemsetting.push(waterstone)
itemsetting.push(skystone)
itemsetting.push(firestone)
itemsetting.push(undeadstone)
var itemkind = []
// itemkind.push(landstone)
// itemkind.push(waterstone)
var itemindeck = []
var Yitemindeck = []
// itemindeck.push(waterstone)
var cloneeffects = []
//進める向き
var outdirection =[]
var Youtdirection =[]
//技
var techniqueall = []
techniqueall.push(fireball)
var TCclones = []
var Twherecan = []
//0=陸,2=水,3=空,1=火,5=墓
var mapData = [
  [0,0,0,0,0,0,0,3,0,0,0,2,0,0,0,0,0,0,2,0,0,0,3,0,0,0,0,0,0,0],
  [0,5,5,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0],
  [0,5,5,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
  [0,1,1,0,0,0,0,0,0,0,0,0,0,5,5,5,5,0,0,0,0,0,0,0,0,0,3,1,1,0],
  [0,1,1,3,0,0,0,0,0,0,0,0,0,5,5,5,5,0,0,0,0,0,0,0,0,0,0,1,1,0],
  [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,5,5,0],
  [0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,5,5,0],
  [0,0,0,0,0,0,0,3,0,0,0,2,0,0,0,0,0,0,2,0,0,0,3,0,0,0,0,0,0,0]
];
