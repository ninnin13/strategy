//配置
var choicing = 0
var upcard = 180
var upcard2
//ホーム
var walksplite = 0
// var walking= 0
var walkData
var walkData2
var Tkeepmath2
var Tkeepmath3
//今の状況
var turnnumber
//チュートリアル
var gameStatus2
var DSfirst
var Textinwhat
var DSmode = "none"
var textnumber = 0
var textsign
var indid
var duringtutorial = 0
//技
var STtechnique = 0
var TCnumber
var TCcX
var TCcY
var TCstopper = 0
var touchOK = 0
var touchstand = 0
var YTchoice = 0
var NOx
var NOy
//死んで後の効果
var cardkindin = 0
//アイテム
var itemupcard
var itemupcard2
var choicingitem = 0
var choiceitem = 0
var choiceitem2 = 0
var itemin
var itemname
var showitemlimit
//ログ
var Gin
//????
var rightstand = 0
var leftstand = 0
var startTurn = 0
var turn = "my"
var battling = 0
var backNumber = 0
var backNumber2 = 0
//自・相のHP
var myHP
var yourHP
//
var nextturn = 0
//ゲームの状況
var gameStatus = "start"
//デッキ
var allcost = 0
var Yallcost = 0
var limitcost = 40
var pushstopper = 0
var clonenumber = 0
var deckcard = 0
var deckname = 0
var newkind
var Ydeckout = 0
var craftnumber = 1
var Downnow2 = 0
var DetailsTime
var mode = "ノーマル"
var Downnow3 = 0
var statusname
var statusrange
var statustype
var statusgotype
var statusTC
var statusSP1
var statusSP2
var statusSP3
var statuscost
var soloitemlist
//消す速度
var hidespeed = 1.5
var hidespeed2 = 5
//相手の空判定
var Ydirection
var check
var dcrease
var Ab
//一時保存用
var mathcheck
var mathcheck2
var keepword
var keepword2
var keepmath3
var keepmath4
var keepmath5
var keepnumber
//????
var choiceCheck = 0
var undeadKingimage = 0
var totalcard = 0
var totalcard2 = 3
var pullcard = 0
var namestand
//ステータス（バトル時）
var viewStatus = 0
//カード基準(編成時)
var IFOpointx = 0
var OTOpointx = 0
//
var putcard
var kingchange = 0
var cardsize = 170
var costimage = 0
var keepword
var grid = 30
var cardNumber = 1
var cardNumber2 = 1
var cardsetx
var cardsety
var choicestand = 1
var downX
var downY
//カードを消すため
//進めない方向
var direction
//相手のカードの初期位置
var yourdownX
var yourdownY
//カード位置
var Wcardtype
var WYTData
//????
var high = 100
var turnchange = "true"
var whatcard = 0
//動かすカード
var touchX
var touchY
var touchplus
//カードの進み方
var cardtype = "normal"
var gardgo
var several
//
var choicestand2
//王の作成(未実装)
var kingsize = 0.5
var battleundeadking = new Image({
url: "./image/king/spector.png",
 width: 400*kingsize,
 height: 400*kingsize,
})
var battleearthking =  new Image({
url: "./image/king/esm.png",
 width: 270*kingsize,
 height: 440*kingsize,
})
var battlefireking =  new Image({
url: "./image/king/fire.png",
 width: 330*kingsize,
 height: 330*kingsize,
})
var battlewaterking =  new Image({
url: "./image/king/waterm.png",
 width: 340*kingsize,
 height: 340*kingsize,
})
var battleairking =  new Image({
url: "./image/king/airm.png",
 width: 340*kingsize,
 height: 490*kingsize,
})
battleundeadking.x = grid*35
battleearthking.x = grid*35
battlewaterking.x = grid*35
battlefireking.x = grid*35
battleairking.x = grid*35
battleundeadking.y = 0 + high
battleairking.y = -20 + high
battlewaterking.y = 20 + high
battlefireking.y = 20 + high
battleearthking.y = 0 + high
battleundeadking.hide()
battleearthking.hide()
battlewaterking.hide()
battlefireking.hide()
battleairking.hide()
var kingname = battleundeadking
//音楽用
var startmusic = 1
var battleuse
var homeuse
var musicwhat = 0
var musictype
var musicnumber = 0
//地面の属性
var typeplus
var keepmath
var keepmath2
var Ytypeplus
var Ykeepmath
var Ykeepmath2
//カード移動用
var listname
var gocardtime = "false"
var gotrue = "false"
var redX
var redY
var goNumber
var checkmate
var Ycheckmate
var can
//相手移動用
var choicecardnumber
var goXYstart
var goXY
var goX
var goY
//技用
var techniquetext
var TS = 0
var choiced = 0
var TCcheckmate
var plusmoveX
var plusmoveY
//カード重なるの防止
var clear
//相手のターン終了タイミング
var Ygotime = 0
//連打不可にするため
var Downnow = 0
var textstop = 0
var nextstop = 0
var downMouse
var hidestop = 0
var Downnow4 = 0
every(1, "seconds", () => {
  if(!(downMouse == 0)){
  downMouse = 0
  }
  // if(!(textstop == 0)){
  //   ////console.log("元に戻した")
  //  textstop = 0
  // }
  if(TCstopper == 1){
    TCstopper = 0
  }
  if(!(turnchange == "true")){
  turnchange = "true"
  }
  if(whatcard == 1){
    whatcard = 0
  }
})
every(0.5, "seconds", () => {
  if(hidestop = 1){
    hidestop = 0
  }
})
//操作回数制限など
var showcardlimit
