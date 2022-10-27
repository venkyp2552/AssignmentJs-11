//There few methods are there for flatting the array

let ar=[ 1, 2, [ 3, 4, [ 5 ] ] ]

//concat and apply method

let newArray=[].concat.apply([],ar)
console.log(newArray)

let newArray1=[].concat(...ar)
console.log(newArray1)

let flatArray = ar.reduce((acc, curVal) => {
    return acc.concat(curVal)
}, []);

console.log(flatArray.flat(2))