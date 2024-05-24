function moveZero(arr){
    let count =  0;
    for(let i=0 ; i<arr.length;i++){
        if(arr[i]==0){
            arr[count ] == arr[i];     
       }
    }
    for(  let i = count; i < arr.length ; i++){
        arr[i] = 0;

    }
    return arr;
}

const arr = [0,0,0,0,123,4,5,6];
const modifyArr = moveZero(arr);
console.log(modifyArr);