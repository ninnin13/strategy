//奇数か偶数か
var calculation
var calculation2
var oddEven
function oddOrEven(number) {
   calculation = number/2
   if(calculation == ceiling(calculation)){
     oddEven = "odd"
   }else{
     oddEven = "even"
   }
}
//画像の大きさを変える
function imagesize(name,number) {
  name.height = number
  name.width = number
}
//英語を日本語にする
var translationResult
var translation = []
var Japaneselist = ["陸","海","空","火","アンデット","ノーマル","クロス","ステップ","突進","ジャンプ"]
var Englishlist = ["land","sea","sky","fire","undead","normal","unique","unique2","power","jump"]
function FromEnglishtoJapanese(Originaltext) {
   range(0,translation.length).forEach(i => {
     translation.remove(translation[i])
   })
   range(0,Englishlist.length).forEach(i => {
     if(Englishlist[i] == Originaltext){
       translationResult = Japaneselist[i]
     }
   })
}
