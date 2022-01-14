/*
QUICK SORT-

1. First build out the partition function - this is the helper function that we will need in order to do quick sort

Partition is when you are given an unsorted array and you pick any value in that array, and rearrange that array so that that value you picked (pivot value) has everything that to the left of it is less than it and everything to the right of it is greater than it
    -for simplicity, pick the first element in the array (at index 0) as our "pivot"
    -hint: count how many values are less than the pivot value
        -anotha hint: any time you see a value that is less than the pivot, increment some counter and also swap the element at index i with the counter position
    -Lastly, the partition function should return the index where the pivot value ended up at


let x = [1, 3, 2, 0, 6, 8, 12, 9]
        i
pivotidx= 0->1->2->3->4


2. Quick sort will implement the partition function recursively
*/


const partition2 = (arr) => {
    let pivot = arr[0];
    let pivotIdx = 0;
    for (let i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            pivotIdx++;
            [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]];
        }
    }
    // if (arr[pivotIdx] >= arr[arr.length-1]){
    //     [arr[pivotIdx], arr[arr.length-1]] = [arr[arr.length-1], arr[pivotIdx]]
    // }
    [arr[0], arr[pivotIdx]] = [arr[pivotIdx], arr[0]];
    // console.log({pivotIdx}, {pivot})
    return arr
}

// THIS DIDN'T WORK! :(

let x = [4, 1, 9, 7, 6, 11, 8, 3, 0]
let y = [2, 1, 5, 7, 12, 3, 4]
// console.log(partition2(x))
// console.log(partition2(y))



const partition = (arr, start = 0, end = arr.length - 1) => {
    let pivot = arr[start];
    let pivotIndex = start;
    // goal is to iterate through the array and kesep track of how many values are less than our pivot value. 
    // Each time we find a value that is less than pivot value, we increment our counter (pivotIndex)
    // we also want to swap value at current index with the pivot index
    for (let i = start+1; i <= end; i++) {
        if (pivot > arr[i]) {
            pivotIndex++;
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        }
    }

    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];

    return pivotIndex
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = partition(arr, left, right)
        // console.log('pivot index is -->', pivotIndex)
        quickSort(arr = arr, left, pivotIndex - 1) // left side
        quickSort(arr = arr, pivotIndex + 1, right) // right side
    }
    return arr;
}


/* 

[5,9,0,7,3,1,9,2]
pivot = 5

*/

console.log(quickSort([5, 9, 0, 7, 3, 1, 9, 2]))