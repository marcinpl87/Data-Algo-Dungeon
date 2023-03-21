//// Fibonacci Sequence (recursive algorithm)
function fibonacci(num) {
    if (num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}
//// Bubble sort
function swap(arr, xp, yp) {
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
a.map((_) => {
    a.map((el, i) => {
        if (el > a[i+1]) swap(a, i, i+1);
    });
});
//// Binary search
function binarySearch(arr, x) {
    let indexMin = 0;
    let indexMax = arr.length - 1;
    let indexMid;
    while (indexMax >= indexMin) {
        indexMid = indexMin + Math.floor((indexMax - indexMin) / 2);
        if (arr[indexMid] == x) return indexMid;
        if (arr[indexMid] > x) indexMax = indexMid - 1;
        else indexMin = indexMid + 1;
    }
    return -1;
}