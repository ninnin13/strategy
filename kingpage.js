
var tile40 = new Text({
  text: () => "40×40",
  size: 30,
  color: "rgb(68,160,119)",
  fontFamily: "arial",
})
tile40.hide()
var ok = 0

var king = 0
var nextTouchi = 0
var kingnumber = 0
var up = 0
var undeadKingimage = new Image({
url: "./image/king/spector.png",
 width: 400,
 height: 400,
})
var earthSwordsmanimage =  new Image({
url: "./image/king/esm.png",
 width: 270,
 height: 440,
})
var fireWizardimage =  new Image({
url: "./image/king/fire.png",
 width: 330,
 height: 330,
})
var waterWizardimage =  new Image({
url: "./image/king/waterm.png",
 width: 340,
 height: 340,
})
var airWizardimage =  new Image({
url: "./image/king/airm.png",
 width: 340,
 height: 490,
})
undeadKingimage.x = -450
earthSwordsmanimage.x = -450
waterWizardimage.x = -450
fireWizardimage.x = -450
airWizardimage.x = -450
airWizardimage.y = -20
waterWizardimage.y = 20
fireWizardimage.y = 20
earthSwordsmanimage.y = 0
undeadKingimage.hide()
earthSwordsmanimage.hide()
fireWizardimage.hide()
waterWizardimage.hide()
airWizardimage.hide()
var homeback = new Image({
  url: "./background/homeback.png",
  width: 15*80,
  height: 15*40,
})
var clearArea = new Rectangle({
  width: 15*20,
  height: 15*30,
  color: "lightblue"
})
var battle = new Text({
  text: () => "戻る",
  size: 40,
  color: "rgb(68,160,119)",
  fontFamily: "arial",
})
var earthSwordsman = new Text({
text: () => "大地の剣士",
size: 30,
color: "green",
})
var kingicon = new Image({
  url: "./image/icon/load.png",
  width: 50,
  height: 50,
})
var undeadKing = new Text({
text: () => "アンデットキング",
size: 30,
color: "green",
})
var fireWizard = new Text({
text: () => "火の魔法使い",
size: 30,
color: "green",
})
var waterWizard = new Text({
text: () => "水の魔法使い",
size: 30,
color: "green",
})
var airWizard = new Text({
text: () => "空の魔法使い",
size: 30,
color: "green",
})
airWizard.hide()
waterWizard.hide()
fireWizard.hide()
undeadKing.hide()
earthSwordsman.hide()
airWizard.x = 120
airWizard.y = -160
waterWizard.x = 120
waterWizard.y = -190
undeadKing.x = 120
undeadKing.y = -220
fireWizard.x = 120
fireWizard.y = -250
earthSwordsman.x = 120
earthSwordsman.y = -280
kingicon.hide()
homeback.hide()
clearArea.hide()
battle.hide()
var initial = new Text({
text: () => "初期カード",
size: 30,
color: "green",
textAlign: "left"
})
var special = new Text({
text: () => "特殊効果",
size: 30,
color: "green",
textAlign: "left"
})
var kingname1 = new Text({
text: () => "アンデットキング",
size: 30,
color: "green",
})
var kingname2 = new Text({
text: () => "大地の剣士",
size: 30,
color: "green",
})
var kingname3 = new Text({
text: () => "火の魔法使い",
size: 30,
color: "green",
})
var kingname4 = new Text({
text: () => "水の魔法使い",
size: 30,
color: "green",
})
var kingname5 = new Text({
text: () => "空の魔法使い",
size: 30,
color: "green",
})
var costimage = new Text({
text: () => "コスト増減:" + cost,
size: 30,
color: "green",
textAlign: "left"
})
costimage.hide()
costimage.x = -290
costimage.y = -100
kingname1.hide()
kingname1.x = -450
kingname1.y = 240
kingname2.hide()
kingname2.x = -450
kingname2.y = 240
kingname3.hide()
kingname3.x = -450
kingname3.y = 240
kingname4.hide()
kingname4.x = -450
kingname4.y = 240
kingname5.hide()
kingname5.x = -450
kingname5.y = 240
special.hide()
special.x = -300
special.y = 100
initial.hide()
initial.x = -300
initial.y = 260
forever(() => {
   if(gameStatus == "king"){
     //背景
    if(backNumber == 0){
      card1.sendToFront()
      card2.sendToFront()
      card2plus.sendToFront()
      card3.sendToFront()
      card4.sendToFront()
      card4plus.sendToFront()
      card5.sendToFront()
      card6.sendToFront()
      card7.sendToFront()
      card8.sendToFront()
      card9.sendToFront()
      ability1.sendToFront()
    costimage.sendToFront()
      homeback.show()
      clearArea.show()


     clearArea.x = -450

        battle.x = -550
        battle.y = -270

        battle.show()

        kingicon.show()

        kingicon.x = 0
        kingicon.y = -255


      backNumber = 1

    }
    //完全に常に動作//
     if(kingicon.mouseOver && mouseDown){
       ok = 1
       }
      if(ok == 1){
        undeadKingimage.sendToFront()
        earthSwordsmanimage.sendToFront()
        fireWizardimage.sendToFront()
        waterWizardimage.sendToFront()
        airWizardimage.sendToFront()
        undeadKing.sendToFront()
        undeadKing.show()
        earthSwordsman.sendToFront()
        earthSwordsman.show()
        fireWizard.sendToFront()
        fireWizard.show()
        waterWizard.sendToFront()
        waterWizard.show()
        airWizard.sendToFront()
        airWizard.show()
     }
     if(undeadKing.mouseOver && mouseDown){
       cost = -2
       ok = 0
       up = 1
       kingchoice()
       costimage.show()
       kingname1.show()
       initial.show()
       special.show()
       card1.show()
       ability1.show()
     }
     if(earthSwordsman.mouseOver && mouseDown){
       cost = -3
       ok = 0
       up = 2
       kingchoice()
       costimage.show()
       kingname2.show()
       initial.show()
       card2.show()
       card2plus.show()
       card3.show()
     }
     if(fireWizard.mouseOver && mouseDown){
       cost = -3
       ok = 0
       up = 3
       kingchoice()
       costimage.show()
       kingname3.show()
       initial.show()
       card4.show()
       card4plus.show()
       card5.show()
     }
     if(waterWizard.mouseOver && mouseDown){
       cost = -1
       ok = 0
       up = 4
       kingchoice()
       costimage.show()
       kingname4.show()
       initial.show()
       card6.show()
       card7.show()
     }
     if(airWizard.mouseOver && mouseDown){
       cost = 0
       ok = 0
       up = 5
       kingchoice()
       costimage.show()
       kingname5.show()
       initial.show()
       card8.show()
       card9.show()
     }

     if(up == 1){
       undeadKingimage.show()

     }
     if(up == 2){
       earthSwordsmanimage.show()

     }
     if(up == 3){
       fireWizardimage.show()

     }
     if(up == 4){
       waterWizardimage.show()


     }
     if(up == 5){
       airWizardimage.show()

     }




  }
})
