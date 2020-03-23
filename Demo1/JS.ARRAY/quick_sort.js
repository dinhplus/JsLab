function quick_sort(arr) {
    let result = [];
    if (arr.length > 1) {
        let node = arr[0];

        let low = [],
            high = [];
        for (value of arr.slice(1)) {
            if (value <= node) low.push(value);
            else high.push(value);
        }

        result = quick_sort(low).concat(node, quick_sort(high));
    } else result = arr;
    return result;
}

console.log(quick_sort([4, 64, 13, 76, 23, 77, 8, 2]));