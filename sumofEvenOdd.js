//Taking input as an array format

UserInput=[1,2,3,4,5,6,7,8,9,10,11,17,19,21,20,33,37]
//Even Number Code;

const EvenNumberArray=UserInput.filter((item)=>item%2==0);
const sumEvenNumberArray=EvenNumberArray.reduce((sum,num)=>sum+num)
console.log(sumEvenNumberArray)
//Odd Number Code:

const OddNumberArray=UserInput.filter((item)=>item%2!==0);
const sumOddNumberArray=OddNumberArray.reduce((sum,num)=>sum+num)
console.log(sumOddNumberArray)

//Diiference:
const Diff=sumEvenNumberArray-sumOddNumberArray

//Avg
const sumArr=UserInput.reduce((sum,num)=>sum+num,0)
const sumArrLength=UserInput.length
const AvgOfArr=sumArr/sumArrLength
console.log(AvgOfArr.toFixed(2))

//GCD For Even Numbers Code Using Ecludin Method:
const lengthEvenArr=EvenNumberArray.length

// Function to return gcd of a and b
function gcd(a, b) {
    if (a == 0)
        return b;
    return gcd(b % a, a);
}
let arr = EvenNumberArray;
let n = lengthEvenArr
// Function to find gcd of array
// of numbers
function findGCD(arr, n) {
    let result = EvenNumberArray[0];
    for (let i = 1; i < n; i++) {
        result = gcd(EvenNumberArray[i], result);

        if (result == 1) {
            return 1;
        }
    }
    return result;
}
let rs=findGCD(arr, n) 
console.log(rs)


//GCD For Odd Numbers Code Using Ecludin Method:
const lengthOddArr=OddNumberArray.length

// Function to return gcd of a and b
function gcd1(a, b) {
    if (a == 0)
        return b;
    return gcd1(b % a, a);
}
let arrO = OddNumberArray;
let n1 = lengthOddArr
// Function to find gcd of array
// of numbers
function findGCD1(arr, n) {
    let result = OddNumberArray[0];
    for (let i = 1; i < n1; i++) {
        result = gcd1(OddNumberArray[i], result);

        if (result == 1) {
            return 1;
        }
    }
    return result;
}
let rs1=findGCD1(arrO, n1) 
console.log(rs1)
