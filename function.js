function randomDU(number) {
  ////console.log(yourdeck.length)
  if(yourdeck.length > 0){
  if(0 == random(0,number)){
    range(0, random(0,2)).forEach(i => {
     if(yourdeck.length > 0){
      yourdownX = grid*random(-4,3)
      yourdownY = grid*random(6,9)
      choicecardnumber = random(0,yourdeck.length-1)
      //////console.log(choicecardnumber)
      //////console.log(cardsetting[choicecardnumber])
      yourcardfield(yourdeck[choicecardnumber].name,yourdeck[choicecardnumber])
     }
    })
  }else{
   range(0, random(1,2)).forEach(i => {
    if(yourdeck.length > 0){
    yourdownX = grid*random(-4,3)
    yourdownY = grid*random(6,9)
    choicecardnumber = random(0,yourdeck.length-1)
    //////console.log(choicecardnumber)
    //////console.log(cardsetting[choicecardnumber])
    yourcardfield(yourdeck[choicecardnumber].name,yourdeck[choicecardnumber])
    }
   })
  }
 }
}
//基本機能
function reset() {
  range(0,cards.length).forEach(i =>{
    cards.remove(cards[i])
  })
  range(0,itemindeck.length).forEach(i =>{
    itemindeck.remove(itemindeck[i])
  })

}
function outcard(Cn) {
  keepmath = 0
  D2clones.forEach(D2clone => {
    if(D2clone.number == Cn){
      D2clone.image.hide()
      D2clone.none = 1
      D2clones[keepmath] = "Dl"
      clones[keepmath] = "Dl"
      allcost -= D2clone.cost
    }
    keepmath += 1
  })
  D2clones.remove("Dl")
  clones.remove("Dl")
  D2clones.forEach(D2clone => {
    if(D2clone.number > Cn && D2clone.none == 0){
     D2clone.image.x -= 200
     if(D2clone.image.x < 500 && D2clone.image.x > -500){
       D2clone.image.show()
     }else{
       D2clone.image.hide()
     }
    }
  })
  OTOpointx -= 200
}
function Mgocanpush() {
  cards.forEach(card => {
    Wcardtype = card.gotype
    keepmath = card.image.y - 10*grid
    keepmath = keepmath*-1
    keepmath2 = card.image.x + 15*grid
    checksame(mapData[floor(keepmath/grid)][floor(keepmath2/grid)],card.propertydata)
    if(Wcardtype == "normal"){
      range(1,card.range+1+typeplus).forEach(i => {
       WYTData.push(1*i*grid + card.image.x)
       WYTData.push(0*grid + card.image.x)
       WYTData.push(-1*i*grid + card.image.x)
       WYTData.push(0*grid + card.image.x)
       WYTData.push(0*grid + card.image.x)
       WYTData.push(1*i*grid + card.image.x)
       WYTData.push(0*grid + card.image.x)
       WYTData.push(-1*i*grid + card.image.x)
     })
   }
   if(Wcardtype == "unique"){
     range(1,card.range+1+typeplus).forEach(i => {
      WYTData.push(1*i*grid + card.image.x)
      WYTData.push(1*i*grid + card.image.x)
      WYTData.push(1*i*grid + card.image.x)
      WYTData.push(-1*i*grid + card.image.x)
      WYTData.push(-1*i*grid + card.image.x)
      WYTData.push(1*i*grid + card.image.x)
      WYTData.push(-1*i*grid + card.image.x)
      WYTData.push(-1*i*grid + card.image.x)
    })
   }
   if(Wcardtype == "unique2"){
     several = 1
     keepmath3 = card.range+typeplus
     // range(1,card.range+1+typeplus).forEach(i => {
      range(-1*keepmath3,keepmath3+1).forEach(j => {
       range(-1*keepmath3,keepmath3+1).forEach(k => {
        oddOrEven(several)
        if(oddEven == "even"){
         WYTData.push(k*grid + card.image.x)
         WYTData.push(j*grid + card.image.x)
        }
        several += 1
      })
     })
   }
    if(Wcardtype == "power"){
      WYTData.push(1*grid + card.image.x)
      WYTData.push(0*grid + card.image.x)
      WYTData.push(-1*grid + card.image.x)
      WYTData.push(0*grid + card.image.x)
      WYTData.push(0*grid + card.image.x)
      WYTData.push(1*grid + card.image.x)
      range(1,card.range+1+typeplus).forEach(i => {
        WYTData.push(0*grid + card.image.x)
        WYTData.push(-1*i*grid + card.image.x)
     })
     }
     if(Wcardtype == "guard"){
       WYTData.push(1*grid + card.image.x)
       WYTData.push(0*grid + card.image.x)
       WYTData.push(-1*grid + card.image.x)
       WYTData.push(0*grid + card.image.x)
       WYTData.push(0*grid + card.image.x)
       WYTData.push(-1*grid + card.image.x)
      range(1,card.range+1+typeplus).forEach(i => {
         WYTData.push(0*grid + card.image.x)
         WYTData.push(1*i*grid + card.image.x)
      })
      }
     if(Wcardtype == "jump"){
       range(1,card.range+1+typeplus).forEach(i => {
        oddOrEven(i)
        if(oddEven == "odd"){
          range(0,2*i).forEach(j => {
           WYTData.push(i*grid + card.image.x)
           WYTData.push(i-j*grid + card.image.x)
          })
          range(0,2*i).forEach(j => {
           WYTData.push(-i*grid + card.image.x)
           WYTData.push(-i+j*grid + card.image.x)
          })
          range(0,2*i).forEach(j => {
           WYTData.push(i-j*grid + card.image.x)
           WYTData.push(-i*grid + card.image.x)
          })
          range(0,2*i).forEach(j => {
           WYTData.push(-i+j*grid + card.image.x)
           WYTData.push(i*grid + card.image.x)
          })
       }else{

       }
       })
     }
  })
}
function cardstatusshow(name) {
  helpSP1.text.x = -4*grid
  helpSP1.text.y = -0.5*grid
  helpSP2.text.x = -4*grid
  helpSP2.text.y = -2*grid
  helpSP3.text.x = -4*grid
  helpSP3.text.y = -3.5*grid
  statusname = name.nameingame
  statuscost = name.cost
  statusrange = name.goblock
  FromEnglishtoJapanese(name.property)
  statustype = translationResult
  FromEnglishtoJapanese(name.gotype)
  statusgotype = translationResult
  FromEnglishtoJapanese(name.technique)
  statusTC = translationResult
  statusback.image.show()
  statusback.image.sendToFront()
  Sback.image.show()
  Sback.image.sendToFront()
  helpname.text.show()
  helpname.text.sendToFront()
  helprange.text.show()
  helprange.text.sendToFront()
  helptype.text.show()
  helptype.text.sendToFront()
  helpgotype.text.show()
  helpgotype.text.sendToFront()
  helptechnique.text.show()
  helptechnique.text.sendToFront()
  helpcost.text.show()
  helpcost.text.sendToFront()
  keepword = name.solo
  keepword.image.show()
  keepword.image.sendToFront()
  splitByACertainNumbeOofCharacters(name.effectExplanation)
  statusSP1 = splitList[0]
  helpSP1.text.show()
  helpSP1.text.sendToFront()
  if(!(splitList[1] == "no")){
   statusSP2 = splitList[1]
   helpSP2.text.show()
   helpSP2.text.sendToFront()
  }
  if(!(splitList[2] == "no")){
   statusSP3 = splitList[2]
   helpSP3.text.show()
   helpSP3.text.sendToFront()
  }
  helpcost.text.x = -4*grid
  helpcost.text.y = -3.5*grid
}
function cardstatushide() {
  statusback.image.hide()
  Sback.image.hide()
  helpname.text.hide()
  helprange.text.hide()
  helptype.text.hide()
  helpgotype.text.hide()
  helptechnique.text.hide()
  helpSP1.text.hide()
  helpSP2.text.hide()
  helpSP3.text.hide()
  helpcost.text.hide()
  range(0,walklist.length).forEach(i => {
    walklist[i].image.hide()
  })
}
function itemstatusshow(name) {
  helpSP1.text.x = -4*grid
  helpSP1.text.y = 5.5*grid
  helpSP2.text.x = -4*grid
  helpSP2.text.y = 4*grid
  helpSP3.text.x = -4*grid
  helpSP3.text.y = 2.5*grid
  FromEnglishtoJapanese(name.name)
  statusname = translationResult
  statuscost = name.cost
  statusback.image.show()
  statusback.image.sendToFront()
  Sback.image.show()
  Sback.image.sendToFront()
  helpname.text.show()
  helpname.text.sendToFront()
  helpcost.text.show()
  helpcost.text.sendToFront()
  keepword = name.solo
  keepword.image.show()
  keepword.image.sendToFront()
  splitByACertainNumbeOofCharacters(name.effectExplanation)
  statusSP1 = splitList[0]
  helpSP1.text.show()
  helpSP1.text.sendToFront()
  if(!(splitList[1] == "no")){
   statusSP2 = splitList[1]
   helpSP2.text.show()
   helpSP2.text.sendToFront()
  }
  if(!(splitList[2] == "no")){
   statusSP3 = splitList[2]
   helpSP3.text.show()
   helpSP3.text.sendToFront()
  }
}
function itemstatushide() {
  statusback.image.hide()
  Sback.image.hide()
  helpname.text.hide()
  helpcost.text.hide()
  range(0,soloitemlist.length).forEach(i => {
    soloitemlist[i].image.hide()
  })
}
//チュートリアル
function didlist(inname) {
  indid = 0
  range(0,usetextlist.length).forEach(i => {
    if(usetextlist[i] == inname){
      indid = 1
    }
  })
}
//移動優先度
function plusfast(nowx,nowy) {
  range(0,wherecan.length/2).forEach(i => {
    cards.forEach(card => {
      if(card.image.x == nowx + wherecan[i*2]*grid && card.image.y == nowy + wherecan[i*2+1]*grid){
        fastwherecan.push(wherecan[i*2],wherecan[i*2+1])
      }
    })
  })
}
function littlefast() {
  range(0,wherecan.length/2).forEach(i => {
    if(wherecan[i*2+1] < 0){
      fastwherecan.push(wherecan[i*2],wherecan[i*2+1])
    }
  })
}
//デッキ保存
function deckkeep() {
  range(0,deck.length).forEach(i => {
    deck.remove(deck[i])
  })
  range(0,clones.length).forEach(i => {
    deck.push(clones[i])
  })
  range(0,itemindeck.length).forEach(i => {
    itemindeck.remove(itemindeck[i])
  })
  range(0,itemindeck2.length).forEach(i => {
    itemindeck.push(itemindeck2[i])
  })
}
//技を発動させる
function techniquestart() {
  if(TS == 1){
   cards.forEach(card => {
     if(card.image.mouseOver && mouseDown && !(card.technique == "nothing") && card.TorF == 0){
       cards.forEach(card => {
         if(card.TorF == "keep"){
           card.TorF = 0
         }
       })
       card.TorF = "keep"
       //////console.log(card.technique)
       techniquetext = card.technique
       NOx = card.image.x
       NOy = card.image.y
       //////console.log(techniquetext)
       TCcX = card.image.x
       TCcY = card.image.y
       TBb.show()
       TBb.sendToFront()
       TBb.x = card.image.x + grid*5
       TBb.y = card.image.y
       TBt.text.show()
       TBt.text.sendToFront()
       TBt.text.x = card.image.x + grid*3
       TBt.text.y = card.image.y
       TCstopper = 1
       STtechnique = 1
     }
   })
 }
}
function TCchoice() {
  TBt.text.hide()
  TBb.hide()
  ////console.log(TCnumber)
  ////console.log(techniqueall)
  if(techniqueall[TCnumber].type == "attack"){
    attackTC(techniqueall[TCnumber])
    touchstand = 0
    after(1, "seconds", () => {
     touchstand = 1
   })
  }
  if(techniqueall[TCnumber].type == "range"){
    attackRG(techniqueall[TCnumber])
    touchstand = 0
    after(1, "seconds", () => {
     touchstand = 1
   })
  }
}
function attackRG(name){
  var attackOBJ = {
    image: new Image({
      url: `./image/technique/${name.name}.png`,
      width: 3.5*grid,
      height: 3.5*grid,
    }),
  }
  attackOBJ.image.x = TCcX
  attackOBJ.image.y = TCcY
  attackOBJ.image.brightness = 100
  if(name.typeOfRange == "normal"){
    range(1,name.range+1).forEach(i => {
      wherecanTC.push(1*i*grid)
      wherecanTC.push(0*grid)
      wherecanTC.push(-1*i*grid)
      wherecanTC.push(0*grid)
      wherecanTC.push(0*grid)
      wherecanTC.push(1*i*grid)
      wherecanTC.push(0*grid)
      wherecanTC.push(-1*i*grid)
   })
  }
  console.log(wherecanTC)
  Ycards.forEach(Ycard => {
     range(0,wherecanTC.length/2).forEach(i => {
       console.log("X" + attackOBJ.image.x + "Y" + attackOBJ.image.y)
       if(Ycard.image.x == wherecanTC[i*2] + attackOBJ.image.x && Ycard.image.y == wherecanTC[i*2+1] + attackOBJ.image.y && Ycard.death == 0){
         Ycard.death = 1
         Ycard.image.brightness = 100
         repeat(100, () => {
           Ycard.image.brightness -= 1
         })
         after(1, "seconds", () => {
           Ycard.image.hide()
         })
       }
     })
  })
  repeat(50, () => {
    attackOBJ.image.brightness -= 2
  })
  after(1, "seconds", () => {
    attackOBJ.hide()
  })
}
function attackTC(name) {
  var attackOBJ = {
    image: new Image({
      url: `./image/technique/${name.name}.png`,
      width: grid,
      height: grid,
    }),
  }
  attackOBJ.image.x = TCcX
  attackOBJ.image.y = TCcY
  attackOBJ.image.show()
  attackOBJ.image.sendToFront()
  touchX = TCcX
  touchY = TCcY
  // TCclones.push(TCclone)
  // ////console.log(name)
  // ////console.log(TCcX)
  // ////console.log(TCcY)
  goNumber = 1
  if(name.typeOfRange == "normal"){
    // ////console.log("場所決定")
    range(1,name.range+1).forEach(i => {
      gopoint(1*i,0,name.attribute)
      gopoint(-1*i,0,name.attribute)
      gopoint(0,1*i,name.attribute)
      gopoint(0,-1*i,name.attribute)
   })
   gopoint(1,1,name.attribute)
   gopoint(1,-1,name.attribute)
   gopoint(-1,1,name.attribute)
   gopoint(-1,-1,name.attribute)
  }
  touchOK = 0
  repeatUntil(() => touchOK == 1, () => {
  wheres.forEach(where => {
    // ////console.log("試す")
    if(where.image.mouseOver && mouseDown && touchstand == 1){
      touchOK = 1
      cards.forEach(card => {
        if(card.TorF == "keep"){
          card.TorF = 1
        }
      })
   if(abs(where.image.x - TCcX) > abs(where.image.y - TCcY)){
    TCcheckmate = abs(where.image.x - TCcX)
    }else{
    TCcheckmate = abs(where.image.y - TCcY)
   }
   keepmath = abs(where.image.x - TCcX)
   keepmath2 = abs(where.image.y - TCcY)
    Ycards.forEach(Ycard => {
      if(Ycard.image.x == attackOBJ.image.x + where.image.x - TCcX && Ycard.image.y == attackOBJ.image.y + where.image.y - TCcY){
        after(TCcheckmate*0.02, "seconds", () => {
         Ycard.image.hide()
         Ycard.death = 1
       })
      }
    })
   keepmath = keepmath/TCcheckmate
   keepmath2 = keepmath2/TCcheckmate
   wheres.forEach(where => {
     where.image.hide()
   })
   repeat(TCcheckmate, () => {
     if(where.image.x - TCcX > 0 ){
       attackOBJ.image.x += keepmath
     } else {
       attackOBJ.image.x -= keepmath
     }
     if(where.image.y - TCcY > 0 ){
       attackOBJ.image.y += keepmath2
     } else {
       attackOBJ.image.y -= keepmath2
     }
   })
   after(TCcheckmate*0.02, "seconds", () => {
     attackOBJ.image.hide()
     if(gameStatus2 == "DSduring"){
       didlist("終了")
       if(indid == 0){
        textsign = 0
  　　   DSmode = "終了"

       }
     }
   })
      }
    })
  })
  choiced = 1
}
function Ytechnique(TCname,TCx,TCy) {
  ////console.log(TCname)
  range(0, techniqueall.length).forEach(i => {
    ////console.log(techniqueall[i])
    if(techniqueall[i].name == TCname){
      if(techniqueall[i].type == "attack"){
        YattackTC(techniqueall[i],TCx,TCy)
      }
      if(techniqueall[i].type == "range"){
        YattackRG(techniqueall[i],TCx,TCy)
      }
    }
  })
}
function YattackRG(TCmain,TCx2,TCy2) {
  Ygotime += 1
  YTchoice = 0
  var attackobject = {
    image: new Image({
      url: `./image/technique/${TCmain.name}.png`,
      width: grid,
      height: grid,
    }),
    PMXData: 0,
    PMYData: 0,
    YCMData: 0,
    STXData: 0,
    STYData: 0,
    RPData: 0,
    RPData2: 0,
    death: "nothing"
  }
  attackobject.image.x = TCx2
  attackobject.image.y = TCy2
  attackobject.image.brightness = 100
  range(1,TCmain.range+1).forEach(i => {
   Twherecan.push(1*i*grid)
   Twherecan.push(0*grid)
   Twherecan.push(-1*i*grid)
   Twherecan.push(0*grid)
   Twherecan.push(0*grid)
   Twherecan.push(1*i*grid)
   Twherecan.push(0*grid)
   Twherecan.push(-1*i*grid)
  })
  cards.forEach(card => {
    range(0,Twherecan.length/2).forEach(i => {
      if(card.image.x == TCx2 + Twherecan[i*2] && card.image.y == TCx2 + Twherecan[i*2+1]){
        card.death = 1
        card.image.brightness = 100
        repeat(100, () => {
           card.image.brightness -= 1
        })
        after(1, "seconds", () => {
          card.image.hide()
        })
      }
    })
  })
  repeat(50, () => {
    attackobject.image.brightness -= 2
  })
}
function YattackTC(TCmain,TCx2,TCy2) {
  Ygotime += 1
  YTchoice = 0
  var attackobject = {
    image: new Image({
      url: `./image/technique/${TCmain.name}.png`,
      width: grid,
      height: grid,
    }),
    PMXData: 0,
    PMYData: 0,
    YCMData: 0,
    STXData: 0,
    STYData: 0,
    RPData: 0,
    RPData2: 0,
    death: "nothing"
  }
   range(1,TCmain.range+1).forEach(i => {
    Twherecan.push(1*i)
    Twherecan.push(0)
    Twherecan.push(-1*i)
    Twherecan.push(0)
    Twherecan.push(0)
    Twherecan.push(1*i)
    Twherecan.push(0)
    Twherecan.push(-1*i)
   })
  attackobject.image.x = TCx2
  attackobject.image.y = TCy2
  attackobject.STXData = attackobject.image.x
  attackobject.STYData = attackobject.image.y
  //console.log("STXData" + attackobject.STXData + "STYData" + attackobject.STYData)
  cards.forEach(card => {
    keepword = card.image.x
    keepword2 = card.image.y
   range(0,Twherecan.length/2).forEach(g => {
     // ////console.log(TCx + Twherecan[i*2]*grid)
     // ////console.log(TCy + Twherecan[i*2+1]*grid)
     // ////console.log(card.image.x)
     // ////console.log(card.image.y)7
     keepmath2 = Twherecan[g*2]
     keepmath3 = Twherecan[g*2+1]
     keepmath2 = attackobject.image.x + keepmath2*grid
     keepmath3 = attackobject.image.y + keepmath3*grid
     // //console.log("比較A" + keepmath2 + keepword + "比較B" + keepmath3 + keepword2)
     if(keepmath2 == keepword && keepmath3 == keepword2){
       ////console.log("OK")
       YTchoice = 1
       keepmath = g*2
     }
   })
  })
  // ////console.log(random(0,Twherecan.length +1))
  range(0,Twherecan.length/2).forEach(i => {
    if(attackobject.image.x + Twherecan[i*2]*grid > 15*grid || attackobject.image.x + Twherecan[i*2]*grid < -15*grid || attackobject.image.y + Twherecan[i*2+1]*grid > 10*grid || attackobject.image.y + Twherecan[i*2+1]*grid < -10*grid){
       Twherecan[i*2] = "DS"
       Twherecan[i*2+1] = "DS"
    }
  })
  Twherecan.remove("DS")
  if(YTchoice == 0){
    // //console.log("ランダム")
   keepmath = random(0,Twherecan.length +1)
  }
  ////console.log(keepmath)
  keepmath = floor(keepmath/2)
  ////console.log(keepmath)
  plusmoveX = Twherecan[keepmath*2]
  ////console.log(plusmoveX)
  plusmoveY = Twherecan[keepmath*2+1]
  ////console.log(plusmoveY)
  if(abs(plusmoveX*grid) > abs(plusmoveY*grid)){
   Ycheckmate = abs(plusmoveX*grid)
  }else{
   Ycheckmate = abs(plusmoveY*grid)
  }
  ////console.log(Ycheckmate)
  attackobject.YCMData = Ycheckmate
  attackobject.PMXData = plusmoveX*grid
  attackobject.PMYData = plusmoveY*grid
  attackobject.RPData = attackobject.PMXData/Ycheckmate
  attackobject.RPData2 = attackobject.PMYData/Ycheckmate
  // //console.log("進むX座標" + attackobject.PMXData + "進むY座標" + attackobject.PMYData)
  repeat(attackobject.YCMData, () => {
    //console.log("移動X")
     if(attackobject.PMXData > 0){
       attackobject.image.x += attackobject.RPData
     }else{
       attackobject.image.x -= attackobject.RPData
     }
  // })
  // repeat(abs(attackobject.PMYData), () => {
  //   //console.log("移動Y")
     if(attackobject.PMYData > 0){
       attackobject.image.y += attackobject.RPData2
     }else{
       attackobject.image.y -= attackobject.RPData2
     }
  })
  range(0,Twherecan.length).forEach(i => {
    Twherecan.remove(Twherecan[i])
  })
  after(attackobject.YCMData*0.025, "seconds", () => {
    cards.forEach(card => {
      //console.log("最初のX座標" + attackobject.STXData + "最初のY座標" + attackobject.STYData + "進むのX座標" + attackobject.PMXData + "進むのY座標" + attackobject.PMYData)
      if(card.image.x == attackobject.STXData + attackobject.PMXData && card.image.y == attackobject.STYData + attackobject.PMYData && card.death == 0){
        card.death = 1
        //console.log("当たり判定アリ")
        card.image.brightness = 100
        repeat(100, () => {
          card.image.brightness -= 1
        })
        after(2, "seconds", () => {
          card.image.hide()
          if(!(card.effect == "nothing")){
            ////console.log("敵の死んだ後の効果")
            deck.push(card.effect)
            card.effect = "nothing"
          }
          if(!(card.plusitem == "nothing")){
            ////console.log("敵の死んだ後の効果")
            itemindeck.push(card.plusitem)
            card.plusitem = "nothing"
          }
        })
      }
    })
    attackobject.image.hide()
    Ygotime -= 1
  })
}
//
function wheresputout(){
  wheres.forEach(where => {
    where.image.hide()
  })
}
function cardhit(name,name2){
if(name.image.mouseOver && mouseDown && duringtutorial == 0){
  if(downMouse == 0){
    deckcard = 0
    range(0,deck.length).forEach(i => {
      if(name == deck[i]){
        deckcard += 1
        deckname = i
        ////console.log(deck[i])
      }
    })
    if(!(deckcard == 0)){
     choicestand = name2
     choicestand2 = name
     downMouse = 1
     canarea.image.show()
     canarea.image.sendToFront()
     canarea.image.y = -8*grid
     if(gameStatus2 == "DSduring"){
      didlist("配置2")
      if(indid == 0){
       textsign = 0
 　　  DSmode = "配置2"
      }
     }
    }
 }
}
}
//アイテム
function itemhit(name,name2){
  // ////console.log("判定" + name)
if(name.image.mouseOver && mouseDown){
  if(downMouse == 0){
    itemin = 0
    range(0,itemindeck.length).forEach(i => {
      if(name == itemindeck[i]){
        itemin += 1
        itemname = i
        ////console.log(itemindeck[i])
      }
    })
    if(!(itemin == 0)){
     if(gameStatus2 == "DSduring"){
      if(turnnumber == 2){
        didlist("道具3")
        if(indid == 0){
         textsign = 0
    　　  DSmode = "道具3"
        }
      }
     }
     choiceitem = name2
     choiceitem2 = name
     downMouse = 1
    }
 }
}
}
function attributechange(name,name2,property,property2) {
  cards.forEach(card => {
    ////console.log("カードの位置は?")
    ////console.log(card.image.x/grid)
    ////console.log(card.image.y/grid)
    ////console.log(downX)
    ////console.log(downY)
    if(card.image.x/grid == downX && card.image.y/grid == downY){
      ////console.log("一致")
      ////console.log(property2)
      card.propertydata = property
      property2.image.x = card.image.x
      property2.image.y = card.image.y
      property2.image.brightness = 100
      property2.image.show()
      property2.image.sendToFront()
      after(2, "seconds", () => {
        repeat(100, () => {
          property2.image.brightness -= 1
        })
        // property2.image.hide()
      })
      itemindeck[itemname] = "Dl"
      itemindeck.remove("Dl")
      existitem()
    }
  })
}
function Yattributechange(changeproperty,changeproperty2) {
  keepmath = 0
   Ycards.forEach(Ycard => {
     if(Ycard.death == 0){
       keepmath += 1
     }
   })
   keepmath = random(0,keepmath-1)
   Ycards.forEach(Ycard => {
     if(Ycard.number == keepmath){
       Ycard.propertydata = changeproperty
       ////console.log(changeproperty2.name)
       var cloneeffect = {
         image: new Image({
           url: `./image/card/${changeproperty2.name}.png`,
           width: cardsize/5,
           height: cardsize/5,
         }),
         TorF: 0
       }
       ////console.log(cloneeffect)
       cloneeffects.push(cloneeffect)
       cloneeffects.forEach(cloneeffect => {
        if(cloneeffect.TorF == 0){
         cloneeffect.image.x = Ycard.image.x
         cloneeffect.image.y = Ycard.image.y
         cloneeffect.image.brightness = 100
         cloneeffect.image.show()
         cloneeffect.image.sendToFront()
         after(2, "seconds", () => {
           repeat(100, () => {
             cloneeffect.image.brightness -= 1
           })
         })
         after(4, "seconds", () => {
          cloneeffect.image.hide()
          cloneeffect.TorF = 1
         })
       }
      })
     }
   })
}
function useitem() {
  range(0,random(1,2)).forEach(i => {
    if(Yitemindeck.length > 0){
     keepword = Yitemindeck[random(0,Yitemindeck.length-1)]
     ////console.log(keepword)
     if(keepword.type == "attributechange"){
       Yattributechange(keepword.attribute,keepword.EFname)
     }
    }
  })
}
//方向確認
function directioncheck(pushX,pushY) {
  if(pushX == 0){
    if(pushY == 0){
       direction = "here"
    }else{
      if(pushY > 0){
        direction = "north"
      }else{
        direction = "south"
      }
    }
  }else{
    if(pushY == 0){
      if(pushX > 0){
        direction = "east"
      }else{
        direction = "west"
      }
    }else{
      if(pushX > 0){
        if(pushY > 0){
          direction = "northeast"
        }else{
          direction = "southeast"
        }
      }else{
        if(pushY > 0){
          direction = "northwest"
        }else{
          direction = "southwest"
        }
      }
    }
  }
}
function Ydirectioncheck(pushX,pushY) {
  if(pushX == 0){
    if(pushY == 0){
       Ydirection = "here"
    }else{
      if(pushY > 0){
        Ydirection = "north"
      }else{
        Ydirection = "south"
      }
    }
  }else{
    if(pushY == 0){
      if(pushX > 0){
        Ydirection = "east"
      }else{
        Ydirection = "west"
      }
    }else{
      if(pushX > 0){
        if(pushY > 0){
          Ydirection = "northeast"
        }else{
          Ydirection = "southeast"
        }
      }else{
        if(pushY > 0){
          Ydirection = "northwest"
        }else{
          Ydirection = "southwest"
        }
      }
    }
  }
}
//進む場所
function gopoint(choiceX,choiceY,whatproperty){
  wheres.forEach(where => {
   if(where.number == goNumber){
     if(touchY + grid*choiceY < grid*-10 || touchY + grid*choiceY > grid*10 || touchX + grid*choiceX < grid*-15 || touchX + grid*choiceX > grid*15){
       //////console.log("hide")
       where.image.hide()
     }else{
     can = 0
     ////console.log("X:" +choiceX)
     ////console.log("Y:" +choiceY)
     where.goX = choiceX
     where.goY = choiceY
     directioncheck(where.goX,where.goY)
     where.direction = direction
     ////console.log(where.direction)
     keepmath = touchY + grid*choiceY - 10*grid
     keepmath = keepmath*-1
     keepmath2 = touchX + grid*choiceX + 15*grid
     keepmath2 = touchX + grid*choiceX + 15*grid
     keepmath2 = floor(keepmath2/grid)
     //////console.log(keepmath)
     //////console.log(keepmath2)
     //////console.log(mapData[floor(keepmath/grid)][keepmath2])
     wheresame(mapData[floor(keepmath/grid)][floor(keepmath2)],whatproperty)
     if(can == 1){
      where.image.x = touchX + grid*choiceX
      where.image.y = touchY + grid*choiceY
      where.image.show()
      where.image.sendToFront()
      Ycards.forEach(Ycard => {
        if(Ycard.death == 0){
         if(where.image.x == Ycard.willX && where.image.y == Ycard.willY){
           outdirection.push(where.direction)
         }
        }
      })
      cards.forEach(card => {
        if(card.death == 0){
         if(where.image.x == card.willX && where.image.y == card.willY){
           outdirection.push(where.direction)
           where.image.hide()
         }
        }
      })
      // cards.forEach(card => {
      //  if(where.image.x == card.image.x && where.image.y == card.image.y){
      //    where.image.hide()
      //  }
      // })
      // if(where.image.y < grid*-10 || where.image.y > grid*10 || where.image.x < grid*-15 || where.image.x > grid*15){
      //   //////console.log("hide")
      //   where.image.hide()
      // }
     }
   }
  }
 })
 goNumber += 1
}
//
function checkcard(name){
  cardtype = name.gotype
  cardgo = name.goblock
}
function goORturn(){

}
//カードを出す
function cardfield(name,name2){
  //////console.log(name)
  ////console.log(deck[deckname])
  deck[deckname] = "Dl"
  deck.remove("Dl")
  var card = {
    image: new Image({
      url: `./image/card/${name}.png`,
      width: cardsize/5,
      height: cardsize/5,
    }),
    name: name + cardNumber,
    TorF: 1,
    type: name2,
    propertydata: name2.property,
    technique: name2.technique,
    keep: "nothing",
    keep2: "nothing",
    keep3: "nothing",
    keep4: "nothing",
    check: "nothing",
    effect: name2.effect,
    namefull: name2,
    death: 0,
    plusitem: name2.plusitem,
    range: name2.goblock,
    gotype: name2.gotype,
    willX: 0,
    willY: 0
  }
  card.image.x = grid*downX
  card.image.y = grid*downY
  card.willX = card.image.x
  card.willY = card.image.y
  //////console.log(card.name)
  cards.push(card)
  cardNumber += 1
  showcardlimit -= 1
}
function trueOrFalse() {
  Ycards.forEach(Ycard => {
    if(yourdownX + 15 == Ycard.willX && yourdownY + 15 == Ycard.willY){
      yourdownX = grid*random(-4,3)
      yourdownY = grid*random(6,9)
      trueOrFalse()
    }
  })
}
function yourcardfield(name,name2){
  //////console.log(name)
  //////console.log(name2)
  yourdeck[choicecardnumber] = "Dl"
  yourdeck.remove("Dl")
  var Ycard = {
    image: new Image({
      url: `./image/card/${name}.png`,
      width: cardsize/5,
      height: cardsize/5,
    }),
    name: name + cardNumber2,
    TorF: 1,
    type: name2,
    number: cardNumber2,
    go: name2.gotype,
    step: name2.goblock,
    propertydata: name2.property,
    keep: "nothing",
    keep2: "nothing",
    keep3: "nothing",
    keep4: "nothing",
    check: "nothing",
    effect: name2.effect,
    technique: name2.technique,
    death: 0,
    range: name2.goblock,
    namefull: name2,
    plusitem: name2.plusitem,
    willX: "nothing",
    willX: "nothing",
    role: "nothing",
  }
  clear = 0
   trueOrFalse()
   Ycard.image.x = yourdownX + 15
   Ycard.image.y = yourdownY + 15
   Ycard.willX = Ycard.image.x
   Ycard.willX = Ycard.image.y
   if(random(0,10) < 5){
     Ycard.role = "attack"
   }else{
     Ycard.role = "guard"
   }
   Ycard.image.angle = LEFT
   Ycards.push(Ycard)
  //////console.log(Ycard.name)
  cardNumber2 += 1
}
//地面を確認
function checksame(under,thiscard) {
   if(thiscard == "land" && under == 0){
      typeplus = 1
   }
   if(thiscard == "fire" && under == 1){
      typeplus = 1
   }
   if(thiscard == "sea" && under == 2){
      typeplus = 1
   }
   if(thiscard == "undead" && under == 5){
      typeplus = 1
   }
}
function wheresame(under,thiswhere) {
  if(under == 3 && !(thiswhere == "sky")){
    outdirection.push(direction)
  }else{
    can= 1
  }
  range(0,outdirection.length).forEach(i => {
    if(direction == outdirection[i]){
      can = 0
    }
  })
}
function Ychecksame(under,thiscard) {
   if(thiscard == "land" && under == 0){
      Ytypeplus = 1
   }
   if(thiscard == "fire" && under == 1){
      Ytypeplus = 1
   }
   if(thiscard == "sea" && under == 2){
      Ytypeplus = 1
   }
   if(thiscard == "undead" && under == 5){
      Ytypeplus = 1
   }
}
//デッキを組む
function cardinpage(name,cX) {
  name.image.show()
  name.image.sendToFront()
  name.image.brightness = 100
  name.image.x = cX
  name.image.y = -150
}
function kind() {
  range(0,cardsetting.length).forEach(i => {
    newkind = 0
    range(0,deck.length).forEach(j => {
      if(deck[j] == cardsetting[i]){
        newkind = 1
        ////console.log(deck[j])
        ////console.log(cardsetting[i])
      }
    })
    if(newkind == 1){
     cardkind.push(cardsetting[i])
     ////console.log(cardkind)
    }
  })
}
function itemkindwhat() {
  range(0,itemsetting.length).forEach(i => {
    newkind = 0
    range(0,itemindeck.length).forEach(j => {
      if(itemindeck[j] == itemsetting[i]){
        newkind = 1
        ////console.log(deck[j])
        ////console.log(cardsetting[i])
      }
    })
    if(newkind == 1){
     itemkind.push(itemsetting[i])
     ////console.log(cardkind)
    }
  })
}
//相手のカードが進む
function Ychoicego(nowX,nowY,nowproperty,itsrole) {
  ////console.log(Youtdirection)
  range(0,wherecan.length/2).forEach(i => {
    check = "no"
    Ydirectioncheck(wherecan[i*2],wherecan[i*2+1])
    range(0,Youtdirection.length).forEach(j => {
       if(Ydirection == Youtdirection[j]){
         Ydelatelist.push(i*2)
         check = "out"
       }
    })
    //console.log("X" + nowX + wherecan[i*2]*grid + "Y" + nowY + wherecan[i*2+1]*grid)
   if(!(check == "out")){
    if(nowX + wherecan[i*2]*grid < 15*grid && nowX + wherecan[i*2]*grid > -15*grid && nowY + wherecan[i*2+1]*grid < 10*grid && nowY + wherecan[i*2+1]*grid > -10*grid){
      keepmath = nowY + wherecan[i*2+1] - 10*grid
      keepmath = keepmath*-1
      keepmath = floor(keepmath/grid)
      keepmath2 = nowX + wherecan[i*2] + 15*grid
      keepmath2 = floor(keepmath2/grid)
      if(mapData[keepmath][keepmath2] == 3 && !(nowproperty == "sky")){
       Youtdirection.push(Ydirection)
       Ydelatelist.push(i*2)
      }
      Ycards.forEach(Ycard => {
        if(Ycard.death == 0){
         if(nowX + wherecan[i*2]*grid == Ycard.willX && nowY + wherecan[i*2+1]*grid == Ycard.willY){
           Youtdirection.push(Ydirection)
           Ydelatelist.push(i*2)
         }
        }
      })
      cards.forEach(card => {
        if(card.death == 0){
         if(nowX + wherecan[i*2]*grid == card.willX && nowY + wherecan[i*2+1]*grid == card.willY){
           Youtdirection.push(Ydirection)
           Ydelatelist.push(i*2)
         }
        }
      })
    }else{
      Youtdirection.push(Ydirection)
      Ydelatelist.push(i*2)
   }
  }
  })
  range(0,Ydelatelist.length).forEach(i => {
    // ////console.log("消す" + Ydelatelist[dcrease])
    wherecan[Ydelatelist[i]] = "Ds"
    dcrease -= 1
  })
  wherecan.remove("Ds")
  range(0,wherecansub.length).forEach(i => {
    wherecansub.remove(wherecansub[i])
  })
 range(0,SPreferred.length).forEach(i => {
   SPreferred.remove(SPreferred[i])
 })
 range(0,WYTData.length).forEach(i => {
   WYTData.remove(WYTData[i])
 })
   if(itsrole == "attack"){
    Mgocanpush()
    range(0,wherecan.length/2).forEach(i => {
     range(0,WYTData.length/2).forEach(j => {
       if(nowX + wherecan[i*2]*grid == WYTData[j*2] && nowY + wherecan[i*2+1]*grid == WYTData[j*2+1]){
          SPreferred.push(i*2)
       }
     })
    })
    console.log(SPreferred)
   }
   plusfast(nowX,nowY)
   if(fastwherecan.length == 0){
    littlefast()
    if(fastwherecan.length == 0){
      if(SPreferred.length == 0){
        goXYstart = random(0,wherecan.length-1)
        goXYstart = floor(goXYstart/2)
        goXYstart = goXYstart*2
        goX = wherecan[goXYstart]
        goY = wherecan[goXYstart+1]
      }else{
       if(itsrole == "attack"){
        if(wherecan.length > SPreferred.length){
         range(0,wherecan.length).forEach(i => {
           wherecansub.push(wherecan[i])
         })
         range(0,SPreferred.length/2).forEach(i => {
          wherecansub[SPreferred[i*2]] = "DS"
          wherecansub[SPreferred[i*2]+1] = "DS"
         })
         wherecansub.remove("DS")
         goXYstart = random(0,wherecansub.length-1)
         goXYstart = floor(goXYstart/2)
         goXYstart = goXYstart*2
         goX = wherecansub[goXYstart]
         goY = wherecanaub[goXYstart+1]
       }else{
         goXYstart = random(0,wherecan.length-1)
         goXYstart = floor(goXYstart/2)
         goXYstart = goXYstart*2
         goX = wherecan[goXYstart]
         goY = wherecan[goXYstart+1]
       }
      }else{
        goXYstart = random(0,wherecan.length-1)
        goXYstart = floor(goXYstart/2)
        goXYstart = goXYstart*2
        goX = wherecan[goXYstart]
        goY = wherecan[goXYstart+1]
      }
     }
   }else{
     goXYstart = random(0,fastwherecan.length-1)
     goXYstart = floor(goXYstart/2)
     goXYstart = goXYstart*2
     goX = fastwherecan[goXYstart]
     goY = fastwherecan[goXYstart+1]
   }
  }else{
    goXYstart = random(0,fastwherecan.length-1)
    goXYstart = floor(goXYstart/2)
    goXYstart = goXYstart*2
    goX = fastwherecan[goXYstart]
    goY = fastwherecan[goXYstart+1]
  }
}
function yourgo(goblocks,YcardgoX,YcardgoY){
     Ycards.forEach(Ycard => {
       if(Ycard.number == goblocks){
         if(!(Ycard.image.y + YcardgoY*grid > 10*grid) && !(Ycard.image.y + YcardgoY*grid < -10*grid) && !(Ycard.image.x + YcardgoX*grid > 15*grid) && !(Ycard.image.x + YcardgoX*grid < -15*grid)){
           if(Ycard.image.y + YcardgoY*grid < -9*grid && Ycard.image.x + YcardgoX*grid > -1*grid && Ycard.image.x + YcardgoX*grid < 1*grid){
            myHP -= 1
           }else{
            Ygotime += 1
            // ////console.log("予定位置X" + Ycard.image.x + YcardgoX*grid)
            // ////console.log("予定位置Y" +　Ycard.image.y + YcardgoY + grid)
            // ////console.log("進む" + Ygotime)
            // repeat(abs(YcardgoX*grid), () => {
            //   if (YcardgoX > 0 ){
            //     Ycard.image.x += 1
            //   } else {
            //     Ycard.image.x -= 1
            //   }
            // })
            if(abs(YcardgoX*grid) > abs(YcardgoY*grid)){
             Ycheckmate = abs(YcardgoX*grid)
            }else{
             Ycheckmate = abs(YcardgoY*grid)
            }
            Ycard.check = Ycheckmate
            // ////console.log("待ち時間" + Ycheckmate)
            Ycard.willX = Ycard.image.x + YcardgoX*grid
            Ycard.willY = Ycard.image.y + YcardgoY*grid
            Ycard.keep = abs(YcardgoX*grid/Ycheckmate)
            Ycard.keep2 = abs(YcardgoY*grid/Ycheckmate)
            Ycard.keep3 = YcardgoX*grid
            Ycard.keep4 = YcardgoY*grid
            // //console.log(YcardgoX*grid + " " + YcardgoY*grid)
            // //console.log(Ycard.check + " " + Ycard.keep + " " + Ycard.keep2)
            repeat(Ycard.check, () => {
              if (Ycard.keep3 > 0 ){
                Ycard.image.x += Ycard.keep
              } else {
                Ycard.image.x -= Ycard.keep
              }
              if(Ycard.keep4 > 0 ){
                Ycard.image.y += Ycard.keep2
              } else {
                Ycard.image.y -= Ycard.keep2
              }
            })
            // repeat(abs(YcardgoY*grid), () => {
            //   if (YcardgoY > 0 ){
            //     Ycard.image.y += 1
            //   } else {
            //     if(Ycard.image.y > -9.5*grid){
            //       Ycard.image.y -= 1
            //     }
            //   }
            // })
           }
            //(カードの位置把握)
         // cards.forEach(card => {
           after(Ycard.check*0.02, "seconds", () => {
             Ygotime -= 1
             // ////console.log("Ygotime" + Ygotime)
             // ////console.log(Ycard.image.y)
            range(0,yourcardX.length).forEach(i => {
              yourcardX.remove(yourcardX[0])
              yourcardY.remove(yourcardY[0])
            })
            Ycards.forEach(Ycard => {
             if(Ycard.death == 0){
              yourcardX.push(Ycard.image.x)
              yourcardY.push(Ycard.image.y)
             }
            })
            cards.forEach(card =>{
              range(0,yourcardX.length).forEach(i =>{
                if(card.image.x == yourcardX[i] && card.image.y == yourcardY[i]){
                  card.image.sendToFront()
                  repeat(100, () => {
                    card.image.brightness -= 1
                  })
                  after(1, "seconds", () => {
                    card.image.hide()
                  })
                  card.death = 1
                  ////console.log("死")
                  if(!(card.effect == "nothing")){
                    ////console.log("死んだ後の効果")
                    cardkindin = 0
                    range(0,cardkind.length).forEach(i => {
                      if(cardkind[i] == card.effect){
                        cardkindin = 1
                        ////console.log("その種類はない")
                      }
                    })
                    if(!(cardkindin == 1)){
                      ////console.log("種類追加")
                      cardkind.push(card.effect)
                    }
                    deck.push(card.effect)
                    card.effect = "nothing"
                    existcard()
                  }
                  if(!(card.plusitem == "nothing")){
                    ////console.log("死んだ後の効果")
                    cardkindin = 0
                    Gin = card.plusitem.name
                    itemget1.text.show()
                    itemget1.text.sendToFront()
                    repeat(100, () => {
                      itemget1.text.brightness -= 1
                    })
                    after(3, "seconds", () => {
                      itemget1.text.hide()
                    })
                    range(0,itemkind.length).forEach(i => {
                      ////console.log(itemkind[i])
                      ////console.log(card.plusitem)
                      if(itemkind[i] == card.plusitem){
                        cardkindin = 1
                        ////console.log("その種類ある")
                      }
                    })
                    if(!(cardkindin == 1)){
                      ////console.log("種類追加")
                      itemkind.push(card.plusitem)
                    }
                    itemindeck.push(card.plusitem)
                    card.plusitem = "nothing"
                    existitem()
                  }
                }
              })
            })
          })
        // })
         }
       }
     })
}
//配置（バトル中）
function standcard(name){
  name.image.show()
  name.image.sendToFront()
  name.image.x = -445 - cardsize/2
  name.image.y = upcard
  if(name.image.y > grid*6 || name.image.y <grid*-6){
    name.image.hide()
  }
}
function standitem(name){
  name.image.show()
  name.image.sendToFront()
  name.image.x = -445 - cardsize/2
  name.image.y = itemupcard
  if(name.image.y > grid*6 || name.image.y <grid*-6){
    name.image.hide()
  }
}
function notstandcard(name){
  name.image.hide()
  name.image.sendToBack()
}
function notstanditem(name){
  name.image.hide()
  name.image.sendToBack()
}
function cardout(name){
  if(name.image.x > 500 || name.image.x < -500){
    name.image.hide()
  }
  if(name.image.x < 500 && name.image.x > -500){
    name.image.show()
  }
}
function left(name){
  name.image.x -= 10
}
function right(name){
  name.image.x += 10
}
function indeck(name) {
  deckcard = 0
  range(0,deck.length).forEach(i => {
    if(deck[i] == name){
      deckcard += 1
    }
  })
}
function existcard() {
  range(0,cardsetting.length).forEach(j => {
   deckcard = 0
   ////console.log(deck)
   range(0,deck.length).forEach(i => {
     if(cardsetting[j] == deck[i]){
       deckcard += 1
       ////console.log(deck[i])
     }
   })
   if(!(deckcard == 0)){
     ////console.log("そのまま")
    cardsetting[j].image.brightness = 100
  }else{
    ////console.log("変化")
    cardsetting[j].image.brightness = 50
  }
 })
}
function existitem() {
  range(0,itemsetting.length).forEach(j => {
   deckcard = 0
   ////console.log(deck)
   range(0,itemindeck.length).forEach(i => {
     if(itemsetting[j] == itemindeck[i]){
       deckcard += 1
       ////console.log(itemindeck[i])
     }
   })
   if(!(deckcard == 0)){
     ////console.log("そのまま")
    itemsetting[j].image.brightness = 100
  }else{
    ////console.log("変化")
    itemsetting[j].image.brightness = 50
  }
 })
}
function YDcraft() {
  Ydeckout = 0
  ////console.log(yourdeck)
  range(0,yourdeck.length).forEach(i => {
    yourdeck.remove(yourdeck[0])
  })
  repeatUntil(() => Ydeckout == 1,() => {
    if(random(0,5) < 5){
     keepword = cardsetting[random(0,cardsetting.length-1)]
     if(Yallcost + keepword.cost < limitcost+1){
      yourdeck.push(keepword)
      Yallcost += keepword.cost
     }else{
      Ydeckout = 1
     }
    }else{
     keepword = itemsetting[random(0,itemsetting.length-1)]
     if(Yallcost + keepword.cost < limitcost+1){
      Yitemindeck.push(keepword)
      Yallcost += keepword.cost
     }else{
      Ydeckout = 1
     }
    }
  })
  ////console.log(yourdeck)
}
function nextpage() {
  keepword = loads[random(0,loads.length - 1)]
  keepword.image.show()
  keepword.image.sendToFront()
  loadicon.image.show()
  loadicon.image.sendToFront()
  loadtext.text.show()
  loadtext.text.sendToFront()
  nextstop = 1
  after(2, "seconds", () => {
    nextstop = 0
    loads.forEach(load => {
      load.image.hide()
    })
    loadtext.text.hide()
    loadicon.image.hide()
  })
}
forever(() => {
  if(nextstop == 1){
   loadicon.image.turnRight(10)
 }
})
function cardup(name,name2){
  if(name.image.mouseOver && mouseDown && pushstopper == 0 && allcost + name.cost < limitcost+1){
    allcost += name.cost
    ////console.log(allcost)
    var D2clone = {
      image: new Image({
        url: `./image/card/${name2}.png`,
        width: cardsize,
        height: cardsize,
      }),
      name: name,
      number: craftnumber,
      none: 0,
      cost: name.cost
    }
    craftnumber += 1
    D2clone.image.show()
    D2clone.image.sendToFront()
    D2clone.image.x = clonenumber*200
    D2clone.image.x += OTOpointx
    D2clone.image.y = 150
    D2clones.push(D2clone)
    if(D2clone.image.x > 500 || D2clone.image.x < -500){
      D2clone.image.hide()
    }
    if(name.what == "card"){
     clones.push(name)
   }else{
     itemindeck2.push(name)
   }
    clonenumber += 1
    pushstopper = 1
    after(0.2, "seconds", () => {
      pushstopper = 0
    })
 }
}
//ページを替える時に非表示にする
function pagechange(){
  black.image.hide()
  Orblack.text.hide()
  Yesblack.text.hide()
  Noblack.text.hide()
  goDS.image.hide()
  Sback.image.hide()
  statustext.text.hide()
  statusback.image.hide()
  resset.hide()
  costtext.text.hide()
  back.hide()
  settab.hide()
  battletab.hide()
  optiontab.hide()
  optiontext.hide()
  settext.hide()
  homeback2.hide()
  battlestart.hide()
  initial.hide()
  special.hide()
  kingname5.hide()
  kingname4.hide()
  kingname3.hide()
  kingname2.hide()
  kingname1.hide()
  costimage.hide()
  kingicon.hide()
  homeback.hide()
  clearArea.hide()
  battle.hide()
  airWizard.hide()
  waterWizard.hide()
  fireWizard.hide()
  undeadKing.hide()
  earthSwordsman.hide()
  undeadKingimage.hide()
  earthSwordsmanimage.hide()
  fireWizardimage.hide()
  waterWizardimage.hide()
  airWizardimage.hide()
  redTab.hide()
  orangeTab.hide()
  back.hide()
  rd.hide()
  backTab.hide()
  backTabBack.hide()
  setMap.hide()
  dog.image.hide()
  kabuto.image.hide()
  penguin.image.hide()
  sai.image.hide()
  myhp.hide()
  yourhp.hide()
  SBback.hide()
  TSplus.hide()
  TSminus.hide()
  limittext.text.hide()
  costshows.forEach(costshow　=> {
    costshow.text.hide()
  })
}
//音楽
function newmusic() {
  if(!(musicwhat == 0)){
   musicwhat.music.stopPlaying()
 }
}
//相手を倒したか?
function checkfinish() {
    if(yourHP < 0.1){
      winbord.image.show()
      winbord.image.sendToFront()
      winbord.image.brightness = 100
      repeat(100, () => {
        winbord.image.brightness -= 1
      })
      after(3, "seconds", () => {
       reset()
       battling = 0
       cards.forEach(card => {
         card.image.hide()
         // card.land.hide()
         // card.sea.hide()
       })
       Ycards.forEach(Ycard => {
         Ycard.image.hide()
       })
       after(0.5, "seconds", () => {
         pagechange()
         gameStatus = "home"
         backNumber = 0
      })
     })
    }
    if(myHP < 0.1){
      rosebard.image.show()
      rosebard.image.sendToFront()
      rosebard.image.brightness = 100
      repeat(100, () => {
        rosebard.image.brightness -= 1
      })
      after(3, "seconds", () => {
       reset()
       battling = 0
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
    })
    }
}
//ターンが変わった
var yourbard = {
  image: new Image({
    url: "./image/yourturn.png",
    width: 40*grid,
    height: 20*grid,
  }),
}
yourbard.image.hide()
function Yturnshow() {
  hidespeed = 1+hidespeed2/10
  mathcheck = floor(1/hidespeed*10)
  ////console.log(mathcheck)
  mathcheck2 = floor(100/hidespeed)
  ////console.log(mathcheck2)
  yourbard.image.brightness = 100
  yourbard.image.show()
  yourbard.image.sendToFront()
  after(mathcheck/10, "seconds", () => {
    repeat(mathcheck2, () => {
      yourbard.image.brightness -= hidespeed
    })
    after(mathcheck2*0.05, "seconds", () => {
      yourbard.image.hide()
    })
  })
}
var mybard = {
  image: new Image({
    url: "./image/myturn.png",
    width: 40*grid,
    height: 20*grid,
  }),
}
mybard.image.hide()
function turnshow() {
  hidespeed = 1 + hidespeed2/10
  ////console.log(hidespeed)
  mathcheck = floor(1/hidespeed*10)
  ////console.log(mathcheck)
  mathcheck2 = floor(100/hidespeed)
  ////console.log(mathcheck2)
  mybard.image.brightness = 100
  mybard.image.show()
  mybard.image.sendToFront()
  after(mathcheck/10, "seconds", () => {
    repeat(mathcheck2, () => {
      mybard.image.brightness -= hidespeed
    })
  })
}
//終了判定
function samefunction() {
  after(1, "seconds", () => {
    if(Ygotime == 0 || Ygotime < 0){
      nextturn = 1
      turn = "my"
      Ygotime = 0
    }else{
      samefunction()
    }
  })
}
//王を選ぶ(未実装)
function kingchoice(){
  undeadKing.hide()
  earthSwordsman.hide()
  fireWizard.hide()
  waterWizard.hide()
  airWizard.hide()
  undeadKingimage.hide()
  earthSwordsmanimage.hide()
  fireWizardimage.hide()
  waterWizardimage.hide()
  airWizardimage.hide()
  kingname1.hide()
  kingname2.hide()
  kingname3.hide()
  kingname4.hide()
  kingname5.hide()
  initial.hide()
  special.hide()
  card1.hide()
  card2.hide()
  card2plus.hide()
  card3.hide()
  card4.hide()
  card4plus.hide()
  card5.hide()
  card6.hide()
  card7.hide()
  card8.hide()
  card9.hide()
  ability1.hide()
}
//一時保存場
// pullcard = name.image.x / 200
// name.image.y = -150
// name.image.x = totalcard2*200 + rightstand*10 - leftstand*10
// totalcard -= 1
// totalcard2 += 1
//  //////console.log(putcard)
// range(pullcard, cardsetting.length + pullcard).forEach(i => {
//   cardsetting[i] = cardsetting[i+1]
//   ////////console.log(cardsetting[i])
//})

// putcard = name.image.x - IFOpointx
// putcard = putcard/200
// name.image.y = 150
// name.image.x = totalcard*200 + rightstand*10 - leftstand*10 +200
// cardsetting[totalcard] = name.name
////////console.log(cardsetting[totalcard])
// totalcard += 1
// totalcard2 -= 1
