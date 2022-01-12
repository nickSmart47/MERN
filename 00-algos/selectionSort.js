// each pass, move left to right looking for largest value
// initialize bigIndex, set as first value
// go to the right, if find something bigger, set that as bigIndex
// at end, swap bigIndex to the last index of array
// now loop again, but one less index from the end

// inner for loop doesn't need to go to the end each time

/*
given an unsorted array, create a function that implement selection sort to sort the array. You are not allowed to create a new array and you have to modify the original input aray

https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/
*/


function selectionSort(arr) {
    let bigIndex = 0;
    for (var j = 0; j < arr.length; j++) {
        for (var i = 0; i < arr.length - 1 - j; i++) {
            if (arr[i] > arr[bigIndex]) {
                bigIndex = i;
            }
        }
        [arr[bigIndex], arr[arr.length - 1 - j]] = [arr[arr.length - 1 - j], arr[bigIndex]];
    }
    return arr
}


console.log(selectionSort([5, 7, 2, 9, 1, 4]))