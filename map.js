// creates a new array by performing some operations on each array element.
let a = [5, 7, 9, 11]

a.map((value, index, array) => {
    console.log(value, index, array)
   return(value)
})


let b = [5, 7, 9, 11, 13]

let x = b.map((value) => {
    
   return(value*4)
})
console.log(x)