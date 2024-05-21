const number = [5,4,3,2,1];
const reverseNumber = reverseArray(number);
function reverseArray(myArray) {
    const reverseArray = [];
    for(let i= myArray.length -1; i>=0; i--){
        reverseArray.push(myArray[i]);
    }
    return reverseArray;
}