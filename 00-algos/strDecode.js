// let str = '10'
// console.log(isNaN(str))

function strDecode(str) {
    let result = '';
    let currentNum = ''
    let currentChar = ''
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            currentChar = str[i]
        }
        else {
            let temp = i; // temp stores current value of i
            while (!isNaN(str[i])){
                currentNum += str[i];
                // console.log('current number is ' + currentNum)
                i++
            }
            i = temp; //reset i to its previous value
            result += currentChar.repeat(currentNum)
            currentNum = ''
        }
    }
    return result;
}


console.log(strDecode("a2b4c12d1")) //"aabbbbccccccccccccd"