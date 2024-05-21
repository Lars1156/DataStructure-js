const arr = [1, 2, 3, 0, 1, 4];
const missingNumbers = findMissingNumber(arr);

function findMissingNumber(arr){
    const n  = arr.length;
    const freqArr = new Array(n).fill(0);
    for(let i = 0; i< arr.length; i++){
        if (arr[i]>= 0 && arr[i]<=n){
            freqArr[arr[i]]++;
        }
    }

    const missingNumbers = [];
    for(let i =0; i<n; i++){
        if(freqArr [i]===0){
            missingNumbers.push(i);
        }
    }
    return missingNumbers;
}
console.log("Missing numbers:", missingNumbers);