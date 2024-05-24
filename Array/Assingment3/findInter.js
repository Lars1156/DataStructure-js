function findInter(arr1,arr2){
    const intersection = [];
    for(let i = 0; i<arr1.length ; i++){
        const eleement = arr[i];
        if(arr2.includes(eleement)&& !intersection.includes(eleement)){
            intersection.push(eleement);

        }
    }
    return intersection;
}

const arr1 =[1,2,3,4,6];
const arr2 = [2,4,5,6,7];
const intersection =findInter(arr1,arr2);
console.log(intersection);