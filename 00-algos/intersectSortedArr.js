// const intersect = (arr1, arr2) => {
//     let result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] == arr2[j]) {
//                 result.push(arr1[i])
//                 arr1.shift()
//             }
//         }
//     }

//     return result;
// }

const intersect = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]){
            i++
        }
        else if (arr1[i] == arr2[j]){
            result.push(arr1[i])
            i++;
            j++;
        }
        else {
            j++;
        }
    }

    return result;
}

const intersectRecursive = (arr1, arr2, arr1Runner = 0, arr2Runner = 0, output = []) => {
    if ((arr1.length == arr1Runner) || (arr2.length == arr2Runner)){  //if we have reached the end of either array
        return output;
    }
    else if (arr1[arr1Runner] == arr2[arr2Runner]) { //if the values at respective indices of each array are the equal to each other, push the value to result 
        output.push(arr1[arr1Runner]);
        return intersectRecursive(arr1, arr2, arr1Runner + 1, arr2Runner + 1, output);
    }
    else if (arr1[arr1Runner] > arr2[arr2Runner]){ //if first array has larger value
        return intersectRecursive(arr1, arr2, arr1Runner, arr2Runner + 1, output);
    }
    else { //if second array has larger value
        return intersectRecursive(arr1, arr2, arr1Runner + 1, arr2Runner, output);
    }
}

console.log(intersectRecursive([1, 3, 3, 4, 4, 6], [1, 4, 4, 4, 4, 6, 6, 6]));

// const intersect = (arr1, arr2) => {
//     // base case
//     if (arr1 === [] || arr2 === []){
//         return []
//     }
//     else if (arr1[0] < arr2[0]){
//         return intersect(arr1.slice(1), arr2)
//     }
//     else if (arr1[0] > arr2[0]){
//         return intersect(arr1, arr2.slice(1))
//     }
//     else {
//         return [arr1[0] + intersect(arr1.slice(1), arr2.slice(1))]
//     }
// }


console.log(intersect([1, 2, 3, 3, 4, 4, 6], [2, 3, 4, 4, 6])) // [2,3,4,4,6]

console.log(intersect([1, 2, 3, 3, 4, 4, 6], [1, 2, 3, 3, 3, 3, 4, 4, 6])) //[1,2,3,3,4,4,6]

console.log(intersect([1, 2, 3, 3], [1, 2, 3, 3, 3, 3, 4, 4, 6])) //[1,2,3,3]


// let x = [1, 2, 3, 3, 4, 4, 6]
// console.log(x.slice(1))