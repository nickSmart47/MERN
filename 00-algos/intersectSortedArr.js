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