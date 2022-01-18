function strToWordArr(str) {
    let result = [];
    let word = ""
    for (let i = 0; i <= str.length; i++) {
        if (str[i] !== " " && str[i - 1] == " ") {
            word += str[i]
        }
        else if (str[i] !== " " && i == str.length - 1) {
            word += str[i]
            result.push(word)
        }
        else if (str[i] !== " ") {
            word += str[i]
        }
        else if (str[i] == " ") {
            if (word !== "") {
                result.push(word)
                word = ""
            }
        }
    }
    return result;
}

console.log(strToWordArr("  Welcome    to week    two!!!! o who aa   whatuyp asd   ")) //["Welcome", "to", "week", "two!"]
// console.log(strToWordArr("  Welcome  to week    two!   "))


