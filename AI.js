





//敵の進む場所
function YcardDLT() {
  range(0,wherecan.length).forEach(i => {
    wherecan.remove(wherecan[0])
  })
  range(0,Youtdirection.length).forEach(i => {
    ////console.log(Youtdirection[0])
    Youtdirection.remove(Youtdirection[0])
  })
  range(0,Ydelatelist.length).forEach(i => {
    ////console.log(Ydelatelist[0])
    Ydelatelist.remove(Ydelatelist[0])
  })
  range(0,fastwherecan.length).forEach(i => {
    ////console.log(fastwherecan[0])
    fastwherecan.remove(fastwherecan[0])
  })
  ////console.log(Ydelatelist)
}
function Ycardput(Ycardtype,Ycardgo){
  if(Ycardtype == "normal"){
    range(1,Ycardgo+1+Ytypeplus).forEach(i => {
     wherecan.push(1*i)
     wherecan.push(0)
     wherecan.push(-1*i)
     wherecan.push(0)
     wherecan.push(0)
     wherecan.push(1*i)
     wherecan.push(0)
     wherecan.push(-1*i)
   })
 }
 if(Ycardtype == "unique"){
   range(1,Ycardgo+1+Ytypeplus).forEach(i => {
    wherecan.push(1*i)
    wherecan.push(1*i)
    wherecan.push(1*i)
    wherecan.push(-1*i)
    wherecan.push(-1*i)
    wherecan.push(1*i)
    wherecan.push(-1*i)
    wherecan.push(-1*i)
  })
 }
 if(Ycardtype == "unique2"){
   several = 1
   keepmath3 = Ycardgo+Ytypeplus
   // range(1,cardgo+1+typeplus).forEach(i => {
    range(-1*keepmath3,keepmath3+1).forEach(j => {
     range(-1*keepmath3,keepmath3+1).forEach(k => {
      oddOrEven(several)
      if(oddEven == "even"){
       wherecan.push(k - keepmath3)
       wherecan.push(j - keepmath3)
      }
      several += 1
    })
   })
 }
  if(Ycardtype == "power"){
    wherecan.push(1)
    wherecan.push(0)
    wherecan.push(-1)
    wherecan.push(0)
    wherecan.push(0)
    wherecan.push(1)
    range(1,Ycardgo+1+Ytypeplus).forEach(i => {
      wherecan.push(0)
      wherecan.push(-1*i)
   })
   }
   if(Ycardtype == "guard"){
     wherecan.push(0)
     wherecan.push(-1)
     range(1,Ycardgo+1+Ytypeplus).forEach(i => {
       wherecan.push(1)
       wherecan.push(0)
       wherecan.push(-1)
       wherecan.push(0)
       wherecan.push(0)
       wherecan.push(1*i)
    })
    }
   if(Ycardtype == "jump"){
     range(1,Ycardgo+1+Ytypeplus).forEach(i => {
      oddOrEven(i)
      if(oddEven == "odd"){
        range(0,2*i).forEach(j => {
         wherecan.push(i)
         wherecan.push(i-j)
        })
        range(0,2*i).forEach(j => {
         wherecan.push(-i)
         wherecan.push(-i+j)
        })
        range(0,2*i).forEach(j => {
         wherecan.push(i-j)
         wherecan.push(-i)
        })
        range(0,2*i).forEach(j => {
         wherecan.push(-i+j)
         wherecan.push(i)
        })
     }else{

     }
     })
   }

}
// function Ycardout(Ycardtype,Ycardgo){
//       if(Ycardtype == "normal"){
//       range(1,Ycardgo+1+Ytypeplus).forEach(i => {
//        wherecan.remove(1*i)
//        wherecan.remove(0)
//        wherecan.remove(-1*i)
//        wherecan.remove(0)
//        wherecan.remove(0)
//        wherecan.remove(1*i)
//        wherecan.remove(0)
//        wherecan.remove(-1*i)
//      })
//    }
//    if(Ycardtype == "unique"){
//      range(1,Ycardgo+1+Ytypeplus).forEach(i => {
//       wherecan.remove(1*i)
//       wherecan.remove(1*i)
//       wherecan.remove(1*i)
//       wherecan.remove(-1*i)
//       wherecan.remove(-1*i)
//       wherecan.remove(1*i)
//       wherecan.remove(-1*i)
//       wherecan.remove(-1*i)
//     })
//   }
//     if(Ycardtype == "power"){
//       wherecan.remove(1*i)
//       wherecan.remove(0)
//       wherecan.remove(-1*i)
//       wherecan.remove(0)
//       wherecan.remove(0)
//       wherecan.remove(1*i)
//       range(1,Ycardgo+1+Ytypeplus).forEach(i => {
//         wherecan.remove(0)
//         wherecan.remove(-1*i)
//      })
//      }
// }
// function Ycardput2(Ycardtype,Ycardgo){
//   Ab = 0
//   if(Ycardtype == "normal"){
//     range(1,Ycardgo+1+Ytypeplus).forEach(i => {
//      wherecan.push(0)
//      wherecan.push(-1*i)
//    })
//  }
//  if(Ycardtype == "unique"){
//    range(1,Ycardgo+1+Ytypeplus).forEach(i => {
//     wherecan.push(1*i)
//     wherecan.push(-1*i)
//     wherecan.push(-1*i)
//     wherecan.push(-1*i)
//   })
// }
// if(Ycardtype == "unique2"){
//   several = 1
//   keepmath3 = Ycardgo+Ytypeplus
//   // range(1,cardgo+1+typeplus).forEach(i => {
//    range(-1*keepmath3,keepmath3+1).forEach(j => {
//     range(-1*keepmath3,keepmath3+1).forEach(k => {
//      oddOrEven(several)
//      if(oddEven == "even"){
//       wherecan.push(k)
//       wherecan.push(j)
//      }
//      several += 1
//    })
//   })
// }
// if(Ycardtype == "power"){
//   wherecan.push(1)
//   wherecan.push(0)
//   wherecan.push(-1)
//   wherecan.push(0)
//   range(1,Ycardgo+1+Ytypeplus).forEach(i => {
//     wherecan.push(0)
//     wherecan.push(-1*i)
//  })
//  }
//  if(Ycardtype == "jump"){
//    range(1,Ycardgo+1+Ytypeplus).forEach(i => {
//     oddOrEven(i)
//     if(oddEven == "odd"){
//       range(0,i).forEach(j => {
//        wherecan.push(i)
//        wherecan.push(-j)
//       })
//       range(0,i).forEach(j => {
//        wherecan.push(-i)
//        wherecan.push(-i+j)
//       })
//       range(0,2*i).forEach(j => {
//        wherecan.push(i-j)
//        wherecan.push(-i)
//       })
//    }else{
//
//    }
//    })
//  }
// }
// function Ycardout2(Ycardtype,Ycardgo){
//   if(Ycardtype == "normal"){
//     range(1,Ycardgo+1+Ytypeplus).forEach(i => {
//      wherecan.remove(0)
//      wherecan.remove(-1*i)
//    })
//  }
//  if(Ycardtype == "unique"){
//    range(1,Ycardgo+1+Ytypeplus).forEach(i => {
//     wherecan.remove(1*i)
//     wherecan.remove(-1*i)
//     wherecan.remove(-1*i)
//     wherecan.remove(-1*i)
//   })
// }
// if(Ycardtype == "power"){
//   wherecan.remove(1*i)
//   wherecan.remove(0)
//   wherecan.remove(-1*i)
//   wherecan.remove(0)
//   range(1,Ycardgo+1+Ytypeplus).forEach(i => {
//     wherecan.remove(0)
//     wherecan.remove(-1*i)
//  })
//  }
// }
function Ycardput3(Ycardtype,Ycardgo){
  if(Ycardtype == "normal"){
    range(1,Ycardgo+1+Ytypeplus).forEach(i => {
     wherecan.push(1*i)
     wherecan.push(0)
     wherecan.push(-1*i)
     wherecan.push(0)
   })
 }
 if(Ycardtype == "unique"){
   range(1,Ycardgo+1+Ytypeplus).forEach(i => {
    wherecan.push(1*i)
    wherecan.push(1*i)
    wherecan.push(-1*i)
    wherecan.push(1*i)
  })
}
if(Ycardtype == "unique2"){
  several = 1
  keepmath3 = Ycardgo+Ytypeplus
  // range(1,cardgo+1+typeplus).forEach(i => {
   range(-1*keepmath3,keepmath3+1).forEach(j => {
    range(-1*keepmath3,keepmath3+1).forEach(k => {
     oddOrEven(several)
     if(oddEven == "even"){
      wherecan.push(k - keepmath3)
      wherecan.push(j - keepmath3)
     }
     several += 1
   })
  })
}
if(Ycardtype == "power"){
  wherecan.push(1*i)
  wherecan.push(0)
  wherecan.push(-1*i)
  wherecan.push(0)
}
if(Ycardtype == "guard"){
  wherecan.push(0)
  wherecan.push(-1)
  range(1,Ycardgo+1+Ytypeplus).forEach(i => {
    wherecan.push(1*i)
    wherecan.push(0*i)
    wherecan.push(-1*i)
    wherecan.push(0*i)
    wherecan.push(0*i)
    wherecan.push(1*i)
 })
 }
if(Ycardtype == "jump"){
  range(1,Ycardgo+1+Ytypeplus).forEach(i => {
   oddOrEven(i)
   if(oddEven == "odd"){
     range(0,2*i).forEach(j => {
      wherecan.push(i)
      wherecan.push(i-j)
     })
     range(0,2*i).forEach(j => {
      wherecan.push(-i)
      wherecan.push(-i+j)
     })
     range(0,2*i).forEach(j => {
      wherecan.push(i-j)
      wherecan.push(-i)
     })
     range(0,2*i).forEach(j => {
      wherecan.push(-i+j)
      wherecan.push(i)
     })
  }else{

  }
  })
}
}
// function Ycardout3(Ycardtype,Ycardgo){
//   if(Ycardtype == "normal"){
//     range(1,Ycardgo+1+Ytypeplus).forEach(i => {
//      wherecan.remove(1*i)
//      wherecan.remove(0)
//      wherecan.remove(-1*i)
//      wherecan.remove(0)
//    })
//  }
//  if(Ycardtype == "unique"){
//    range(1,Ycardgo+1+Ytypeplus).forEach(i => {
//     wherecan.remove(1*i)
//     wherecan.remove(1*i)
//     wherecan.remove(-1*i)
//     wherecan.remove(1*i)
//   })
// }
// if(Ycardtype == "power"){
//   wherecan.remove(1*i)
//   wherecan.remove(0)
//   wherecan.remove(-1*i)
//   wherecan.remove(0)
// }
// }
