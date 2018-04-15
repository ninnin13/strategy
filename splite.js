//吹き出し
// var hukidasi = {
//   image: new Image({
//     url: `./image/tab/hukidasi.png`,
//     width: 1200,
//     height: 200,
//   }),
//   name: "landeffect"
// }
// hukidasi.image.hide()
var descriptionText = {
  text: new Text({
    text: () => Textinwhat,
    size: 50,
    color: "rgb(100, 50, 240)",
    fontFamily: "arial"
  })
}
//チュートリアル
var canarea = {
  image: new Image({
    url: `./image/canarea.png`,
    width: 8*grid,
    height: 4*grid,
  }),
  name: "canarea"
}
canarea.image.hide()
//エフェクト
var landeffect = {
  image: new Image({
    url: `./image/card/landeffect.png`,
    width: cardsize/5,
    height: cardsize/5,
  }),
  name: "landeffect"
}
landeffect.image.hide()
var watereffect = {
  image: new Image({
    url: `./image/card/watereffect.png`,
    width: cardsize/5,
    height: cardsize/5,
  }),
  name: "watereffect"
}
watereffect.image.hide()
var skyeffect = {
  image: new Image({
    url: `./image/card/skyeffect.png`,
    width: cardsize/5,
    height: cardsize/5,
  }),
  name: "skyeffect"
}
skyeffect.image.hide()
var fireeffect = {
  image: new Image({
    url: `./image/card/fireeffect.png`,
    width: cardsize/5,
    height: cardsize/5,
  }),
  name: "fireeffect"
}
fireeffect.image.hide()
var undeadeffect = {
  image: new Image({
    url: `./image/card/undeadeffect.png`,
    width: cardsize/5,
    height: cardsize/5,
  }),
  name: "undeadeffect"
}
undeadeffect.image.hide()
//コスト
var costtext = {
  text: new Text({
  text: () => "コストの合計" + allcost,
  size: 30,
  color: "rgb(100, 50, 240)",
  fontFamily: "arial",
  textAlign: "left"
  })
}
costtext.text.hide()
costtext.text.x = -12*grid
costtext.text.y = 9*grid
var limittext = {
  text: new Text({
  text: () => "限界コスト" + limitcost,
  size: 30,
  color: "rgb(150, 50, 100)",
  fontFamily: "arial",
  textAlign: "left"
  })
}
limittext.text.hide()
limittext.text.x = -19*grid
limittext.text.y = 9*grid
//他のページに移動するときの画面
var loadtext = {
  text: new Text({
  text: () => "ロード中",
  size: 30,
  color: "rgb(100, 50, 240)",
  fontFamily: "arial",
  textAlign: "left"
  })
}
var loadicon = {
  image: new Image({
    url: "./image/icon/loadicon.png",
    width: 3*grid,
    height: 3*grid,
  })
}
loadicon.image.hide()
loadicon.image.x = -18*grid
loadicon.image.y = -8*grid
loadtext.text.hide()
loadtext.text.x = 0
loadtext.text.y = 8*grid
//勝利と敗北
var winbord = {
  image: new Image({
    url: "./image/win.png",
    width: 40*grid,
    height: 20*grid,
  })
}
winbord.image.hide()
var rosebard = {
  image: new Image({
    url: "./image/rose.png",
    width: 40*grid,
    height: 20*grid,
  })
}
rosebard.image.hide()

