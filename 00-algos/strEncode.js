

// function strEncode(str){
//     let encodedStr = '';
//     let count = 1;
//     for (let i = 0; i < str.length; i++){
//         if (str[i] === str[i+1]){
//             count += 1;
//         }
//         else {
//             encodedStr += str[i];
//             encodedStr += count;
//             count = 1;
//         }
//     }

//     return encodedStr;
// }

function strEncode(str){
    let strObj = {};
    let result = '';

    if (str.length == 0){
        return null;
    }
    for(let i=0;i<str.length;i++){
        strObj[str[i]]?strObj[str[i]]=strObj[str[i]]+1:strObj[str[i]]=1;
    }

    for(let item in strObj) {
        if (item != " "){
            result +=item;
            result += strObj[item];
        }
    }
    
    return result;
}




console.log(strEncode("aaaab   cccd  dddd")) //a4b1c3d5
console.log(strEncode("abcccddeeeee")) //a1b1c3d2e5
console.log(strEncode(""))
