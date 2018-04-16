//説明のページ(予定)
forever(() => {
  if(gameStatus == "description"){
    if(backNumber == 0){
      nextpage()
      after(2, "seconds", () => {
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
       newmusic()
       homemusic = 1
       startmusic = 1
      // if(deck.length > 0 || deck.length = 0){
      //   range(0,deck.length).forEach(i => {
      //      check
      //   })
      // }
     })
     backNumber = 1
    }
  }
  if(battlestart.mouseOver && mouseDown && nextstop == 0){
    deck2.push(dog)
    deck2.push(jyassyu)
    deck2.push(skymachine)
    deck2.push(firemagician)
    itemindeck.push(waterstone)
    gameStatus2 = "DSduring"
    gameStatus = "battle"
    backNumber = 0
    pagechange()
    walksplite = 0
    range(0,walklist.length).forEach(i => {
      walklist[i].SorH = 0
    })
  }
})
function DSstart(startText) {
  textnumber = startText
  Textinwhat = textlist[textnumber]
  descriptionText.text.show()
  descriptionText.text.sendToFront()
  textsign = 1
  usetextlist.push(DSmode)
  textstop = 1
  after(1, "seconds", () => {
    textstop = 0
  })
}
function DSset() {
  duringtutorial = 1
  textnumber += 1
  console.log(textnumber)
  Textinwhat = textlist[textnumber]
  descriptionText.text.show()
  descriptionText.text.sendToFront()
  textstop = 1
  after(1, "seconds", () => {
    textstop = 0
  })
}
function repeatcheck(stopnumber) {
  repeatUntil(() => textnumber < stopnumber, () => {}, () => {
    if(textstop == 0 && mouseDown){
      DSset()
      if(textnumber == stopnumber){
        descriptionText.text.hide()
        duringtutorial = 0
      }
    }
  })
}
forever(() => {
 // if(!(DSmode == "none")){
  if(DSmode == "はじめに"){
    if(textsign == 0){
      DSstart(0)
      // DSmode = "none"
    }
    repeatcheck(4)
  }
  if(DSmode == "配置1"){
   if(textsign == 0){
      DSstart(4)
   }
   repeatcheck(5)
  }
  if(DSmode == "配置2"){
   if(textsign == 0){
     DSstart(5)
   }
   repeatcheck(6)
  }
  if(DSmode == "配置3"){
   if(textsign == 0){
     DSstart(6)
   }
   repeatcheck(9)
  }
  if(DSmode == "配置4"){
   if(textsign == 0){
     DSstart(9)
   }
   repeatcheck(10)
  }
  if(DSmode == "移動1"){
   if(textsign == 0){
     DSstart(10)
   }
   repeatcheck(12)
  }
  if(DSmode == "移動2"){
   if(textsign == 0){
     DSstart(12)
   }
   repeatcheck(13)
  }
  if(DSmode == "移動3"){
   if(textsign == 0){
     DSstart(13)
   }
   repeatcheck(15)
  }
  if(DSmode == "移動4"){
   if(textsign == 0){
     DSstart(15)
   }
   repeatcheck(16)
  }
  if(DSmode == "道具4"){
   if(textsign == 0){
     DSstart(16)
   }
   repeatcheck(18)
  }
 // }
})
