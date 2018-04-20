

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
      D2clones.forEach(D2clone => {
        D2clone.image.x -= OTOpointx
        D2clone.image.show()
        D2clone.image.sendToFront()
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
        costshow.text.sendToFront()
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
        costshow.text.sendToFront()
      }else{
        costshow.text.hide()
      }
    })
    IFOpointx -= 10
     leftstand += 1
  }
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
})
