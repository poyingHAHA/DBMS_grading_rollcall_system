// let arr1 = ['1','2','3','4']
// let arr2 = ['5','6','7','8']

// const dealUpdate = (arr1, arr2)=>{
//   let update=""
//   arr1.forEach((col, idx, arr)=>{
//     if(idx+1==arr.length){
//       update+=`${col}=${arr2[idx]}`
//     }else{
//       update+=`${col}=${arr2[idx]},`
//     }
//   })
//   return update
// }

// let str = `UPDATE TABLE SET ${deal(arr1, arr2)}`
// // console.log(str)

//=====================================================

// class Test{
  
//   static url = 'http://localhost'
  
//   static get test(){
//     return this.url
//   }

//   static set test(test){
//     this.url = test
//   }
// }

// Test.test

// // Test.test = "http://localhost"
// console.log(Test.test)

//=====================================================

const arr = [1,2,3,4,5]
// console.log(arr.join(','))

//==============================
const a = null
console.log(a??'a')
