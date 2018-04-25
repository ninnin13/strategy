//リセット用
var resset =  new Image({
url: "./image/ressettab.png",
 width: 200,
 height: 50,
})
resset.hide()
resset.x = 6*grid
resset.y = 9*grid
//ステータス表示用
var statusback = {
  image: new Image({
    url: "./image/tab/notnormal/statusback.png",
     width: 36*grid,
     height: 18*grid,
  }),
}
statusback.image.hide()
var statusbotton = {
  image: new Image({
    url: "./image/tab/notnormal/statusbotton.png",
     width: 4*grid,
     height: 1.3*grid,
  }),
}
statusbotton.image.hide()
statusbotton.image.x = 4*grid
statusbotton.image.y = -9*grid
var Sback = {
  image: new Image({
    url: "./image/icon/back.png",
     width: 2*grid,
     height: 2*grid,
  }),
}
Sback.image.hide()
Sback.image.x = 15*grid
Sback.image.y = -7*grid
var statustext = {
  text: new Text({
   text: () => mode + "モード",
   size: 40,
   color: "rgb(100, 50, 240)",
   fontFamily: "arial",
   textAlign: "left"
 }),
}
statustext.text.hide()
statustext.text.x = 10*grid
statustext.text.y = -9*grid
var helpname = {
  text: new Text({
   text: () => "名前:" + statusname,
   size: 40,
   color: "rgb(100, 50, 240)",
   fontFamily: "arial",
   textAlign: "left"
 }),
}
helpname.text.hide()
helpname.text.x = -4*grid
helpname.text.y = 7*grid
var helprange = {
  text: new Text({
   text: () => "移動範囲:" + statusrange,
   size: 40,
   color: "rgb(100, 50, 240)",
   fontFamily: "arial",
   textAlign: "left"
 }),
}
helprange.text.hide()
helprange.text.x = -4*grid
helprange.text.y = 4*grid
var helpcost = {
  text: new Text({
   text: () => "コスト:" + statuscost,
   size: 40,
   color: "rgb(100, 50, 240)",
   fontFamily: "arial",
   textAlign: "left"
 }),
}
helpcost.text.hide()
helpcost.text.x = -4*grid
helpcost.text.y = -3.5*grid
var helptype = {
  text: new Text({
   text: () => "属性:" + statustype,
   size: 40,
   color: "rgb(100, 50, 240)",
   fontFamily: "arial",
   textAlign: "left"
 }),
}
helptype.text.hide()
helptype.text.x = -4*grid
helptype.text.y = 5.5*grid
var helpgotype = {
  text: new Text({
   text: () => "移動タイプ:" + statusgotype,
   size: 40,
   color: "rgb(100, 50, 240)",
   fontFamily: "arial",
   textAlign: "left"
 }),
}
helpgotype.text.hide()
helpgotype.text.x = -4*grid
helpgotype.text.y = 2.5*grid
var helptechnique = {
  text: new Text({
   text: () => "技:" + statusTC,
   size: 40,
   color: "rgb(100, 50, 240)",
   fontFamily: "arial",
   textAlign: "left"
 }),
}
helptechnique.text.hide()
helptechnique.text.x = -4*grid
helptechnique.text.y = 1*grid
var helpSP1 = {
  text: new Text({
   text: () => "特殊効果:" + statusSP1,
   size: 40,
   color: "rgb(100, 50, 240)",
   fontFamily: "arial",
   textAlign: "left"
 }),
}
helpSP1.text.hide()
helpSP1.text.x = -4*grid
helpSP1.text.y = -0.5*grid
var helpSP2 = {
  text: new Text({
   text: () => "　　　　 " + statusSP2,
   size: 40,
   color: "rgb(100, 50, 240)",
   fontFamily: "arial",
   textAlign: "left"
 }),
}
helpSP2.text.hide()
helpSP2.text.x = -4*grid
helpSP2.text.y = -2*grid
var helpSP3 = {
  text: new Text({
   text: () => "　　　　 " + statusSP3,
   size: 40,
   color: "rgb(100, 50, 240)",
   fontFamily: "arial",
   textAlign: "left"
 }),
}
helpSP3.text.hide()
helpSP3.text.x = -4*grid
helpSP3.text.y = -3.5*grid
//
var arrow =  new Image({
url: "./image/icon/arrow2.png",
 width: 50,
 height: 50,
})
var arrow2 =  new Image({
url: "./image/icon/arrow.png",
 width: 50,
 height: 50,
})
arrow.hide()
arrow2.hide()
arrow.x = -1*grid
arrow.y = -9*grid
arrow2.x = 1*grid
arrow2.y = -9*grid
var OTOarrow =  new Image({
url: "./image/icon/arrow2.png",
 width: 50,
 height: 50,
})
var OTOarrow2 =  new Image({
url: "./image/icon/arrow.png",
 width: 50,
 height: 50,
})
OTOarrow.hide()
OTOarrow2.hide()
OTOarrow.x = -1*grid
OTOarrow.y = 9*grid
OTOarrow2.x = 1*grid
OTOarrow2.y = 9*grid
var backTab = new Text({
  text: () => "戻る",
  size: 40,
  color: "rgb(137,15,101)",
  fontFamily: "arial",
})
var backTabBack =  new Image({
url: "./image/tab/lightgreen.png",
 width: 100,
 height: 50,
})
backTabBack.hide()
backTab.x = -550
backTab.y = -270
backTabBack.x = -550
backTabBack.y = -270
backTab.hide()
var setMap =  new Image({
url: "./image/lines/line2.png",
 width: 1200,
 height: 60,
})

