var gobackTab = new Image({
  url: "./image/tab/purple.png",
  width: 135,
  height: 50,
})
gobackTab.x = 17.5*grid
gobackTab.y = 8*grid
gobackTab.hide()
var black = {
  image: new Image({
    url: "./image/tab/gold.png",
    width: 26*grid,
    height: 18*grid,
  }),
}
black.image.hide()
var Orblack = {
  text: new Text({
    text: () => "本当に降参しますか",
    size: 40,
    color: "rgb(220, 100, 100)",
    fontFamily: "arial",
  }),
}
Orblack.text.x = 0
Orblack.text.y = 5*grid
Orblack.text.hide()
var Yesblack = {
  text: new Text({
    text: () => "はい",
    size: 40,
    color: "rgb(220, 100, 100)",
    fontFamily: "arial",
  }),
}
Yesblack.text.x = -5*grid
Yesblack.text.y = -5*grid
Yesblack.text.hide()
var Noblack = {
  text: new Text({
    text: () => "いいえ",
    size: 40,
    color: "rgb(220, 100, 100)",
    fontFamily: "arial",
  }),
}
Noblack.text.x = 5*grid
Noblack.text.y = -5*grid
Noblack.text.hide()
var gobackText = new Text({
  text: () => "戻る",
  size: 40,
  color: "rgb(100, 200, 100)",
  fontFamily: "arial",
})
gobackText.x = gobackTab.x
gobackText.y = gobackTab.y
gobackText.hide()
var myturnok = new Text({
  text: () => "私のターン",
  size: 80,
  color: "rgb(100, 100, 200)",
  fontFamily: "arial",
})
var step1 = new Text({
  text: () => "完了",
  size: 30,
  color: "rgb(100, 100, 200)",
  fontFamily: "arial",
})
var step7 = new Text({
  text: () => "降参",
  size: 30,
  color: "rgb(100, 200, 100)",
  fontFamily: "arial",
})
var step2 = new Text({
  text: () => "技",
  size: 30,
  color: "rgb(100, 100, 200)",
  fontFamily: "arial",
})
var step3 = new Text({
  text: () => "道具",
  size: 30,
  color: "rgb(100, 100, 200)",
  fontFamily: "arial",
})
var step4 = new Text({
  text: () => "移動",
  size: 30,
  color: "rgb(100, 100, 200)",
  fontFamily: "arial",
})
var step5 = new Text({
  text: () => "配置",
  size: 30,
  color: "rgb(100, 100, 200)",
  fontFamily: "arial",
})
var step6 = new Text({
  text: () => "見る",
  size: 30,
  color: "rgb(100, 100, 200)",
  fontFamily: "arial",
})
var bctab = new Image({
  url: "./image/tab/red.png",
  width: 80,
  height: 280,
})
myturnok.hide()
bctab.x = 500
bctab.y = -110
bctab.hide()
step1.x = 500
step1.y = -220
step1.hide()
step2.x = 500
step2.y = -190
step2.hide()
step3.x = 500
step3.y = -160
step3.hide()
step4.x = 500
step4.y = -130
step4.hide()
step5.x = 500
step5.y = -100
step5.hide()
step6.x = 500
step6.y = -70
step6.hide()
step7.x = 500
step7.y = -10
step7.hide()

//second commit

