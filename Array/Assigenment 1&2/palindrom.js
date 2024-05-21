

function isPalindrome(str){
    let revrse = '';
    for(let i = 0;i<str.length;i++){
        revrse = str[i] + revrse;
    }
    if(str== revrse){
        return true;
    }
    return false
}

console.log(str + "is plaindrom");