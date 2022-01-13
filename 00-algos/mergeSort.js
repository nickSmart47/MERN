
//create a function that accepts 2 already sorted arrays and combines them into one sorted array and returns the sorted array
function combine(arr1, arr2) {
    let result = [];
    let indexOne = 0;
    let indexTwo = 0;
    //hint: create two variables to keep track of index numbers of each respective arrays
    while (indexOne < arr1.length && indexTwo < arr2.length)
        if (arr1[indexOne] < arr2[indexTwo]) {
            result.push(arr1[indexOne]);
            indexOne++;
        }
        else if (arr2[indexTwo] < arr1[indexOne]) {
            result.push(arr2[indexTwo]);
            indexTwo++;
        }
        else {
            result.push(arr1[indexOne]);
            indexOne++;
        }
    while (indexTwo < arr2.length){
        result.push(arr2[indexTwo]);
        indexTwo++;
    }
    while (indexOne < arr1.length){
        result.push(arr1[indexOne]);
        indexOne++;
    }
    return result;
}

// let x = [1, 5, 6, 6, 8, 14]
// let y = [-3, 6, 9, 10, 15, 20, 22, 28]
// let b = [1, 5, 6, 6, 8, 14]
// let a = [-3, 6, 9, 10, 15, 20, 22, 28]
// console.log(combine(x, y)) //[-3,1,5,6,6,6,8,9,10,14,15,20,22,28]
// console.log(combine(a, b)) 

const mergeSort = (arr) =>{
    // stop breaking array down in halves if array length is less or equal to 1 - BASE CASE
    if (arr.length <= 1){
        return arr;
    }
    else{
        // figure out midpoint
        let mid = Math.floor(arr.length/2)
        let leftHalf = arr.slice(0, mid)
        let rightHalf = arr.slice(mid, arr.length)
        let left = mergeSort(leftHalf)
        let right = mergeSort(rightHalf)
        return combine(left, right)

    }
}

let arr1 = [4,8,2,5,9,0,1,12]
console.log(mergeSort(arr1))