//create a function that accepts a string and a number as an input, and the function will return the string rotated by the amount in the number input


function rotateStr(str, num) {
    let newStr = '';

    distance = num % str.length;

    for (let j = str.length - distance; j < str.length; j++) {
        newStr += str[j];
    }

    for (let i = 0; i < str.length - distance; i++) {
        newStr += str[i];
    }
    return newStr;
}


console.log(rotateStr("abcde", 2)) //deabc
console.log(rotateStr("abcdefg", 5)) //cdefgab
console.log(rotateStr("abcdefg", 10)) //efgabcd





//given two strings, return true if they are rotations of one another. return false if they are not
function isRotation(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    for (let i = 0; i < str1.length; i++) {
        if (rotateStr(str1, i) == str2) {
            return true;
        }
    }
    return false;
}


console.log(isRotation("abcde", "deabc")) //true
console.log(isRotation("abcde", "edacb")) //false
console.log(isRotation("abcde", "deabca")) //false



// EXAMPLE
// abcd,efg rotate by 3
// 0123,456


// 012,3456 //index of result
// efg,abcd
// 456,0123 //the matching indexes in the original string

function rotateString(str, n) {
    n = n % str.length; //offset
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        newStr += str[(str.length - n + i) % str.length];
        // }               str[7       - 3 + 0 ] > str[4 % 7] > e
        // }               str[7       - 3 + 1 ] > str[5 % 7] > f
        // }               str[7       - 3 + 2 ] > str[6 % 7] > g
        // }               str[7       - 3 + 3 ] > str[7 % 7] > str[0] > a
        // }               str[7       - 3 + 4 ] > str[8 % 7] > str[1] > b
        // }               str[7       - 3 + 5 ] > str[9 % 7] > str[2] > c
        // }               str[7       - 3 + 6 ] > str[10 % 7] > str[3] > d
        return newStr;
    }
}