setMap.hide()
forever(() => {
   if(gameStatus == "change"){
     //背景
    if(backNumber == 0){
     nextpage()
     after(2, "seconds", () => {
      // clones.forEach(clone => {
      //   clone.image.x -= OTOpointx
      //   if(clone.image.x < 500 && clone.image.x > -500){
      //     clone.image.show()
      //   }else{
      //     clone.image.hide()
      //   }
      // })
      homeback.show()
      homeback.sendToFront()
      backTabBack.show()
      backTabBack.sendToFront()
      backTab.show()
      setMap.show()
      setMap.sendToFront()
      backTab.sendToFront()
      arrow.sendToFront()
      arrow2.sendToFront()
      arrow.show()
      arrow2.show()
      OTOarrow.sendToFront()
      OTOarrow2.sendToFront()
      OTOarrow.show()
      OTOarrow2.show()
      costtext.text.show()
      costtext.text.sendToFront()
      limittext.text.show()
      limittext.text.sendToFront()
      resset.show()
      resset.sendToFront()
      statusbotton.image.show()
      statusbotton.image.sendToFront()
      statustext.text.show()
      statustext.text.sendToFront()
      DetailsTime = 0
      mode = "ノーマル"
      range(0,walklist.length).forEach(i => {
        imagesize(walklist[i].image,250)
        walklist[i].image.x = -12*grid
        walklist[i].image.y = 4*grid
      })
      range(0,soloitemlist.length).forEach(i => {
        imagesize(soloitemlist[i].image,250)
        soloitemlist[i].image.x = -12*grid
        soloitemlist[i].image.y = 4*grid
      })
      D2clones.forEach(D2clone => {
        if(D2clone.none == 0){
         D2clone.image.x -= OTOpointx
         D2clone.image.show()
         D2clone.image.sendToFront()
        }
      })
      IFOpointx = 0
      OTOpointx = 0
      range(0,cardsetting.length).forEach(i => {
        cardinpage(cardsetting[i],i*200)
      })
      range(0,itemsetting.length).forEach(i => {
        cardinpage(itemsetting[i],i*200 + cardsetting.length*200)
      })
      costshows.forEach(costshow => {
        keepword = costshow.of
        console.log(keepword)
        costshow.text.x = keepword.image.x
        console.log(keepword.image.x)
        costshow.text.y = -2*grid
        if(costshow.text.x < 500 && costshow.text.x > -500){
          costshow.text.show()
          costshow.text.sendToFront()
        }else{
          costshow.text.hide()
          costshow.text.sendToFront()
        }

      })
     })
     backNumber = 1
    }
    if(backTabBack.mouseOver && mouseDown){
      gameStatus = "home"
      backNumber = 0
      pagechange()
    }
    range(0,cardsetting.length).forEach(i => {
      if(cardsetting[i].image.mouseOver && mouseDown && Downnow2 == 0 && DetailsTime == 1){
         Downnow2 = 1
         cardstatusshow(cardsetting[i])
         after(1, "seconds", () => {
           Downnow2 = 0
         })
      }
    })
    range(0,itemsetting.length).forEach(i => {
      if(itemsetting[i].image.mouseOver && mouseDown && Downnow2 == 0 && DetailsTime == 1){
         Downnow2 = 1
         itemstatusshow(itemsetting[i])
         after(1, "seconds", () => {
           Downnow2 = 0
         })
      }
    })
  //   cardsetting.forEach(clone => {
  //
  // })
  if(keysDown.includes('CTRL') && keysDown.includes("S") || statusbotton.image.mouseOver && mouseDown && Downnow3 == 0){
    Downnow3 = 1
    after(0.5, "seconds", () => {
      Downnow3 = 0
    })
    if(DetailsTime == 0){
      DetailsTime = 1
      mode = "詳細"
    }else{
      DetailsTime = 0
      mode = "ノーマル"
    }
  }
  if(Sback.image.mouseOver && mouseDown){
    cardstatushide()
    itemstatushide()
  }
  if(keysDown.includes('R') || resset.mouseOver && mouseDown){
    D2clones.forEach(D2clone => {
      D2clone.image.hide()
    })
    range(0,D2clones.length).forEach(i => {
      D2clones.remove(D2clones[0])
    })
    range(0,clones.length).forEach(i => {
      clones.remove(clones[0])
    })
    OTOpointx = 0
    allcost = 0
  }
  D2clones.forEach(D2clone => {
    if(D2clone.image.mouseOver && mouseDown && Downnow == 0){
      Downnow = 1
      outcard(D2clone.number)
      after(1, "seconds", () => {
        Downnow = 0
      })
    }
  })
  // range(0,D2clones.length).forEach(i => {
  //   if(D2clones[i].image.mouseOver && mouseDown){
  //     console.log("条件を満たした")
  //     after(0.2, "seconds", () => {
  //
  //    })
  //   }
  // })
  if(keysDown.includes('C') || arrow2.mouseOver && mouseDown){
    range(0,cardsetting.length).forEach(i => {
      right(cardsetting[i])
    })
    range(0,itemsetting.length).forEach(i => {
      right(itemsetting[i])
    })
    costshows.forEach(costshow => {
      costshow.text.x += 10
      if(costshow.text.x < 500 && costshow.text.x > -500){
        costshow.text.show()
        // costshow.text.sendToFront()
      }else{
        costshow.text.hide()
      }
    })
    IFOpointx += 10
     rightstand += 1
  }
  if(keysDown.includes('Z') || arrow.mouseOver && mouseDown){
    range(0,cardsetting.length).forEach(i => {
      left(cardsetting[i])
    })
    range(0,itemsetting.length).forEach(i => {
      left(itemsetting[i])
    })
    costshows.forEach(costshow => {
      costshow.text.x -= 10
      if(costshow.text.x < 500 && costshow.text.x > -500){
        costshow.text.show()
        // costshow.text.sendToFront()
      }else{
        costshow.text.hide()
      }
    })
    IFOpointx -= 10
     leftstand += 1
  }
  if(D2clones.length >0){
   if(keysDown.includes('D') || OTOarrow2.mouseOver && mouseDown){
     D2clones.forEach(D2clone => {
       D2clone.image.x += 10
       if(D2clone.image.x < 500 && D2clone.image.x > -500){
         D2clone.image.show()
       }else{
         D2clone.image.hide()
       }
       })
     OTOpointx += 10
   }
   if(keysDown.includes('A') || OTOarrow.mouseOver && mouseDown){
     D2clones.forEach(D2clone => {
       D2clone.image.x -= 10
       if(D2clone.image.x < 500 && D2clone.image.x > -500){
         D2clone.image.show()
       }else{
         D2clone.image.hide()
       }
     })
     OTOpointx -= 10
   }
  }
 }
})
