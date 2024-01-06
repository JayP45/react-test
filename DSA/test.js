// //01 Reverse array and return new array

// let reverseArray = () => {
//     let array = [1, 2, 3, 4, 5]
//     // let newArray = array.map((x,y)=> x.length-1) 
//     // console.log(newArray)

//     for (let i = array.length; i >= 0; i--) {
//         console.log(array[i])
//     }

// }
// reverseArray()

// //02 Remove Duplicates

// let a = [1,2,3,2,2,3,4,4,5]
// let unique = new Set(a)
// console.log([...unique])

// //03 Sort array ascending

// let sortArray = [5,4,3,2,1]
// sortArray.sort()
// //  let ascendingArray=(s)=>{
// //      s.sort()
// //  }
// console.log(sortArray)

// //04 calculate sum of array

// let calculateArray=()=>{
//     let arr = [1,2,3,4,5]
//     let cal = arr.reduce((x,y)=>{
//         return x + y
//     })
//     console.log(cal)
// }
// calculateArray()

//05 duplicate string

let isPrime=()=>{
    let num;
    if(num === 1){
        console.log('it not prime or composite')
    }
    if(num < 0){
        console.log('it cant be negative')
    }
    for(let i=2; i<num;i++){
        if(num % i == 0){
            console.log('it is prime')
        }
    }
    
}

isPrime(1,2,3,4)