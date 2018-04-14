//仕様素材サイト表示//
var rd = new Text({
  text: () => "素材:   Rド",
  size: 20,
  color: "blue",
  fontFamily: "arial",
})
rd.x = 540
rd.y = -230
var ma = new Text({
  text: () => "魔王魂",
  size: 20,
  color: "blue",
  fontFamily: "arial",
})
ma.x = 570
ma.y = -260
var am = new Text({
  text: () => "甘茶",
  size: 20,
  color: "blue",
  fontFamily: "arial",
})
am.x = 570
am.y = -290

//スタート画面//


var back = new Image({
  url: "./background/map40.png",
  width: 15*80,
  height: 15*40,
})
var gameName1 = new Image({
  url: "./image/letter/brick.png",
  width: 550,
  height: 110,
})
gameName1.y = 190
var gameName2 = new Image({
  url: "./image/letter/battle.png",
  width: 300,
  height: 60,
})
gameName2.x = -220
gameName2.y = 240
var redTab = new Image({
  url: "./image/tab/red.png",
  width: 140,
  height: 50,
})
redTab.y = 15
var orangeTab = new Image({
  url: "./image/tab/orange.png",
  width: 140,
  height: 50,
})
orangeTab.y = -100
var startText = new Text({
  text: () => "START",
  size: 40,
  color: "rgb(184,242,140)",
  fontFamily: "arial",
})
startText.y = 20
var loadText = new Text({
  text: () =>"始めに",
  size: 40,
  color: "rgb(68,160,119)",
  fontFamily: "arial",
})

loadText.y = -100
rd.sendToFront()
ma.sendToFront()
am.sendToFront()

forever(() => {
  if (gameStatus == "start"){
    if(startText.mouseOver && mouseDown) {
      startText.hide()
      loadText.hide()
      gameName1.hide()
      gameName2.hide()

      gameStatus = "home"
    }
    if(loadText.mouseOver && mouseDown) {
      startText.hide()
      loadText.hide()
      gameName1.hide()
      gameName2.hide()
      gameStatus = "description"
    }

  }
})
