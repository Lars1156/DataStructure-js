const arr = [1,2,3,4,6,7,8,9];
const missNumber = findMissingNumber(arr);

function findMissingNumber(arr){
    const n  = arr.lenth +1;
    let expectedSum = 0;
    for(let i = 0; i<n; i++){
        expectedSum += i;
    }

    let actualsSum = 0;
    for (let num of arr){
        actualsSum +=num;
    }

    return expectedSum -actualsSum;

}
console.log(`The Missing Number is: ${missNumber}`);