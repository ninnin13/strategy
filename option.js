var optionback = new Image({
  url: "./background/optionback.jpg",
  width: 15*80,
  height: 15*40,
})
optionback.hide()
//設定項目
var TStab = new Text({
  text: () => "ターン変更時の速度:",
  size: 30,
  color: "rgb(137,15,101)",
  fontFamily: "arial",
})
TStab.hide()
TStab.x = -12*grid
TStab.y = 7*grid
var TSplus = new Image({
url: "./image/icon/plus.png",
 width: 40,
 height: 40,
})
TSplus.hide()
TSplus.x = -5*grid
TSplus.y = 7.7*grid
var TSminus = new Image({
url: "./image/icon/minus.png",
 width: 40,
 height: 40,
})
TSminus.hide()
TSminus.x = -5*grid
TSminus.y = 6.3*grid
var DKtab = new Text({
  text: () => "限界コスト:",
  size: 30,
  color: "rgb(137,15,101)",
  fontFamily: "arial",
})
DKtab.hide()
DKtab.x = -12*grid
DKtab.y = 4*grid
var DKplus = new Image({
url: "./image/icon/plus.png",
 width: 40,
 height: 40,
})
DKplus.hide()
DKplus.x = -5*grid
DKplus.y = 4.7*grid
var DKminus = new Image({
url: "./image/icon/minus.png",
 width: 40,
 height: 40,
})
DKminus.hide()
DKminus.x = -5*grid
DKminus.y = 3.3*grid
var decklimit = new Text({
  text: () => limitcost,
  size: 30,
  color: "rgb(137,15,101)",
  fontFamily: "arial",
})
decklimit.hide()
decklimit.x = -6*grid
decklimit.y = 4*grid
var turnspeed = new Text({
  text: () => hidespeed2,
  size: 30,
  color: "rgb(137,15,101)",
  fontFamily: "arial",
})
turnspeed.hide()
turnspeed.x = -6*grid
turnspeed.y = 7*grid
forever(() => {
   if(gameStatus == "option"){
     //背景
    if(backNumber == 0){
      nextpage()
      after(2, "seconds", () => {
       optionback.sendToFront()
       optionback.show()
       backTabBack.sendToFront()
       backTab.show()
       backTabBack.show()
       backTab.sendToFront()
       TStab.show()
       TStab.sendToFront()
       TSplus.show()
       TSplus.sendToFront()
       TSminus.show()
       TSminus.sendToFront()
       DKtab.show()
       DKtab.sendToFront()
       DKplus.show()
       DKplus.sendToFront()
       DKminus.show()
       DKminus.sendToFront()
       turnspeed.show()
       turnspeed.sendToFront()
       decklimit.show()
       decklimit.sendToFront()
       newmusic()
       // if(deck.length > 0 || deck.length = 0){
       //   range(0,deck.length).forEach(i => {
       //      check
       //   })
       // }
     })
     backNumber = 1
    }
  }
  if(TSplus.mouseOver && mouseDown){
    if(hidespeed2 < 10 && hidestop == 0){
     hidespeed2 += 1
     hidestop = 1
   }
  }
  if(TSminus.mouseOver && mouseDown){
    if(hidespeed2 > 1 && hidestop == 0){
     hidespeed2 -= 1
     hidestop = 1
   }
  }
  if(DKplus.mouseOver && mouseDown){
    if(limitcost < 100 && hidestop == 0){
     limitcost += 1
     hidestop = 1
   }
  }
  if(DKminus.mouseOver && mouseDown){
    if(limitcost > 10 && hidestop == 0){
     limitcost -= 1
     hidestop = 1
   }
  }
  if(backTabBack.mouseOver && mouseDown){
    gameStatus = "home"
    backNumber = 0
    pagechange()
  }
})
