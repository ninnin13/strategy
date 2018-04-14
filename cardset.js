var landstone = {
  image: new Image({
    url: "./image/card/landstone.png",
    width: cardsize*0.8,
    height: cardsize*0.8,
  }),
  name: "landstone",
  type: "attributechange",
  attribute: "soil",
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
  attribute: "water",
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
  gotype: "normal",
  goblock: 3,
  property: "soil",
  technique: "nothing",
  effect: "nothing",
  plusitem: "nothing",
  what: "card",
  cost: 2
}
var kabuto = {
  image: new Image({
    url: "./image/card/kabuto.png",
    width: cardsize,
    height: cardsize,
  }),
  name: "kabuto",
  gotype: "normal",
  goblock: 1,
  property: "soil",
  technique: "nothing",
  effect: "nothing",
  plusitem: "nothing",
  what: "card",
  cost: 1
}
var penguin = {
  image: new Image({
    url: "./image/card/penguin.png",
    width: cardsize,
    height: cardsize,
  }),
  name: "penguin",
  gotype: "unique",
  goblock: 1,
  property: "soil",
  technique: "nothing",
  effect: "nothing",
  plusitem: "nothing",
  what: "card",
  cost: 1
}
var penking = {
  image: new Image({
    url: "./image/card/penking.png",
    width: cardsize,
    height: cardsize,
  }),
  name: "penking",
  gotype: "unique",
  goblock: 3,
  property: "soil",
  technique: "nothing",
  effect: penguin,
  plusitem: "nothing",
  what: "card",
  cost: 6
}
var sai = {
  image: new Image({
    url: "./image/card/sai.png",
    width: cardsize,
    height: cardsize,
  }),
  name: "sai",
  gotype: "unique",
  goblock: 2,
  property: "soil",
  technique: "nothing",
  effect: "nothing",
  plusitem: "nothing",
  what: "card",
  cost: 2
}
var monkey = {
  image: new Image({
    url: "./image/card/monkey.png",
    width: cardsize,
    height: cardsize,
  }),
  name: "monkey",
  gotype: "power",
  goblock: 4,
  property: "soil",
  technique: "nothing",
  effect: "nothing",
  plusitem: "nothing",
  what: "card",
  cost: 3
}
var shark = {
  image: new Image({
    url: "./image/card/shark.png",
    width: cardsize,
    height: cardsize,
  }),
  name: "shark",
  gotype: "power",
  goblock: 4,
  property: "water",
  technique: "nothing",
  effect: "nothing",
  plusitem: "nothing",
  what: "card",
  cost: 3
}
var angora = {
  image: new Image({
    url: "./image/card/angora.png",
    width: cardsize,
    height: cardsize,
  }),
  name: "angora",
  gotype: "normal",
  goblock: 2,
  property: "water",
  technique: "nothing",
  effect: "nothing",
  plusitem: waterstone,
  what: "card",
  cost: 2
}
var jyassyu = {
  image: new Image({
    url: "./image/card/jyassyu.png",
    width: cardsize,
    height: cardsize,
  }),
  name: "jyassyu",
  gotype: "jump",
  goblock: 2,
  property: "water",
  technique: "nothing",
  effect: "nothing",
  plusitem: "nothing",
  what: "card",
  cost: 1
}
var skymachine = {
  image: new Image({
    url: "./image/card/skymachine.png",
    width: cardsize,
    height: cardsize,
  }),
  name: "skymachine",
  gotype: "normal",
  goblock: 2,
  property: "sky",
  technique: "nothing",
  effect: "nothing",
  plusitem: "nothing",
  what: "card",
  cost: 2
}
var eariaru = {
  image: new Image({
    url: "./image/card/eariaru.png",
    width: cardsize,
    height: cardsize,
  }),
  name: "eariaru",
  gotype: "unique2",
  goblock: 2,
  property: "sky",
  technique: "nothing",
  effect: "nothing",
  plusitem: "nothing",
  what: "card",
  cost: 2
}
var firemagician = {
  image: new Image({
    url: "./image/card/firemagician.png",
    width: cardsize,
    height: cardsize,
  }),
  name: "firemagician",
  gotype: "normal",
  goblock: 1,
  property: "fire",
  technique: "fireball",
  effect: "nothing",
  plusitem: "nothing",
  what: "card",
  cost: 1
}
var skelton = {
  image: new Image({
    url: "./image/card/skelton.png",
    width: cardsize,
    height: cardsize,
  }),
  name: "skelton",
  gotype: "normal",
  goblock: 2,
  property: "undead",
  technique: "nothing",
  effect: "nothing",
  plusitem: "nothing",
  what: "card",
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
      cardup(cardsetting[i],cardsetting[i].name)
    })
    range(0,itemsetting.length).forEach(i => {
      cardout(itemsetting[i])
      cardup(itemsetting[i],itemsetting[i].name)
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
