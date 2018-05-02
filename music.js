//バトルの音楽(0~10)
  var music0 = {
     music: new Sound({
       url: "./bgm/battle.mp3",
       loop: false,
       speed: "normal",
       volume: 0.3
     }),
     long: 111,
     type: "battle"
  }
  var music1 = {
     music: new Sound({
       url: "./bgm/battle2.mp3",
       loop: false,
       speed: "normal",
       volume: 0.3
     }),
     long: 127,
     type: "battle"
  }
  var music2 = {
     music: new Sound({
       url: "./bgm/battle3.mp3",
       loop: false,
       speed: "normal",
       volume: 0.3
     }),
     long: 107,
     type: "battle"
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
   long: 46,
   type: "home"
}
var home1 = {
   music: new Sound({
     url: "./bgm/home2.mp3",
     loop: false,
     speed: "normal",
     volume: 0.3
   }),
   long: 54,
   type: "home"
}
var home2 = {
   music: new Sound({
     url: "./bgm/home3.mp3",
     loop: false,
     speed: "normal",
     volume: 0.3
   }),
   long: 121,
   type: "home"
}
homeuse = 3
function STM(numberchoice,Mn){
  musicwhat = musicname[numberchoice]
  musicname[numberchoice].music.startPlaying()
  startmusic = 0
  musicnumber += 1
  after(musicname[numberchoice].long, "seconds", () => {
    if(Mn == musicnumber){
     startmusic = 1
    }
  })
}


  forever(() => {
    if(startmusic == 1){
      if(musictype == "battle"){
        STM(random(0,battleuse-1),musicnumber+1)
      }
      if(musictype == "home"){
        STM(random(battleuse,battleuse+homeuse-1),musicnumber+1)
      }
    }
  })
