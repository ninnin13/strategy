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
//アイテムの単体画像
var soloitemlist = []
soloitemlist.push(landstone2)
soloitemlist.push(waterstone2)
soloitemlist.push(skystone2)
soloitemlist.push(firestone2)
soloitemlist.push(undeadstone2)
//ホーム画面移動用
var walklist = []
walklist.push(dog2)
walklist.push(kabuto2)
walklist.push(penguin2)
walklist.push(penking2)
walklist.push(sai2)
walklist.push(monkey2)
walklist.push(shark2)
walklist.push(jyassyu2)
walklist.push(angora2)
walklist.push(skymachine2)
walklist.push(eariaru2)
walklist.push(firemagician2)
walklist.push(saramanda2)
walklist.push(skelton2)
walklist.push(polter2)
walklist.push(grendel2)
walklist.push(mirror2)
every(1.8, "seconds", () => {
  if(walksplite == 1){
   range(0,walklist.length).forEach(i => {
     if(walklist[i].SorH == 1){
     walklist[i].keep = random(-1,1)
     walklist[i].keep2 = random(-1,1)
     walklist[i].keep3 = walklist[i].image.x
     walklist[i].keep4 = walklist[i].image.y
     Tkeepmath2 = walklist[i].keep*110
     Tkeepmath3 = walklist[i].keep2*110
     //console.log(walklist[i].keep4)
     if(walklist[i].keep3 + Tkeepmath2 < 9.5*grid && walklist[i].keep3 + Tkeepmath2 > -9.5*grid && walklist[i].keep4 +  Tkeepmath3 < 5.5*grid && walklist[i].keep4 + Tkeepmath3 > -9.5*grid ){
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
cardsetting.push(saramanda)
cardsetting.push(skelton)
cardsetting.push(polter)
cardsetting.push(grendel)
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
textlist.push("青い範囲内に置くと、配置できます。")
textlist.push("配置は１ターン2体までです。")
textlist.push("次は、火の魔法使いを")
textlist.push("範囲の右上端配置してください。")
textlist.push("カードは「W」,「S」で上下に動かせます.")
textlist.push("このターンにできることは終わったので、") //10
textlist.push("「戻る」、「終了」を押してください。") //11
textlist.push("次は、移動です。")
textlist.push("移動は、配置した次のターンにしかできません")
textlist.push("「移動」のボタンを押してください。")
textlist.push("配置した犬をクリックしてください")
textlist.push("今表示されている赤色のところが、")
textlist.push("移動できる範囲です")
textlist.push("好きなマスをクリックしてください。")
textlist.push("戻るを押してください。")
textlist.push("次は、道具です。")
textlist.push("「道具」のボタンを押してください。")
textlist.push("左の、海の秘石をクリックしてください。")
textlist.push("アイテムは、1ターンに2回しか使えません。") //19
textlist.push("犬のカードをクリックしてください。")
textlist.push("これでアイテムを使えました。")
textlist.push("戻るを押してください。")
textlist.push("最後に、技です。")
textlist.push("「技」のボタンを押してください。")
textlist.push("配置した火の魔法使いをクリックして,")
textlist.push("fireballを選んでください")
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
//
var DK2clones = []
//デッキ
var clones = []
var D2clones = []
var deck = []
var cardkind = []
var yourdeck = []
//アイテム
var itemsetting = []
itemsetting.push(landstone)
itemsetting.push(seastone)
itemsetting.push(skystone)
itemsetting.push(firestone)
itemsetting.push(undeadstone)
var itemkind = []
// itemkind.push(landstone)
// itemkind.push(seastone)
var itemindeck = []
var itemindeck2 = []
var Yitemindeck = []
// itemindeck.push(seastone)
var cloneeffects = []
//進める向き
var outdirection =[]
var Youtdirection =[]
//技
var techniqueall = []
techniqueall.push(fireball)
techniqueall.push(chairattack)
var TCclones = []
var Twherecan = []
//0=陸,2=水,3=空,1=火,5=墓
var mapData = [
  [2,2,2,2,2,2,2,3,0,0,0,2,0,0,6,7,0,0,2,0,0,0,3,2,2,2,2,2,2,2],
  [2,5,5,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2],
  [2,5,5,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2],
  [2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2],
  [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,2],
  [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,2],
  [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,2],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,2],
  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,2],
  [2,1,1,0,0,0,0,0,0,0,0,0,0,5,5,5,5,0,0,0,0,0,0,0,0,0,3,1,1,2],
  [2,1,1,3,0,0,0,0,0,0,0,0,0,5,5,5,5,0,0,0,0,0,0,0,0,0,0,1,1,2],
  [2,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [2,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [2,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
  [2,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
  [2,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
  [2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2],
  [2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,5,5,2],
  [2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,5,5,2],
  [2,2,2,2,2,2,2,3,0,0,0,2,0,0,6,7,0,0,2,0,0,0,3,2,2,2,2,2,2,2]
];
var mapchips = []
function whatHere(n1,n2) {
  keepmath = n1*grid -15*grid
  keepmath = keepmath+0.5*grid
  keepmath2 = n2*-grid
  keepmath2 = keepmath2+10*grid -0.5*grid
  //console.log("X座標" + keepmath + "Y座標" + keepmath2)
}
range(0,mapData.length).forEach(i => {
  // //console.log(i)
  range(0,mapData[i].length).forEach(j => {
    // //console.log(j)
    // //console.log("チップ名" + mapData[i][j])
    if(mapData[i][j] == 0){
      var mapchip = {
        image: new Image({
          url: "./image/mapchip/land.png",
          width: grid,
          height: grid,
        }),
      }
      whatHere(j,i)
      mapchip.image.x = keepmath
      mapchip.image.y = keepmath2
      mapchip.image.hide()
      mapchips.push(mapchip)
    }
    if(mapData[i][j] == 2){
      var mapchip = {
        image: new Image({
          url: "./image/mapchip/sea2.png",
          width: grid,
          height: grid,
        }),
      }
      whatHere(j,i)
      mapchip.image.x = keepmath
      mapchip.image.y = keepmath2
      mapchip.image.hide()
      mapchips.push(mapchip)
    }
    if(mapData[i][j] == 3){
      var mapchip = {
        image: new Image({
          url: "./image/mapchip/sky.png",
          width: grid,
          height: grid,
        }),
      }
      whatHere(j,i)
      mapchip.image.x = keepmath
      mapchip.image.y = keepmath2
      mapchip.image.hide()
      mapchips.push(mapchip)
    }
    if(mapData[i][j] == 1){
      var mapchip = {
        image: new Image({
          url: "./image/mapchip/fire.png",
          width: grid,
          height: grid,
        }),
      }
      whatHere(j,i)
      mapchip.image.x = keepmath
      mapchip.image.y = keepmath2
      mapchip.image.hide()
      mapchips.push(mapchip)
    }
    if(mapData[i][j] == 5){
      var mapchip = {
        image: new Image({
          url: "./image/mapchip/undead.png",
          width: grid,
          height: grid,
        }),
      }
      whatHere(j,i)
      mapchip.image.x = keepmath
      mapchip.image.y = keepmath2
      mapchip.image.hide()
      mapchips.push(mapchip)
    }
    if(mapData[i][j] == 6){
      var mapchip = {
        image: new Image({
          url: "./image/mapchip/castle1.png",
          width: grid,
          height: grid,
        }),
      }
      whatHere(j,i)
      mapchip.image.x = keepmath
      mapchip.image.y = keepmath2
      mapchip.image.hide()
      mapchips.push(mapchip)
    }
    if(mapData[i][j] == 7){
      var mapchip = {
        image: new Image({
          url: "./image/mapchip/castle2.png",
          width: grid,
          height: grid,
        }),
      }
      whatHere(j,i)
      mapchip.image.x = keepmath
      mapchip.image.y = keepmath2
      mapchip.image.hide()
      mapchips.push(mapchip)
    }
  })
})
