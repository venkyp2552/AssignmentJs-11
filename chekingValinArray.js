// let ar1=[ 1, 2, 3, 4, 5 ]
// let ar2=[ 4, 6, 1, 8, 2 ]

// const ar1Value=ar1.includes(4);
// const ar2Value=ar2.includes(4)
// if(ar1Value && ar2Value){
//     console.log("Yes 4 is there in boh arrays")
// }else{

// }

function CheckingArrayValue(ar1,ar2,n){
    const ar1Value=ar1.includes(n);
    const ar2Value=ar2.includes(n)
    if(ar1Value && ar2Value){
        console.log(`Yes ${n} is there in both arrays`)
    }
    else if(ar1Value){
        console.log(`Yes ${n} is there in array1`)
    }
    else if(ar2Value){
        console.log(`Yes ${n} is there in array2`)
    }
    else{
        console.log(`No ${n} is not there in any array`)
    }
}
CheckingArrayValue([1, 2, 3, 4, 5],[ 4, 6, 1, 8, 2 ],4)
CheckingArrayValue([ 1, 2, 3, 6, 5 ],[ 4, 6, 1, 8, 2 ],4)
CheckingArrayValue([ 1, 2, 3, 4, 5 ],[ 5, 6, 1, 8, 2 ],4)