function myturn(){
turnnumber += 1
STtechnique = 1
choiced == 0
showitemlimit = 2
DSfirst = 1
DSmode = "なし"
turnshow()
if(gameStatus2 == "DSduring"){
  after(2.3/hidespeed, "seconds", () => {
    if(DSfirst == 1) {
      // hukidasi.image.x = 0
      // hukidasi.image.y = -8*grid
      descriptionText.text.x = 0
      descriptionText.text.y = -8*grid
      // hukidasi.image.show()
      // hukidasi.image.sendToFront()
      // descriptionText.text.show()
      // descriptionText.text.sendToFront()
      didlist("はじめに")
      if(indid == 0){
       textsign = 0
  　　  DSmode = "はじめに"
      }
      if(turnnumber == 2){
        didlist("移動1")
        if(indid == 0){
         textsign = 0
    　　  DSmode = "移動1"
        }
      }
  //     textsign = 0
  // 　　 DSmode = "はじめに"
      DSfirst = 0
    }
    var choicing = 0
    //////console.log(cardsetting[0])
    repeatUntil(() => !(turn == "my"), () => {
      if(duringtutorial == 0){
       if(choicing == 1){
         if(keysDown.includes('S')){
           upcard2 -= 10
           upcard = upcard2
           range(0, cardkind.length).forEach(i => {
            standcard(cardkind[i])
            upcard -= 150
          })
         }
         if(keysDown.includes('W')){
           upcard2 += 10
           upcard = upcard2
           range(0, cardkind.length).forEach(i => {
            standcard(cardkind[i])
            upcard -= 150
          })
         }
       }
       if(choicingitem == 1){
         if(keysDown.includes('S')){
           itemupcard2 -= 10
           itemupcard = itemupcard2
           range(0, itemkind.length).forEach(i => {
            standitem(itemkind[i])
            itemupcard -= 150
          })
         }
         if(keysDown.includes('W')){
           itemupcard2 += 10
           itemupcard = itemupcard2
           range(0, itemkind.length).forEach(i => {
            standitem(itemkind[i])
            itemupcard -= 150
          })
         }
       }
       if(startTurn == 1){
         stepshow()
         newturn()
         startTurn = 0
       }
       if(step5.mouseOver && mouseDown){
         didlist("はじめに")
         if(!(indid == 0)){
         stephide()
         backshow()
         didlist("配置1")
         if(indid == 0){
          textsign = 0
     　　 DSmode = "配置1"
         }
         //選んでいる
         choicing = 1
         //
         upcard2 = 180
         upcard = upcard2
         upIM.image.show()
         upIM.image.sendToFront()
         downIM.image.show()
         downIM.image.sendToFront()
         range(0, cardkind.length).forEach(i => {
           standcard(cardkind[i])
           upcard -= 150
         })
         }
        }
        if(step4.mouseOver && mouseDown && turnnumber > 1){
          didlist("移動1")
          if(!(indid == 0)){
           stephide()
           backshow()
           gocardtime = "true"
           if(turnnumber == 2){
             didlist("移動2")
             if(indid == 0){
              textsign = 0
         　　  DSmode = "移動2"
             }
           }
         }
        }
       if(step3.mouseOver && mouseDown){
         didlist("道具1")
         if(!(indid == 0)){
          stephide()
          backshow()
          if(turnnumber == 2){
            didlist("道具2")
            if(indid == 0){
             textsign = 0
        　　  DSmode = "道具2"
            }
          }
          //選んでいる
          choicingitem = 1
          //
          itemupcard2 = 180
          itemupcard = itemupcard2
          range(0, itemkind.length).forEach(i => {
            standitem(itemkind[i])
            itemupcard -= 150
          })
        }
       }
       if(step2.mouseOver && mouseDown){
         didlist("技1")
         if(!(indid == 0)){
          stephide()
          backshow()
          TS = 1
          didlist("技2")
          if(indid == 0){
            textsign = 0
     　　   DSmode = "技2"
          }
        }
       }
       //当たり判定
       techniquestart()
       if(choicing == 1 && duringtutorial == 0){
         range(0,cardkind.length).forEach(i => {
           cardhit(cardkind[i],cardkind[i].name)
         })
       }
       if(choicingitem == 1 && duringtutorial == 0){
         range(0,itemkind.length).forEach(i => {
           itemhit(itemkind[i],itemkind[i].name)
         })
       }
      if(mouseDown && mouseX < grid*4 && mouseX > grid*-4 && mouseY < grid*-6 && mouseY > grid*-10 ){
            if(!(choicestand == 1)){
              if(showcardlimit > 0){
               downX = floor(mouseX/grid)
               downY = floor(mouseY/grid)
               downX += 0.5
               downY += 0.5
               canarea.image.hide()
               cardfield(choicestand,choicestand2)
               existcard()
               choicestand = 1
               didlist("配置3")
               if(indid == 0){
                textsign = 0
           　　 DSmode = "配置3"
               }else{
                 didlist("配置4")
                 if(indid == 0){
                  textsign = 0
             　　 DSmode = "配置4"
                 }
               }
               //////console.log(downX)
             }
            }
       }
       if(mouseX < grid*10 && mouseX > grid*-10 && mouseY < grid*15 && mouseY > grid*-15 && mouseDown){
        if(!(choiceitem == 1)){
          if(showitemlimit > 0){
           downX = floor(mouseX/grid)
           downY = floor(mouseY/grid)
           downX += 0.5
           downY += 0.5
            ////console.log("道具の効果")
           if(choiceitem2.type == "attributechange"){
             ////console.log("属性変更決定")
             ////console.log(choiceitem2)
             ////console.log(choiceitem2.EFname)
             attributechange(choiceitem,choiceitem2,choiceitem2.attribute,choiceitem2.EFname)
             if(turnnumber == 2){
               didlist("道具4")
               if(indid == 0){
                textsign = 0
           　　  DSmode = "道具4"
               }
             }
           }
           choiceitem = 1
           //////console.log(downX)
         }
        }
      }
      if(keysDown.includes('B') || gobackTab.mouseOver && mouseDown){
        canarea.image.hide()
        if(turnnumber == 2){
          didlist("移動4")
          if(!(indid == 0)){
            didlist("道具1")
            if(indid == 0){
             textsign = 0
      　　   DSmode = "道具1"
            }else{
              didlist("技1")
              if(indid == 0){
                textsign = 0
         　　   DSmode = "技1"
              }
            }
          }
        }
        choicing = 0
        choicingitem = 0
        choicestand = 1
        choiceitem = 1
        STtechnique = 1
        stepshow()
        wheres.forEach(where => {
          where.image.hide()
        })
        where0.image.hide()
        gocardtime = "false"
        range(0, cardsetting.length).forEach(i => {
         notstandcard(cardsetting[i])
         upcard -= 150
       })
       range(0, itemkind.length).forEach(i => {
        notstandcard(itemkind[i])
        itemupcard -= 150
       })
       TBt.text.hide()
       TS = 0
      }
      if(turnchange == "true"){
       if(step1.mouseOver && mouseDown || keysDown.includes('F')){
          bctab.hide()
          stephide()
         nextturn = 1
          turn = "your"
          turnchange = "false"
          choicestand = 1
       }

     }
    }
   })
  })
}else{
after(2.3/hidespeed, "seconds", () => {
  var choicing = 0
  //////console.log(cardsetting[0])
  repeatUntil(() => !(turn == "my"), () => {
     if(choicing == 1){
       if(keysDown.includes('W')|| mouseDown && upIM.image.mouseOver){
         upcard2 -= 10
         upcard = upcard2
         range(0, cardkind.length).forEach(i => {
          standcard(cardkind[i])
          upcard -= 150
        })
       }
       if(keysDown.includes('S')|| mouseDown && downIM.image.mouseOver){
         upcard2 += 10
         upcard = upcard2
         range(0, cardkind.length).forEach(i => {
          standcard(cardkind[i])
          upcard -= 150
        })
       }
     }
     if(choicingitem == 1){
       if(keysDown.includes('W') || mouseDown && upIM.image.mouseOver){
         itemupcard2 -= 10
         itemupcard = itemupcard2
         range(0, itemkind.length).forEach(i => {
          standitem(itemkind[i])
          itemupcard -= 150
        })
       }
       if(keysDown.includes('S') || mouseDown && downIM.image.mouseOver){
         itemupcard2 += 10
         itemupcard = itemupcard2
         range(0, itemkind.length).forEach(i => {
          standitem(itemkind[i])
          itemupcard -= 150
        })
       }
     }
     if(startTurn == 1){
       stepshow()
       newturn()
       startTurn = 0
     }
     if(step5.mouseOver && mouseDown){
       stephide()
       backshow()
       //選んでいる
       choicing = 1
       //
       upcard2 = 180
       upcard = upcard2
       range(0, cardkind.length).forEach(i => {
         standcard(cardkind[i])
         upcard -= 150
       })
       upIM.image.show()
       upIM.image.sendToFront()
       downIM.image.show()
       downIM.image.sendToFront()
      }
      if(step7.mouseOver && mouseDown){
        black.image.show()
        black.image.sendToFront()
        Yesblack.text.show()
        Yesblack.text.sendToFront()
        Noblack.text.show()
        Noblack.text.sendToFront()
        Orblack.text.show()
        Orblack.text.sendToFront()
      }
      if(Noblack.text.mouseOver && mouseDown){
        viewStatus = 0
        canarea.image.hide()
        choicing = 0
        choicingitem = 0
        choicestand = 1
        choiceitem = 1
        STtechnique = 1
        stepshow()
        wheres.forEach(where => {
          where.image.hide()
        })
        where0.image.hide()
        gocardtime = "false"
        range(0, cardsetting.length).forEach(i => {
         notstandcard(cardsetting[i])
         upcard -= 150
       })
       range(0, itemkind.length).forEach(i => {
        notstandcard(itemkind[i])
        itemupcard -= 150
       })
       TBt.text.hide()
       TS = 0
      }
      if(Yesblack.text.mouseOver && mouseDown){
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
      if(step6.mouseOver && mouseDown){
        stephide()
        backshow()
        viewStatus = 1
      }
      if(step4.mouseOver && mouseDown){
        stephide()
        backshow()
        gocardtime = "true"

     }
     if(step3.mouseOver && mouseDown){
       stephide()
       backshow()
       //選んでいる
       choicingitem = 1
       //
       itemupcard2 = 180
       itemupcard = itemupcard2
       range(0, itemkind.length).forEach(i => {
         standitem(itemkind[i])
         itemupcard -= 150
       })
      }
     if(step2.mouseOver && mouseDown){
       stephide()
       backshow()
       TS = 1
     }
     //当たり判定
     techniquestart()
     if(choicing == 1){
       range(0,cardkind.length).forEach(i => {
         cardhit(cardkind[i],cardkind[i].name)
       })
     }
     if(choicingitem == 1){
       range(0,itemkind.length).forEach(i => {
         itemhit(itemkind[i],itemkind[i].name)
       })
     }
     // if(viewStatus == 1){
     //   range(0,cardkind.length).forEach(i => {
     //     cardhit(cardkind[i],cardkind[i].name)
     //   })
     // }
     if(viewStatus == 1 && mouseDown && Downnow4 == 0){
       cards.forEach(card => {
         if(card.image.mouseOver){
           Downnow4 = 1
           cardstatusshow(card.namefull)
           statusrange = card.range
           FromEnglishtoJapanese(card.propertydata)
           statustype = translationResult
           after(1, "seconds", () => {
             Downnow4 = 0
           })
         }
       })
       Ycards.forEach(Ycard => {
         if(Ycard.image.mouseOver){
           Downnow4 = 1
           cardstatusshow(Ycard.namefull)
           statusrange = Ycard.range
           FromEnglishtoJapanese(Ycard.propertydata)
           statustype = translationResult
           after(1, "seconds", () => {
             Downnow4 = 0
           })
         }
       })
     }
    if(mouseDown && mouseX < grid*4 && mouseX > grid*-4 && mouseY < grid*-6 && mouseY > grid*-10 && choicing == 1){
          if(!(choicestand == 1)){
            if(showcardlimit > 0){
             downX = floor(mouseX/grid)
             downY = floor(mouseY/grid)
             downX += 0.5
             downY += 0.5
             canarea.image.hide()
             cardfield(choicestand,choicestand2)
             existcard()
             choicestand = 1
             //////console.log(downX)
           }
          }
     }
     if(mouseX < grid*10 && mouseX > grid*-10 && mouseY < grid*15 && mouseY > grid*-15 && mouseDown){
      if(!(choiceitem == 1)){
        if(showitemlimit > 0){
         downX = floor(mouseX/grid)
         downY = floor(mouseY/grid)
         downX += 0.5
         downY += 0.5
          ////console.log("道具の効果")
         if(choiceitem2.type == "attributechange"){
           ////console.log("属性変更決定")
           ////console.log(choiceitem2)
           ////console.log(choiceitem2.EFname)
           attributechange(choiceitem,choiceitem2,choiceitem2.attribute,choiceitem2.EFname)
         }
         choiceitem = 1
         //////console.log(downX)
       }
      }
    }
    if(keysDown.includes('B') || gobackTab.mouseOver && mouseDown){
      viewStatus = 0
      canarea.image.hide()
      choicing = 0
      choicingitem = 0
      choicestand = 1
      choiceitem = 1
      STtechnique = 1
      stepshow()
      wheres.forEach(where => {
        where.image.hide()
      })
      where0.image.hide()
      gocardtime = "false"
      range(0, cardsetting.length).forEach(i => {
       notstandcard(cardsetting[i])
       upcard -= 150
     })
     range(0, itemkind.length).forEach(i => {
      notstandcard(itemkind[i])
      itemupcard -= 150
     })
     TBt.text.hide()
     TS = 0
    }
    if(turnchange == "true"){
     if(step1.mouseOver && mouseDown || keysDown.includes('F')){
        bctab.hide()
        stephide()
       nextturn = 1
        turn = "your"
        turnchange = "false"
        choicestand = 1
     }

   }
  })
})
}
}
//回数制限など
function newturn(){
  showcardlimit = 2
  cards.forEach(card => {
    card.TorF = 0
  })
}
function backshow() {
  gobackTab.show()
  gobackText.show()
  gobackTab.sendToFront()
  gobackText.sendToFront()
}
function stephide(){
  step1.hide()
  step2.hide()
  step3.hide()
  step4.hide()
  step5.hide()
  step6.hide()
  step7.hide()
  bctab.hide()
}
function stepshow(){
  black.image.hide()
  Yesblack.text.hide()
  Noblack.text.hide()
  Orblack.text.hide()
  step1.show()
  step2.show()
  step3.show()
  step4.show()
  step5.show()
  step6.show()
  step7.show()
  bctab.show()
  bctab.sendToFront()
  step1.sendToFront()
  step2.sendToFront()
  step3.sendToFront()
  step4.sendToFront()
  step5.sendToFront()
  step6.sendToFront()
  step7.sendToFront()
  gobackTab.hide()
  gobackText.hide()
  upIM.image.hide()
  downIM.image.hide()
}
// function choicehide(){
//   step1.hide()
//   step2.hide()
//   step3.hide()
//   step4.hide()
//   step5.hide()
//   bctab.hide()
// }


function yourturn(){
  Yturnshow()
after(2.3/hidespeed, "seconds", () => {
  Ycards.forEach(Ycard => {
    Ycard.TorF = 0
  })
  //配置
  if(Ycards.length < 10){
    randomDU(5)
  }else{
    if(Ycards.length < 15){
      randomDU(2)
    }else{
      randomDU(0)
    }
  }
  //アイテム
  useitem()
  //技
  Ycards.forEach(Ycard => {
　　if(Ycard.death == 0 && !(Ycard.technique == "nothing")){
      keepmath = 0
      keepmath2 = Ycard.technique
      range(0, techniqueall.length).forEach(i => {
        if(techniqueall[i].name == keepmath2){
           keepmath2 = techniqueall[i]
        }
      })
      range(1,keepmath2.range+1).forEach(i => {
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
        if(card.image.x ==  Ycard.image.x + Twherecan[i*2] && card.image.y == Ycard.image.y + Twherecan[i*2+1]){
          keepmath = 1
        }
       })
      })
      if(keepmath == 1){
        ////console.log("相手の技発動")
        Ytechnique(Ycard.technique,Ycard.image.x,Ycard.image.y)
      }
    }
  })
  //移動
  Ycards.forEach(Ycard => {
   if(Ycard.death == 0 && !(Ycard.image.x == 'NaN') && !(Ycard.image.y == 'NaN')){
    Ytypeplus = 0
    Ykeepmath = Ycard.image.y - 10*grid
    //////console.log(Ycard)
    //////console.log(Ycard.image.y)
    //////console.log(Ykeepmath)
    Ykeepmath = Ykeepmath*-1
    Ykeepmath2 = Ycard.image.x + 15*grid
    //////console.log(floor(Ykeepmath/grid))
    //////console.log(floor(Ykeepmath2/grid))
    //////console.log(Ycard.propertydata)
    //////console.log(mapData[floor(Ykeepmath/grid)][floor(Ykeepmath2/grid)])
    Ykeepmath = abs(Ykeepmath)
    Ykeepmath2 = abs(Ykeepmath2)
    Ychecksame(mapData[floor(Ykeepmath/grid)][floor(Ykeepmath2/grid)],Ycard.propertydata)
     if(100 > random(0,100) && Ycard.TorF == 0){
      if(Ycard.image.y < grid*-9){
        front = "outdoors"
      }else{
        front = "inthehall"
     }
        // if(0 == random(0,2)){
          Ycardput(Ycard.go,Ycard.step)
         // ////console.log(goXYstart)
         // ////console.log(wherecan)
         // ////console.log("putern1")
         movementRecord = 0
         Ychoicego(Ycard.image.x,Ycard.image.y,Ycard.property,Ycard.role,Ycard.moved)
         Ycard.moved = "nothing"
         if(movementRecord == 1){
           Ycard.moved = "back"
         }
         ////console.log("P1x: " + goX)
         ////console.log("P1y: " + goY)
         yourgo(Ycard.number,goX,goY)
         YcardDLT()
         checkfinish()

       //   Ycardput2(Ycard.go,Ycard.step)
       //   // ////console.log(goXYstart)
       //   // ////console.log(wherecan)
       //   // ////console.log("putern2")
       //   Ychoicego(Ycard.image.x,Ycard.image.y,Ycard.property)
       //   ////console.log("P2x: " + goX)
       //   ////console.log("P2y: " + goY)
       //   yourgo(Ycard.number,goX,goY)
       //   YcardDLT()
       //   checkfinish()
       // }
      // }else{
        // Ycardput3(Ycard.go,Ycard.step)
        // //////console.log(goXYstart)
        // //////console.log(wherecan)
        // //////console.log("putern3")
        // Ychoicego()
        // yourgo(Ycard.number,goX,goY)
        // YcardDLT()
        // checkfinish()

    }
   }
  })
  samefunction()
})
}
