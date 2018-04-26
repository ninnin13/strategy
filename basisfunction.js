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
var Japaneselist = ["陸","海","空","火","アンデット","ノーマル","クロス","ステップ","突進","ジャンプ","なし","火の玉","陸の秘石","海の秘石","空の秘石","火の秘石","屍の秘石","椅子攻撃"]
var Englishlist = ["land","sea","sky","fire","undead","normal","unique","unique2","power","jump","nothing","fireball","landstone","seastone","skystone","firestone","undeadstone","chairattack"]
function FromEnglishtoJapanese(Originaltext) {
   // range(0,translation.length).forEach(i => {
   //   translation.remove(translation[i])
   // })
   range(0,Englishlist.length).forEach(i => {
     if(Englishlist[i] == Originaltext){
       translationResult = Japaneselist[i]
     }
   })
}
function FromJapanesetoEnglish(Originaltext) {
   // range(0,translation.length).forEach(i => {
   //   translation.remove(translation[i])
   // })
   range(0,Japaneselist.length).forEach(i => {
     if(Japaneselist[i] == Originaltext){
       translationResult = Englishlist[i]
     }
   })
}
var splitList = []
var keepSplitCalculation
function splitByACertainNumbeOofCharacters(splitWord) {
  range(0,splitList.length).forEach(i => {
    splitList.remove(splitList[0])
  })
   range(0,floor(splitWord.length/11)+1).forEach(i => {
     keepSplitCalculation = i+1
     splitList.push(splitWord.substring(i*11,keepSplitCalculation*11))
   })
   range(0,3).forEach(i => {
     splitList.push("no")
   })
   //console.log(splitList)
}
