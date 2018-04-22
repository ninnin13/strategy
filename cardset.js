//ホームで動くもの
var dog2 = {
  image: new Image({
    url: "./image/card/stand/dog.png",
    width: 100,
    height: 100,
  }),
  name: "dog",
  keep: 0,
  keep2: 0,
  keep3: 0,
  keep4: 0,
  SorH: 0
}
dog2.image.hide()
var kabuto2 = {
  image: new Image({
    url: "./image/card/stand/kabuto.png",
    width: 100,
    height: 100,
  }),
  name: "kabuto",
  keep: 0,
  keep2: 0,
  keep3: 0,
  keep4: 0,
  SorH: 0
}
kabuto2.image.hide()
var penguin2 = {
  image: new Image({
    url: "./image/card/stand/penguin.png",
    width: 100,
    height: 70,
  }),
  name: "penguin",
  keep: 0,
  keep2: 0,
  keep3: 0,
  keep4: 0,
  SorH: 0
}
penguin2.image.hide()
var penking2 = {
  image: new Image({
    url: "./image/card/stand/penking.png",
    width: 100,
    height: 100,
  }),
  name: "penking",
  keep: 0,
  keep2: 0,
  keep3: 0,
  keep4: 0,
  SorH: 0
}
penking2.image.hide()
var sai2 = {
  image: new Image({
    url: "./image/card/stand/sai.png",
    width: 100,
    height: 100,
  }),
  name: "sai",
  keep: 0,
  keep2: 0,
  keep3: 0,
  keep4: 0,
  SorH: 0
}
sai2.image.hide()
var monkey2 = {
  image: new Image({
    url: "./image/card/stand/monkey.png",
    width: 100,
    height: 100,
  }),
  name: "monkey",
  keep: 0,
  keep2: 0,
  keep3: 0,
  keep4: 0,
  SorH: 0
}
monkey2.image.hide()
var shark2 = {
  image: new Image({
    url: "./image/card/stand/shark.png",
    width: 150,
    height: 150,
  }),
  name: "shark",
  keep: 0,
  keep2: 0,
  keep3: 0,
  keep4: 0,
  SorH: 0
}
shark2.image.hide()
var jyassyu2 = {
  image: new Image({
    url: "./image/card/stand/jyassyu.png",
    width: 100,
    height: 100,
  }),
  name: "jyassyu",
  keep: 0,
  keep2: 0,
  keep3: 0,
  keep4: 0,
  SorH: 0
}
jyassyu2.image.hide()
var angora2 = {
  image: new Image({
    url: "./image/card/stand/angora.png",
    width: 100,
    height: 100,
  }),
  name: "angora",
  keep: 0,
  keep2: 0,
  keep3: 0,
  keep4: 0,
  SorH: 0
}
angora2.image.hide()
var skymachine2 = {
  image: new Image({
    url: "./image/card/stand/skymachine.png",
    width: 100,
    height: 100,
  }),
  name: "skymachine",
  keep: 0,
  keep2: 0,
  keep3: 0,
  keep4: 0,
  SorH: 0
}
skymachine2.image.hide()
var eariaru2 = {
  image: new Image({
    url: "./image/card/stand/eariaru.png",
    width: 100,
    height: 100,
  }),
  name: "eariaru",
  keep: 0,
  keep2: 0,
  keep3: 0,
  keep4: 0,
  SorH: 0
}
eariaru2.image.hide()
var firemagician2 = {
  image: new Image({
    url: "./image/card/stand/firemagician.png",
    width: 100,
    height: 100,
  }),
  name: "firemagician",
  keep: 0,
  keep2: 0,
  keep3: 0,
  keep4: 0,
  SorH: 0
}
firemagician2.image.hide()
var skelton2 = {
  image: new Image({
    url: "./image/card/stand/skelton.png",
    width: 100,
    height: 100,
  }),
  name: "skelton",
  keep: 0,
  keep2: 0,
  keep3: 0,
  keep4: 0,
  SorH: 0
}
skelton2.image.hide()
//カード本体
var landstone = {
  image: new Image({
    url: "./image/card/landstone.png",
    width: cardsize*0.8,
    height: cardsize*0.8,
  }),
  name: "landstone",
  type: "attributechange",
  attribute: "land",
  EFname: landeffect,
  what: "item",
  cost: 1
}
var waterstone = {
  image: new Image({
    url: "./image/card/waterstone.png",
    width: cardsize*0.8,
    height: cardsize*0.8,
  }),
  name: "waterstone",
  type: "attributechange",
  attribute: "sea",
  EFname: watereffect,
  what: "item",
  cost: 1
}
var skystone = {
  image: new Image({
    url: "./image/card/skystone.png",
    width: cardsize*0.8,
    height: cardsize*0.8,
  }),
  name: "skystone",
  type: "attributechange",
  attribute: "sky",
  EFname: skyeffect,
  what: "item",
  cost: 2
}
var firestone = {
  image: new Image({
    url: "./image/card/firestone.png",
    width: cardsize*0.8,
    height: cardsize*0.8,
  }),
  name: "firestone",
  type: "attributechange",
  attribute: "fire",
  EFname: fireeffect,
  what: "item",
  cost: 1
}
var undeadstone = {
  image: new Image({
    url: "./image/card/undeadstone.png",
    width: cardsize*0.8,
    height: cardsize*0.8,
  }),
  name: "undeadstone",
  type: "attributechange",
  attribute: "undead",
  EFname: undeadeffect,
  what: "item",
  cost: 1
}
var dog = {
  image: new Image({
    url: "./image/card/dog.png",
    width: cardsize,
    height: cardsize,
  }),
  name: "dog",
  nameingame: "犬",
  gotype: "normal",
  goblock: 3,
  property: "land",
  technique: "nothing",
  effect: "nothing",
  plusitem: "nothing",
  what: "card",
  solo: dog2,
  cost: 2
}
var kabuto = {
  image: new Image({
    url: "./image/card/kabuto.png",
    width: cardsize,
    height: cardsize,
  }),
  name: "kabuto",
  nameingame: "カブトムシ",
  gotype: "normal",
  goblock: 1,
  property: "land",
  technique: "nothing",
  effect: "nothing",
  plusitem: "nothing",
  what: "card",
  solo: kabuto2,
  cost: 1
}
var penguin = {
  image: new Image({
    url: "./image/card/penguin.png",
    width: cardsize,
    height: cardsize,
  }),
  name: "penguin",
  nameingame: "ペンギン剣士",
  gotype: "unique",
  goblock: 1,
  property: "land",
  technique: "nothing",
  effect: "nothing",
  plusitem: "nothing",
  what: "card",
  solo: penguin2,
  cost: 1
}
var penking = {
  image: new Image({
    url: "./image/card/penking.png",
    width: cardsize,
    height: cardsize,
  }),
  name: "penking",
  nameingame: "ペンギン王",
  gotype: "unique",
  goblock: 3,
  property: "land",
  technique: "nothing",
  effect: penguin,
  plusitem: "nothing",
  what: "card",
  solo: penking2,
  cost: 6
}
var sai = {
  image: new Image({
    url: "./image/card/sai.png",
    width: cardsize,
    height: cardsize,
  }),
  name: "sai",
  nameingame: "サイ",
  gotype: "unique",
  goblock: 2,
  property: "land",
  technique: "nothing",
  effect: "nothing",
  plusitem: "nothing",
  what: "card",
  solo: sai2,
  cost: 2
}
var monkey = {
  image: new Image({
    url: "./image/card/monkey.png",
    width: cardsize,
    height: cardsize,
  }),
  name: "monkey",
  nameingame: "サル",
  gotype: "power",
  goblock: 4,
  property: "land",
  technique: "nothing",
  effect: "nothing",
  plusitem: "nothing",
  what: "card",
  solo: monkey2,
  cost: 3
}
var shark = {
  image: new Image({
    url: "./image/card/shark.png",
    width: cardsize,
    height: cardsize,
  }),
  name: "shark",
  nameingame: "サメ",
  gotype: "power",
  goblock: 4,
  property: "sea",
  technique: "nothing",
  effect: "nothing",
  plusitem: "nothing",
  what: "card",
  solo: shark2,
  cost: 3
}
var angora = {
  image: new Image({
    url: "./image/card/angora.png",
    width: cardsize,
    height: cardsize,
  }),
  name: "angora",
  nameingame: "アンゴラー",
  gotype: "normal",
  goblock: 2,
  property: "sea",
  technique: "nothing",
  effect: "nothing",
  plusitem: waterstone,
  what: "card",
  solo: angora2,
  cost: 2
}
var jyassyu = {
  image: new Image({
    url: "./image/card/jyassyu.png",
    width: cardsize,
    height: cardsize,
  }),
  name: "jyassyu",
  nameingame: "ジャッシュ",
  gotype: "jump",
  goblock: 2,
  property: "sea",
  technique: "nothing",
  effect: "nothing",
  plusitem: "nothing",
  what: "card",
  solo: jyassyu2,
  cost: 1
}
var skymachine = {
  image: new Image({
    url: "./image/card/skymachine.png",
    width: cardsize,
    height: cardsize,
  }),
  name: "skymachine",
  nameingame: "浮遊機械",
  gotype: "normal",
  goblock: 2,
  property: "sky",
  technique: "nothing",
  effect: "nothing",
  plusitem: "nothing",
  what: "card",
  solo: skymachine2,
  cost: 2
}
var eariaru = {
  image: new Image({
    url: "./image/card/eariaru.png",
    width: cardsize,
    height: cardsize,
  }),
  name: "eariaru",
  nameingame: "エアリアル",
  gotype: "unique2",
  goblock: 2,
  property: "sky",
  technique: "nothing",
  effect: "nothing",
  plusitem: "nothing",
  what: "card",
  solo: eariaru2,
  cost: 2
}
var firemagician = {
  image: new Image({
    url: "./image/card/firemagician.png",
    width: cardsize,
    height: cardsize,
  }),
  name: "firemagician",
  nameingame: "火の魔法使い",
  gotype: "normal",
  goblock: 1,
  property: "fire",
  technique: "fireball",
  effect: "nothing",
  plusitem: "nothing",
  what: "card",
  solo: firemagician2,
  cost: 1
}
var skelton = {
  image: new Image({
    url: "./image/card/skelton.png",
    width: cardsize,
    height: cardsize,
  }),
  name: "skelton",
  nameingame: "スケルトン",
  gotype: "normal",
  goblock: 2,
  property: "undead",
  technique: "nothing",
  effect: "nothing",
  plusitem: "nothing",
  what: "card",
  solo: skelton2,
  cost: 2
}
dog.image.hide()
kabuto.image.hide()
penguin.image.hide()
penking.image.hide()
sai.image.hide()
monkey.image.hide()
angora.image.hide()
shark.image.hide()
jyassyu.image.hide()
skymachine.image.hide()
eariaru.image.hide()
firemagician.image.hide()
skelton.image.hide()
landstone.image.hide()
waterstone.image.hide()
skystone.image.hide()
firestone.image.hide()
undeadstone.image.hide()

//
ccn = 0
forever(() => {
  if(gameStatus == "change"){
    range(0,cardsetting.length).forEach(i => {
      cardout(cardsetting[i])
      if(DetailsTime == 0){
       cardup(cardsetting[i],cardsetting[i].name)
      }
    })
    range(0,itemsetting.length).forEach(i => {
      cardout(itemsetting[i])
      if(DetailsTime == 0){
       cardup(itemsetting[i],itemsetting[i].name)
      }
    })
    // cardup(dog)
    // cardup(kabuto)
    // cardup(penguin)
    // cardup(sai)
    // cardup(monkey)
    // cardup(firemagician)
    // cardup(shark)
    // cardup(skymachine)
    // cardup(skelton)
  }

})
