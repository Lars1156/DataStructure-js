const array = [2,7,11,15];
const targetSum = 9;
const result = twoSum(array , targetSum);

function twoSum( A ,x){
    for(let i = 0 ; i<A.length; i++){
        const complement = x- A[i];

        for(let j= i+1;j<A.length ;j++){
            if(A[j]== complement){
                return[i,j];
            }
        }
    }
    return null;
}
if (result){
    console.log("Two elements that sum to", targetSum , "are: ", array[result[0]], "and:" ,array[result[1]]);
}else
{
    console.log("Two elements that sum to ", targetSum);
}