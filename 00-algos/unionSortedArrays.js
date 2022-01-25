/*
Union Sorted Arrays
Efficiently combine two already-sorted arrays into a new sorted array containing the
multiset union. Example: given [1,2,2,2,7] and [2,2,6,6,7], return [1,2,2,2,6,6,7].
*/


function union(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length || j < arr2.length) { // changed && to || (and to or)
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]) // new!
            i++
        }
        else if (arr1[i] == arr2[j]) {
            result.push(arr1[i])
            i++;
            j++;
        }
        else {
            result.push(arr2[j]) // new!
            j++;
        }
    }
    // if both arrays have same value multiple times, push that value to result
    // the larger number of times...
    return result;
}

// console.log(union([1, 2, 2, 2, 7], [2, 2, 6, 6, 7])) //[1,2,2,2,6,6,7]
// console.log(union([1, 1, 1, 1, 2, 2, 2, 7], [2, 2, 6, 6, 7])) //[1,1,1,1,2,2,2,6,6,7]
// console.log(union([1, 2, 2, 2, 7], [2, 2, 6, 6, 7, 7, 7, 7])) //[1,2,2,2,6,6,7,7,7,7]

const unionRecursive = (arr1, arr2, arr1Runner = 0, arr2Runner = 0, output = []) => {
    // console.log({arr1Runner, arr2Runner})
    
    // Base Case or Base Condition
    if ((arr1Runner >= arr1.length) && (arr2Runner >= arr2.length)){  //if we have reached the end of both arrays
        return output;
    }
    else if (arr1[arr1Runner] == arr2[arr2Runner]) { //if the values at respective indices of each array are the equal to each other, push the value to result 
        output.push(arr1[arr1Runner]);
        return unionRecursive(arr1, arr2, arr1Runner + 1, arr2Runner + 1, output);
    }
    else if (arr1[arr1Runner] > arr2[arr2Runner] || arr1Runner == arr1.length){ //if first array has larger value or we have reached the end of first array
        output.push(arr2[arr2Runner])
        return unionRecursive(arr1, arr2, arr1Runner, arr2Runner + 1, output);
    }
    else { //if second array has larger value
        output.push(arr1[arr1Runner])
        return unionRecursive(arr1, arr2, arr1Runner + 1, arr2Runner, output);
    }
}

//console.log(unionRecursive([1, 2, 2, 2, 7], [2, 2, 6, 6, 7])) //[1,2,2,2,6,6,7]
console.log(unionRecursive([1, 2, 2, 2, 7, 7, 7, 7], [2, 2, 6, 6, 7])) //[1,2,2,2,6,6,7,7,7,7]
