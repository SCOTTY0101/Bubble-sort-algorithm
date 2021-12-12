
/*Javascript Bubble sort algorithm. Swaps adjacent elements if they are in the wrong order
* Time complexity O(n^2)
*/ 

// let arr = [899, 45, 345, 4, 4589, 132, 64, 8, 90, 411, 202, 34, 1, 7, 26, 111, 11, 3444, 93, 704, 404, 501, 666, 832, 2040, 599, 14, 0, 777];

let bubble = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}
