function countFrequency(arr){
    const frequency = {};
    for(let i= 0 ; i<arr.length ; i++){
        const eleement = arr[i];
        if(frequency[eleement]){
            frequency[eleement]++
        }else{
            frequency[eleement ] = 1;
        }
    }
    return frequency;
}
const arr=[1,2,2,1,1,4,5,5];
const frequency = countFrequency(arr);
console.log(frequency);