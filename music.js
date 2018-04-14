//バトルの音楽(0~10)
  var music0 = {
     music: new Sound({
       url: "./bgm/battle.mp3",
       loop: false,
       speed: "normal",
       volume: 0.3
     }),
     long: 110
  }
  var music1 = {
     music: new Sound({
       url: "./bgm/battle2.mp3",
       loop: false,
       speed: "normal",
       volume: 0.3
     }),
     long: 127
  }
  var music2 = {
     music: new Sound({
       url: "./bgm/battle3.mp3",
       loop: false,
       speed: "normal",
       volume: 0.3
     }),
     long: 107
  }
battleuse = 3
//homeの音楽
var home0 = {
   music: new Sound({
     url: "./bgm/home1.mp3",
     loop: false,
     speed: "normal",
     volume: 0.3
   }),
   long: 46
}
var home1 = {
   music: new Sound({
     url: "./bgm/home2.mp3",
     loop: false,
     speed: "normal",
     volume: 0.3
   }),
   long: 54
}
var home2 = {
   music: new Sound({
     url: "./bgm/home3.mp3",
     loop: false,
     speed: "normal",
     volume: 0.3
   }),
   long: 121
}
homeuse = 3
function STM(numberchoice){
  musicwhat = musicname[numberchoice]
  musicname[numberchoice].music.startPlaying()
  startmusic = 0
  after(musicname[numberchoice].long, "seconds", () => {
     startmusic = 1
  })
}


  forever(() => {
    if(startmusic == 1){
      if(battlemusic == 1){
        STM(random(0,battleuse-1))
      }
      if(homemusic == 1){
        STM(random(battleuse,battleuse+homeuse-1))
      }
    }
  })
