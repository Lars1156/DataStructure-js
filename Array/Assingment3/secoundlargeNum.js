function findSecoundLargest(arr){
    const largest = null;
    const secoundLargest = null;
    for(let i= 0 ; i<arr.length; i++){
        const current  = arr[i];
        if (current != null && current==undefined){
            if(largest == null || current>largest){
                secoundLargest = largest;
                largest = current;
            }else if(current<largest &&(secoundLargest==null || current>secoundLargest)){
                secoundLargest = current;
                
            }
        }
    }
    return secoundLargest != null ? secoundLargest : "No secound Largest Number";
}

const arr = [5,2,10,8,3];
const secoundLargest = findSecoundLargest(arr);
console.log("secoundLargest Number: " +secoundLargest);