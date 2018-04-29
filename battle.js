
var backbattle = new Image({
  url: "./background/battlemap2.png",
  width: 15*80,
  height: 15*40,
})

var startbattle = new Text({
  text: () => "開始",
  size: 65,
  color: "rgb(200, 50, 120)",
  fontFamily: "arial",
})
var SBback = new Image({
  url: "./image/tab/blue.png",
  width: 210,
  height: 75,
})
var myhp = new Text({
  text: () => "HP" + myHP,
  size: 30,
  color: "rgb(100, 100, 200)",
  fontFamily: "arial",
})
var yourhp = new Text({
  text: () => "HP" + yourHP,
  size: 30,
  color: "rgb(200, 100, 100)",
  fontFamily: "arial",
})

backbattle.hide()
startbattle.hide()
SBback.hide()
myhp.hide()
myhp.x = 500
myhp.y = -280
yourhp.hide()
yourhp.x = -500
yourhp.y = 280

forever(() => {
   if(gameStatus == "battle"){
     //背景
    if(backNumber == 0){
      backbattle.show()
      backbattle.sendToFront()
      backbattle.x = 0
      backbattle.y = 0
      mapchips.forEach(mapchip => {
        mapchip.image.show()
        mapchip.image.sendToFront()
      })
      SBback.show()
      SBback.sendToFront()
      SBback.x = 0
      SBback.y = -200
      startbattle.show()
      startbattle.sendToFront()
      startbattle.x = 0
      startbattle.y = -200

      backNumber = 1
    }
    if(mouseDown && SBback.mouseOver){
      battling = 1
      backNumber2 = 1
    }
    if(battling == 1){
      if (backNumber2 == 1){
        startbattle.hide()
        SBback.hide()
        myHP = 3
        yourHP = 3
        myhp.show()
        myhp.sendToFront()
        yourhp.show()
        yourhp.sendToFront()
        nextturn = 1
        kingname.show()
        kingname.sendToFront()
        newmusic()
        musictype = "battle"
        startmusic = 1
        deckkeep()
         if(gameStatus2 == "DSduring"){
           deck.push(dog)
           deck.push(firemagician)
           itemindeck.push(seastone)
         }
        kind()
        itemkindwhat()
        // castle.image.show()
        // yourcastle.image.show()
        // castle.image.sendToFront()
        // yourcastle.image.sendToFront()
        existcard()
        existitem()
        YDcraft()
        STtechnique = 1
        turnnumber = 0
        range(0,walklist.length).forEach(i => {
          imagesize(walklist[i].image,250)
          walklist[i].image.x = -12*grid
          walklist[i].image.y = 4*grid
        })
        backNumber2 = 0
      }
      if(nextturn == 1)  {
        if (turn == "my"){
         myturn()
        }else{
         yourturn()
        }
        startTurn = 1
        nextturn = 0
      }

      if(Sback.image.mouseOver && mouseDown){
        cardstatushide()
        itemstatushide()
      }
    }
  }
})
