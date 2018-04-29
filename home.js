var homeback2 = new Image({
  url: "./background/back.jpg",
  width: 15*80,
  height: 15*40,
})
var battletab = new Image({
  url: "./image/tab/purple.png",
  width: 150,
  height: 80,
})
var settab = new Image({
  url: "./image/tab/lightgreen.png",
  width: 150,
  height: 80,
})
var optiontab = new Image({
  url: "./image/tab/lightgreen.png",
  width: 150,
  height: 80,
})
var battlestart = new Text({
  text: () => "戦う",
  size: 40,
  color: "rgb(71,234,126)",
  fontFamily: "arial",
})
var settext = new Text({
  text: () => "編成",
  size: 40,
  color: "rgb(71,234,126)",
  fontFamily: "arial",
})
var optiontext = new Text({
  text: () => "設定",
  size: 40,
  color: "rgb(71,234,126)",
  fontFamily: "arial",
})
homeback2.hide()
battlestart.hide()
battlestart.x = -520
battlestart.y = -250
settext.hide()
settext.x = 520
settext.y = -250
optiontext.hide()
optiontext.x = 520
optiontext.y = 250
battletab.hide()
battletab.x = -520
battletab.y = -250
settab.hide()
settab.x = 520
settab.y = -250
optiontab.hide()
optiontab.x = 520
optiontab.y = 250


forever(() => {
   if(gameStatus == "home"){
     //背景
    if(backNumber == 0){
      nextpage()
      after(2, "seconds", () => {
       gameStatus2 = "normal"
       homeback2.sendToFront()
       battletab.sendToFront()
       settab.sendToFront()
       homeback2.show()
       battlestart.show()
       battletab.show()
       battlestart.sendToFront()
       settext.show()
       settab.show()
       settext.sendToFront()
       optiontext.show()
       optiontab.show()
       optiontab.sendToFront()
       optiontext.sendToFront()
       range(0,walklist.length).forEach(i => {
         imagesize(walklist[i].image,100)
       })
       range(0,random(1,4)).forEach(i => {
         ////console.log(walklist[i])
         keepmath = random(0,walklist.length-1)
         walklist[keepmath].image.x = random(-3.5*grid,3.5*grid)
         walklist[keepmath].image.y = random(-3.5*grid,1.5*grid)
         walklist[keepmath].image.show()
         walklist[keepmath].image.sendToFront()
         walklist[keepmath].SorH = 1
       })
       newmusic()
       musictype = "home"
       startmusic = 1
       walksplite = 1
      // if(deck.length > 0 || deck.length = 0){
      //   range(0,deck.length).forEach(i => {
      //      check
      //   })
      // }
     })
     backNumber = 1
    }
  if(settext.mouseOver && mouseDown && nextstop == 0){
    gameStatus = "change"
    backNumber = 0
    pagechange()
    walksplite = 0
    range(0,walklist.length).forEach(i => {
      walklist[i].SorH = 0
    })
  }
  if(battlestart.mouseOver && mouseDown && nextstop == 0){
    gameStatus = "battle"
    backNumber = 0
    pagechange()
    walksplite = 0
    range(0,walklist.length).forEach(i => {
      walklist[i].SorH = 0
    })
  }
  if(optiontab.mouseOver && mouseDown && nextstop == 0){
    gameStatus = "option"
    backNumber = 0
    pagechange()
    walksplite = 0
    range(0,walklist.length).forEach(i => {
      walklist[i].SorH = 0
    })
  }
}
})
