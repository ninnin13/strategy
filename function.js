function randomDU(number) {
  console.log(yourdeck.length)
  if(yourdeck.length > 0){
  if(0 == random(0,number)){
    range(0, random(0,2)).forEach(i => {
     if(yourdeck.length > 0){
      yourdownX = grid*random(-4,3)
      yourdownY = grid*random(6,9)
      choicecardnumber = random(0,yourdeck.length-1)
      //console.log(choicecardnumber)
      //console.log(cardsetting[choicecardnumber])
      yourcardfield(yourdeck[choicecardnumber].name,yourdeck[choicecardnumber])
     }
    })
  }else{
   range(0, random(1,2)).forEach(i => {
    if(yourdeck.length > 0){
    yourdownX = grid*random(-4,3)
    yourdownY = grid*random(6,9)
    choicecardnumber = random(0,yourdeck.length-1)
    //console.log(choicecardnumber)
    //console.log(cardsetting[choicecardnumber])
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
  range(0,deck2.length).forEach(i => {
    deck.push(deck2[i])
  })
}
//技を発動させる
function techniquestart() {
  if(TS == 1){
   cards.forEach(card => {
     if(card.image.mouseOver && mouseDown && !(card.technique == "nothing")){

       //console.log(card.technique)
       techniquetext = card.technique
       //console.log(techniquetext)
       TCcX = card.image.x
       TCcY = card.image.y
       TBb.show()
       TBb.sendToFront()
       TBb.x = card.image.x + grid*3
       TBb.y = card.image.y
       TBt.text.show()
       TBt.text.sendToFront()
       TBt.text.x = card.image.x + grid*1.5
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
  console.log(TCnumber)
  console.log(techniqueall)
  if(techniqueall[TCnumber].type == "attack"){
    attackTC(techniqueall[TCnumber])
    touchstand = 0
    after(1, "seconds", () => {
     touchstand = 1
   })
  }
}
function attackTC(name) {
  name.image.x = TCcX
  name.image.y = TCcY
  name.image.show()
  name.image.sendToFront()
  touchX = TCcX
  touchY = TCcY
  // TCclones.push(TCclone)
  console.log(name)
  console.log(TCcX)
  console.log(TCcY)
  goNumber = 1
  if(name.typeOfRange == "normal"){
    console.log("場所決定")
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
    console.log("試す")
    if(where.image.mouseOver && mouseDown && touchstand == 1){
      touchOK = 1
   if(abs(where.image.x - TCcX) > abs(where.image.y - TCcY)){
    TCcheckmate = abs(where.image.x - TCcX)
    }else{
    TCcheckmate = abs(where.image.y - TCcY)
   }
   keepmath = abs(where.image.x - TCcX)
   keepmath2 = abs(where.image.y - TCcY)
    Ycards.forEach(Ycard => {
      if(Ycard.image.x == name.image.x + where.image.x - TCcX && Ycard.image.y == name.image.y + where.image.y - TCcY){
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
       name.image.x += keepmath
     } else {
       name.image.x -= keepmath
     }
     if(where.image.y - TCcY > 0 ){
       name.image.y += keepmath2
     } else {
       name.image.y -= keepmath2
     }
   })
   after(TCcheckmate*0.02, "seconds", () => {
     name.image.hide()
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
  console.log(TCname)
  range(0, techniqueall.length).forEach(i => {
    console.log(techniqueall[i])
    if(techniqueall[i].name == TCname){
      if(techniqueall[i].type == "attack"){
        YattackTC(techniqueall[i],TCx,TCy)
      }
    }
  })
}
function YattackTC(TCmain,TCx,TCy) {
  Ygotime += 1
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
  attackobject.image.x = TCx
  attackobject.image.y = TCy
  attackobject.STXData = TCx
  attackobject.STYData = TCy
  console.log(random(0,Twherecan.length +1))
  keepmath = random(0,Twherecan.length +1)
  console.log(keepmath)
  keepmath = floor(keepmath/2)
  console.log(keepmath)
  plusmoveX = Twherecan[keepmath*2]
  console.log(plusmoveX)
  plusmoveY = Twherecan[keepmath*2+1]
  console.log(plusmoveY)
  if(abs(plusmoveX*grid) > abs(plusmoveY*grid)){
   Ycheckmate = abs(plusmoveX*grid)
  }else{
   Ycheckmate = abs(plusmoveY*grid)
  }
  console.log(Ycheckmate)
  attackobject.PMXData = plusmoveX
  attackobject.PMYData = plusmoveY
  attackobject.YCMData = Ycheckmate
  console.log(attackobject.YCMData)
  repeat(attackobject.YCMData, () => {
    if(attackobject.PMXData > 0){
      attackobject.image.x += 1
    }else{
      attackobject.image.x -= 1
    }
    if(attackobject.PMYData > 0){
      attackobject.image.y += 1
    }else{
      attackobject.image.y -= 1
    }
  })
  range(0,Twherecan.length).forEach(i => {
    Twherecan.remove(Twherecan[i])
  })
  after(attackobject.YCMData*0.02, "seconds", () => {
    cards.forEach(card => {
      if(card.image.x == attackobject.STXData + attackobject.PMXData && card.image.y == attackobject.STYData + attackobject.PMYData){
        card.image.brightness = 100
        repeat(100, () => {
          card.image.brightness -= 1
        })
        after(2, "seconds", () => {
          card.image.hide()
          if(!(Ycard.effect == "nothing")){
            console.log("敵の死んだ後の効果")
            yourdeck.push(Ycard.effect)
            card.effect = "nothing"
         }
        })
        card.death = 1
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
if(name.image.mouseOver && mouseDown){
  if(downMouse == 0){
    deckcard = 0
    range(0,deck.length).forEach(i => {
      if(name == deck[i]){
        deckcard += 1
        deckname = i
        console.log(deck[i])
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
  // console.log("判定" + name)
if(name.image.mouseOver && mouseDown){
  if(downMouse == 0){
    itemin = 0
    range(0,itemindeck.length).forEach(i => {
      if(name == itemindeck[i]){
        itemin += 1
        itemname = i
        console.log(itemindeck[i])
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
    console.log("カードの位置は?")
    console.log(card.image.x/grid)
    console.log(card.image.y/grid)
    console.log(downX)
    console.log(downY)
    if(card.image.x/grid == downX && card.image.y/grid == downY){
      console.log("一致")
      console.log(property2)
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
       console.log(changeproperty2.name)
       var cloneeffect = {
         image: new Image({
           url: `./image/card/${changeproperty2.name}.png`,
           width: cardsize/5,
           height: cardsize/5,
         }),
         TorF: 0
       }
       console.log(cloneeffect)
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
     console.log(keepword)
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
       //console.log("hide")
       where.image.hide()
     }else{
     can = 0
     console.log("X:" +choiceX)
     console.log("Y:" +choiceY)
     where.goX = choiceX
     where.goY = choiceY
     directioncheck(where.goX,where.goY)
     where.direction = direction
     console.log(where.direction)
     keepmath = touchY + grid*choiceY - 10*grid
     keepmath = keepmath*-1
     keepmath2 = touchX + grid*choiceX + 15*grid
     keepmath2 = touchX + grid*choiceX + 15*grid
     keepmath2 = floor(keepmath2/grid)
     //console.log(keepmath)
     //console.log(keepmath2)
     //console.log(mapData[floor(keepmath/grid)][keepmath2])
     wheresame(mapData[floor(keepmath/grid)][floor(keepmath2)],whatproperty)
     if(can == 1){
      where.image.x = touchX + grid*choiceX
      where.image.y = touchY + grid*choiceY
      where.image.show()
      where.image.sendToFront()
      // if(where.image.y < grid*-10 || where.image.y > grid*10 || where.image.x < grid*-15 || where.image.x > grid*15){
      //   //console.log("hide")
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
  //console.log(name)
  console.log(deck[deckname])
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
    plusitem: name2.plusitem
  }
  card.image.x = grid*downX
  card.image.y = grid*downY
  // card.soil.x = grid*downX
  // card.soil.y = grid*downY
  // card.sea.x = grid*downX
  // card.sea.y = grid*downY
  // card.soil.hide()
  // card.sea.hide()
  //console.log(card.name)
  cards.push(card)
  cardNumber += 1
  showcardlimit -= 1
}
function yourcardfield(name,name2){
  //console.log(name)
  //console.log(name2)
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
    plusitem: name2.plusitem
  }
  clear = 0
   Ycard.image.x = yourdownX + 15
   Ycard.image.y = yourdownY + 15
   Ycard.image.angle = LEFT
   Ycards.push(Ycard)
  //console.log(Ycard.name)
  cardNumber2 += 1
}
//地面を確認
function checksame(under,thiscard) {
   if(thiscard == "soil" && under == 0){
      typeplus = 1
   }
   if(thiscard == "fire" && under == 1){
      typeplus = 1
   }
   if(thiscard == "water" && under == 2){
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
   if(thiscard == "soil" && under == 0){
      Ytypeplus = 1
   }
   if(thiscard == "fire" && under == 1){
      Ytypeplus = 1
   }
   if(thiscard == "water" && under == 2){
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
        console.log(deck[j])
        console.log(cardsetting[i])
      }
    })
    if(newkind == 1){
     cardkind.push(cardsetting[i])
     console.log(cardkind)
    }
  })
}
function itemkindwhat() {
  range(0,itemsetting.length).forEach(i => {
    newkind = 0
    range(0,itemindeck.length).forEach(j => {
      if(itemindeck[j] == itemsetting[i]){
        newkind = 1
        console.log(deck[j])
        console.log(cardsetting[i])
      }
    })
    if(newkind == 1){
     itemkind.push(itemsetting[i])
     console.log(cardkind)
    }
  })
}
//相手のカードが進む
function Ychoicego(nowX,nowY,nowproperty) {
  console.log(Youtdirection)
  range(0,wherecan.length/2).forEach(i => {
    check = "no"
    Ydirectioncheck(wherecan[i*2],wherecan[i*2+1])
    range(0,Youtdirection.length).forEach(j => {
       if(Ydirection == Youtdirection[j]){
         console.log("アウトー")
         Ydelatelist.push(i*2)
         check = "out"
       }
    })
   if(!(check == "out")){
     console.log("outではなかった")
    if(nowX + wherecan[i*2] < 15*grid && nowX + wherecan[i*2] > -15*grid && nowY + wherecan[i*2+1] < 10*grid && nowY + wherecan[i*2+1] > -10*grid){
      keepmath = nowY + wherecan[i*2+1] - 10*grid
      keepmath = keepmath*-1
      keepmath = floor(keepmath/grid)
      keepmath2 = nowX + wherecan[i*2] + 15*grid
      keepmath2 = floor(keepmath2/grid)
      console.log("計算結果" + mapData[keepmath][keepmath2])
      if(mapData[keepmath][keepmath2] == 3 && !(nowproperty == "sky")){
       Youtdirection.push(Ydirection)
       Ydelatelist.push(i*2)
      }
    }else{
      Youtdirection.push(Ydirection)
      Ydelatelist.push(i*2)
   }
  }
  })
  range(0,Ydelatelist.length).forEach(i => {
    // console.log("消す" + Ydelatelist[dcrease])
    wherecan[Ydelatelist[i]] = "Ds"
    dcrease -= 1
  })
  wherecan.remove("Ds")
  plusfast(nowX,nowY)
  console.log("進行方向決定" + wherecan)
  if(fastwherecan.length == 0){
   littlefast()
   if(fastwherecan.length == 0){
    goXYstart = random(0,wherecan.length-1)
    goXYstart = floor(goXYstart/2)
    goXYstart = goXYstart*2
    goX = wherecan[goXYstart]
    goY = wherecan[goXYstart+1]
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
            console.log("予定位置X" + Ycard.image.x + YcardgoX*grid)
            console.log("予定位置Y" +　Ycard.image.y + YcardgoY + grid)
            console.log("進む" + Ygotime)
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
            console.log("待ち時間" + Ycheckmate)
            Ycard.keep = abs(YcardgoX*grid)/Ycheckmate
            Ycard.keep2 = abs(YcardgoY*grid)/Ycheckmate
            Ycard.keep3 = YcardgoX*grid
            Ycard.keep4 = YcardgoY*grid
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
             console.log("Ygotime" + Ygotime)
             console.log(Ycard.image.y)
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
                    // card.soil.hide()
                    // card.sea.hide()
                  })
                  card.death = 1
                  console.log("死")
                  if(!(card.effect == "nothing")){
                    console.log("死んだ後の効果")
                    cardkindin = 0
                    range(0,cardkind.length).forEach(i => {
                      if(cardkind[i] == card.effect){
                        cardkindin = 1
                        console.log("その種類はない")
                      }
                    })
                    if(!(cardkindin == 1)){
                      console.log("種類追加")
                      cardkind.push(card.effect)
                    }
                    deck.push(card.effect)
                    card.effect = "nothing"
                    existcard()
                  }
                  if(!(card.plusitem == "nothing")){
                    console.log("死んだ後の効果")
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
                      console.log(itemkind[i])
                      console.log(card.plusitem)
                      if(itemkind[i] == card.plusitem){
                        cardkindin = 1
                        console.log("その種類ある")
                      }
                    })
                    if(!(cardkindin == 1)){
                      console.log("種類追加")
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
  if(name.image.y > grid*8 || name.image.y <grid*-8){
    name.image.hide()
  }
}
function standitem(name){
  name.image.show()
  name.image.sendToFront()
  name.image.x = -445 - cardsize/2
  name.image.y = itemupcard
  if(name.image.y > grid*8 || name.image.y <grid*-8){
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
   console.log(deck)
   range(0,deck.length).forEach(i => {
     if(cardsetting[j] == deck[i]){
       deckcard += 1
       console.log(deck[i])
     }
   })
   if(!(deckcard == 0)){
     console.log("そのまま")
    cardsetting[j].image.brightness = 100
  }else{
    console.log("変化")
    cardsetting[j].image.brightness = 50
  }
 })
}
function existitem() {
  range(0,itemsetting.length).forEach(j => {
   deckcard = 0
   console.log(deck)
   range(0,itemindeck.length).forEach(i => {
     if(itemsetting[j] == itemindeck[i]){
       deckcard += 1
       console.log(itemindeck[i])
     }
   })
   if(!(deckcard == 0)){
     console.log("そのまま")
    itemsetting[j].image.brightness = 100
  }else{
    console.log("変化")
    itemsetting[j].image.brightness = 50
  }
 })
}
function YDcraft() {
  Ydeckout = 0
  console.log(yourdeck)
  range(0,yourdeck.length).forEach(i => {
    yourdeck.remove(yourdeck[0])
  })
  repeatUntil(() => Ydeckout == 1,() => {
    if(random(0,3) < 3){
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
  console.log(yourdeck)
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
    console.log(allcost)
    var clone = {
      image: new Image({
        url: `./image/card/${name2}.png`,
        width: cardsize,
        height: cardsize,
      }),
      name: name
    }
    clone.image.show()
    clone.image.sendToFront()
    clone.image.x = clonenumber*200
    clone.image.x += OTOpointx
    clone.image.y = 150
    clones.push(clone)
    if(clone.image.x > 500 || clone.image.x < -500){
      clone.image.hide()
    }
    if(name.what == "card"){
     deck2.push(name)
   }else{
     itemindeck.push(name)
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
   battelemusic = 0
   homemusic = 0
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
         // card.soil.hide()
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
         // card.soil.hide()
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
  console.log(mathcheck)
  mathcheck2 = floor(100/hidespeed)
  console.log(mathcheck2)
  yourbard.image.brightness = 100
  yourbard.image.show()
  yourbard.image.sendToFront()
  after(mathcheck/10, "seconds", () => {
    repeat(mathcheck2, () => {
      yourbard.image.brightness -= hidespeed
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
  console.log(hidespeed)
  mathcheck = floor(1/hidespeed*10)
  console.log(mathcheck)
  mathcheck2 = floor(100/hidespeed)
  console.log(mathcheck2)
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
//  //console.log(putcard)
// range(pullcard, cardsetting.length + pullcard).forEach(i => {
//   cardsetting[i] = cardsetting[i+1]
//   ////console.log(cardsetting[i])
//})

// putcard = name.image.x - IFOpointx
// putcard = putcard/200
// name.image.y = 150
// name.image.x = totalcard*200 + rightstand*10 - leftstand*10 +200
// cardsetting[totalcard] = name.name
////console.log(cardsetting[totalcard])
// totalcard += 1
// totalcard2 -= 1
