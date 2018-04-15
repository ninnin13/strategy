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
    itemindeck.push(landstone)
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
forever(() => {
  if(DSmode == "はじめに"){
    if(textsign == 0){
     textnumber = 0
     Textinwhat = textlist[textnumber]
     descriptionText.text.show()
     descriptionText.text.sendToFront()
     textsign = 1
     usetextlist.push(DSmode)
   }
    repeatUntil(() => textnumber < 5, () => {}, () => {
      if(textstop == 0 && mouseDown){
        textnumber += 1
        console.log(textnumber)
        Textinwhat = textlist[textnumber]
        descriptionText.text.show()
        descriptionText.text.sendToFront()
        textstop = 1
        if(textnumber == 4){
          descriptionText.text.hide()
        }
      }
    })
  }
  if(DSmode == "配置1"){
    if(textsign == 0){
     textnumber = 4
     Textinwhat = textlist[textnumber]
     descriptionText.text.show()
     descriptionText.text.sendToFront()
     textsign = 1
     usetextlist.push(DSmode)
   }
    repeatUntil(() => textnumber < 5, () => {}, () => {
      if(textstop == 0 && mouseDown){
        textnumber += 1
        console.log(textnumber)
        Textinwhat = textlist[textnumber]
        descriptionText.text.show()
        descriptionText.text.sendToFront()
        textstop = 1
        if(textnumber == 5){
          descriptionText.text.hide()
        }
      }
    })
  }
  if(DSmode == "配置2"){
    if(textsign == 0){
     textnumber = 5
     Textinwhat = textlist[textnumber]
     descriptionText.text.show()
     descriptionText.text.sendToFront()
     textsign = 1
     usetextlist.push(DSmode)
   }
    repeatUntil(() => textnumber < 6, () => {}, () => {
      if(textstop == 0 && mouseDown){
        textnumber += 1
        console.log(textnumber)
        Textinwhat = textlist[textnumber]
        descriptionText.text.show()
        descriptionText.text.sendToFront()
        textstop = 1
        if(textnumber == 6){
          descriptionText.text.hide()
        }
      }
    })
  }
})
