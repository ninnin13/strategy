//チュートリアルホーム画面
forever(() => {
  if(gameStatus == "description"){
    if(backNumber == 0){
      nextpage()
      after(2, "seconds", () => {
       homeback2.sendToFront()
       battletab.sendToFront()
       homeback2.show()
       battlestart.show()
       battletab.show()
       battlestart.sendToFront()
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
    DK2clones.push(dog)
    DK2clones.push(firemagician)
    itemindeck.push(seastone)
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
  duringtutorial = 1
  TTtab.image.show()
  TTtab.image.sendToFront()
  TTback.image.show()
  TTback.image.sendToFront()
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
  //console.log(textnumber)
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
    if(textstop == 0 && mouseDown && TTback.image.mouseOver){
      DSset()
      if(textnumber == 27){
      yourdeck[choicecardnumber] = "Dl"
      yourdeck.remove("Dl")
      var Ycard = {
        image: new Image({
          url: `./image/card/dog.png`,
          width: cardsize/5,
          height: cardsize/5,
        }),
        name: "dog" + cardNumber2,
        TorF: 1,
        type: dog,
        number: cardNumber2,
        go: dog.gotype,
        step: dog.goblock,
        propertydata: dog.property,
        keep: "nothing",
        keep2: "nothing",
        keep3: "nothing",
        keep4: "nothing",
        check: "nothing",
        effect: dog.effect,
        technique: dog.technique,
        death: 0
      }
      clear = 0
       Ycard.image.x = 3.5*grid
       Ycard.image.y = -8.5*grid
       Ycard.image.angle = LEFT
       Ycards.push(Ycard)
      ////console.log(Ycard.name)
      cardNumber2 += 1
      }
      if(textnumber == stopnumber){
        descriptionText.text.hide()
        duringtutorial = 0
        TTtab.image.hide()
        TTback.image.hide()
        if(stopnumber == 30){
         battling = 0
         reset()
         cards.forEach(card => {
           card.image.hide()
         })
         Ycards.forEach(Ycard => {
           Ycard.image.hide()
         })
         after(0.5, "seconds", () => {
           pagechange()
           gameStatus = "home"
           backNumber = 0
        })
       }
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
   repeatcheck(10)
  }
  if(DSmode == "配置4"){
   if(textsign == 0){
     DSstart(10)
   }
   repeatcheck(12)
  }
  if(DSmode == "移動1"){
   if(textsign == 0){
     DSstart(12)
   }
   repeatcheck(15)
  }
  if(DSmode == "移動2"){
   if(textsign == 0){
     DSstart(15)
   }
   repeatcheck(16)
  }
  if(DSmode == "移動3"){
   if(textsign == 0){
     DSstart(16)
   }
   repeatcheck(19)
  }
  if(DSmode == "移動4"){
   if(textsign == 0){
     DSstart(19)
   }
   repeatcheck(20)
  }
  if(DSmode == "道具1"){
   if(textsign == 0){
     DSstart(20)
   }
   repeatcheck(22)
  }
  if(DSmode == "道具2"){
   if(textsign == 0){
     DSstart(22)
   }
   repeatcheck(24)
 }
 if(DSmode == "道具3"){
  if(textsign == 0){
    DSstart(24)
  }
  repeatcheck(25)
 }
 if(DSmode == "道具4"){
  if(textsign == 0){
    DSstart(25)
  }
  repeatcheck(27)
 }
 if(DSmode == "技1"){
  if(textsign == 0){
    DSstart(27)
  }
  repeatcheck(30)
 }
 if(DSmode == "技2"){
  if(textsign == 0){
    DSstart(30)
  }
  repeatcheck(31)
 }
 if(DSmode == "技3"){
  if(textsign == 0){
    DSstart(31)
  }
  repeatcheck(34)
 }
 if(DSmode == "終了"){
  if(textsign == 0){
    DSstart(34)
  }
  repeatcheck(35)
 }
 // }
})