//技
var TBt = {
  text: new Text({
  text: () => techniquetext,
  size: 30,
  color: "rgb(100, 50, 240)",
  fontFamily: "arial",
  textAlign: "left"
  })
}
TBt.text.hide()
var TBb = new Image({
  url: "./image/tab/blue.png",
  width: 135,
  height: 50
})
TBb.hide()
//移動の下準備
var where0 = {
  image: new Image({
    url: "./image/redblock.png",
    width: grid,
    height: grid,
  })
}
where0.image.hide()
range(1,100).forEach(i => {
 var where = {
   image: new Image({
     url: "./image/redblock.png",
     width: grid,
     height: grid,
   }),
   name: 'gowhere1',
   number: i,
   type: "normal",
   check: "false",
   goX: "nothing",
   goY: "nothing",
   delection: "nothing"
 }
 wheres.push(where)
})
//技
forever(() => {
  if(STtechnique == 1){
    if(TBb.mouseOver && mouseDown && TCstopper == 0){
       range(0,techniqueall.length).forEach(i => {
         console.log(techniqueall[i].name)
         console.log(techniquetext)
         if(techniqueall[i].name == techniquetext){
           console.log("TCnumber設定")
           TCnumber = i
         }
       })
       TCchoice()
       TCstopper = 1
    }
  }
})
//カードの移動
forever(() => {
 if(gocardtime == "true"){
  cards.forEach(card => {
    if (card.image.mouseOver && mouseDown && whatcard == 0 && card.TorF == 0 && card.death == 0) {
      range(0,outdirection.length).forEach(i => {
        outdirection.remove(outdirection[0])
      })
      wheres.forEach(where => {
        where.type = "normal"
        where.check = "false"
      })
      wheresputout()
      //console.log(card.name)
      whatcard = 1
      touch = card.name
      touchX = card.image.x
      touchY = card.image.y
      where0.image.show()
      where0.image.sendToFront()
      where0.image.x = touchX
      where0.image.y = touchY
      checkcard(card.type)
      goNumber = 1
      typeplus = 0
      keepmath = card.image.y - 10*grid
      keepmath = keepmath*-1
      keepmath2 = card.image.x + 15*grid
      //console.log(mapData[floor(keepmath/grid)][floor(keepmath2/grid)])
      //console.log(card.propertydata)
      checksame(mapData[floor(keepmath/grid)][floor(keepmath2/grid)],card.propertydata)
      if(cardtype == "normal"){
        //console.log("red")
        range(1,cardgo+1+typeplus).forEach(i => {
          gopoint(1*i,0,card.propertydata)
          gopoint(-1*i,0,card.propertydata)
          gopoint(0,1*i,card.propertydata)
          gopoint(0,-1*i,card.propertydata)
       })
        after(0.3, "seconds", () => {
          gotrue = "true"
        })
         gopoint(1,1,card.propertydata)
         gopoint(1,-1,card.propertydata)
         gopoint(-1,1,card.propertydata)
         gopoint(-1,-1,card.propertydata)
      }
      // if(cardtype == "unique"){
      //   //console.log("red")
      //   range(1,cardgo+1+typeplus).forEach(i => {
      //    gopoint(1*i,1*i,card.propertydata)
      //    gopoint(1*i,-1*i,card.propertydata)
      //    gopoint(-1*i,1*i,card.propertydata)
      //    gopoint(-1*i,-1*i,card.propertydata)
      //  })
      //   after(0.3, "seconds", () => {
      //     gotrue = "true"
      //   })
      //
      // }
      if(cardtype == "power"){
        //console.log("red")
        gopoint(1,0,card.propertydata)
        gopoint(-1,0,card.propertydata)
        gopoint(0,-1,card.propertydata)
        range(1,cardgo+1+typeplus).forEach(i => {
          gopoint(0,1*i,card.propertydata)
       })
        after(0.3, "seconds", () => {
          gotrue = "true"
        })

      }
      if(cardtype == "jump"){
        //console.log("red")
        range(1,cardgo+1+typeplus).forEach(i => {
         oddOrEven(i)
         if(oddEven == "odd"){
           range(0,2*i).forEach(j => {
            gopoint(i,i-j,card.propertydata)
           })
           range(0,2*i).forEach(j => {
            gopoint(-i,-i+j,card.propertydata)
           })
           range(0,2*i).forEach(j => {
            gopoint(i-j,-i,card.propertydata)
           })
           range(0,2*i).forEach(j => {
            gopoint(-i+j,i,card.propertydata)
           })
        }else{

        }
        })
        after(0.3, "seconds", () => {
          gotrue = "true"
        })
      }
      if(cardtype == "unique"){
        range(1,cardgo+1+typeplus).forEach(i => {
         gopoint(1*i,1*i,card.propertydata)
         gopoint(1*i,-1*i,card.propertydata)
         gopoint(-1*i,1*i,card.propertydata)
         gopoint(-1*i,-1*i,card.propertydata)
       })
        after(0.3, "seconds", () => {
          gotrue = "true"
        })

      }
      if(cardtype == "unique2"){
        several = 1
        keepmath3 = cardgo+typeplus
        // range(1,cardgo+1+typeplus).forEach(i => {
         range(-1*keepmath3,keepmath3+1).forEach(j => {
          range(-1*keepmath3,keepmath3+1).forEach(k => {
           oddOrEven(several)
           if(oddEven == "even"){
            gopoint(k,j,card.propertydata)
           }
           several += 1
         })
        })
       // })
        after(0.3, "seconds", () => {
          gotrue = "true"
        })

      }
      //保留
      // if(cardtype == "unique2"){
      //   range(1,cardgo+1+typeplus).forEach(i => {
      //    oddOrEven(i)
      //    if(oddEven == "odd"){
      //     gopoint(,,card.propertydata)
      //     gopoint(,,card.propertydata)
      //     gopoint(,,card.propertydata)
      //     gopoint(,,card.propertydata)
      //   }else{
      //     gopoint(1*i,1*i,card.propertydata)
      //     gopoint(1*i,-1*i,card.propertydata)
      //     gopoint(-1*i,1*i,card.propertydata)
      //     gopoint(-1*i,-1*i,card.propertydata)
      //   }
      //  })
        // after(0.3, "seconds", () => {
      //   //   gotrue = "true"
      //   // })
      //
      // }
     }
  })
 }
})
forever(() => {
  if(gocardtime == "true"){
    wheres.forEach(where => {
      if(where.image.y > grid*9 && where.image.x < grid*1 && where.image.x > grid*-1 && where.check == "false"){
         where.type = "special"
      }
      if(where.check == "false"){
        where.check = "true"
      }
      if(where.image.mouseOver && mouseDown && gotrue == "true") {
        if(where.type == "normal"){
         //console.log(where.name)
         redX = where.image.x
         redY = where.image.y
         cards.forEach(card => {
           if(card.death == 0){
           if(card.name == touch){
             card.keep = redX
             card.keep2 = redY
             if(abs(card.keep - card.image.x) > abs(card.keep2 - card.image.y)){
              checkmate = abs(card.keep - card.image.x)
             }else{
              checkmate = abs(card.keep2 - card.image.y)
             }
             card.keep3 = abs(card.keep - card.image.x)/checkmate
             card.keep4 = abs(card.keep2 - card.image.y)/checkmate
             repeat(checkmate, () => {
               if (card.keep - card.image.x > 0 ){
                 card.image.x += card.keep3
               } else {
                 card.image.x -= card.keep3
               }
               if(card.keep2 - card.image.y > 0 ){
                 card.image.y += card.keep4
               } else {
                 card.image.y -= card.keep4
               }
             })
           //   repeat(abs(card.keep2 - card.image.y), () => {
           //
           //   // card.image.x = redX
           //   // card.image.y = redY
           // })
         }
        }
       })
         //赤を消す
         wheres.forEach(where => {
           where.image.hide()
         })
         where0.image.hide()
         //????
         // whatcard = 1
         //動いたカード
         cards.forEach(card => {
           if(card.name == touch){
           card.TorF = 1
           }
         })
         //重なっているか?

      cards.forEach(card => {
       if(card.death == 0){
       if(card.name == touch){
        card.check = checkmate
        after(card.check*0.02, "seconds", () => {
         range(0,mycardX.length).forEach(i => {
           mycardX.remove(mycardX[0])
           mycardY.remove(mycardY[0])
         })
        // cards.forEach(card => {
           mycardX.push(card.image.x)
           mycardY.push(card.image.y)
           //console.log(card.image.x)
           //console.log(card.image.y)
         // })

         // //console.log(mycardX)
         // //console.log(mycardY)
         Ycards.forEach(Ycard =>{
           range(0,mycardX.length).forEach(i =>{
             // //console.log(mycardX[i])
             // //console.log(Ycard.image.x)
             // //console.log(mycardY[i])
             // //console.log(Ycard.image.y)
             if(Ycard.image.x == mycardX[i] && Ycard.image.y == mycardY[i]){
               Ycard.image.sendToFront()
               repeat(100, () => {
                 Ycard.image.brightness -= 1
               })
               after(1, "seconds", () => {
                 Ycard.image.hide()
               })
                Ycard.death = 1
                if(!(Ycard.effect == "nothing")){
                  console.log("敵の死んだ後の効果")
                  // Ycardkindin = 0
                  // range(0,cardkind.length).forEach(i => {
                  //   if(cardkind[i] == card.effect){
                  //     cardkindin = 1
                  //     console.log("その種類はない")
                  //   }
                  // })
                  // if(!(cardkindin == 1)){
                  //   console.log("種類追加")
                  //   cardkind.push(card.effect)
                  // }
                  yourdeck.push(Ycard.effect)
                  card.effect = "nothing"
             }
           }
         })
       })
      })
       }
     }
       })
         // cards.forEach(card => {
         //   if(card.image.x > grid*9 && card.image.y > grid*1 && card.image.y < grid*-1){
         //     //console.log("hit" + yourHP)
         //     yourHP -= 1
         //   }
         // })
         gotrue = "false"
       }else{
         yourHP -= 1
         wheres.forEach(where => {
           where.image.hide()
         })
         where0.image.hide()
         cards.forEach(card => {
           if(card.name == touch){
           card.TorF = 1
           }
         })
         checkfinish()
         gotrue = "false"
       }
      }
    })
  }
})
