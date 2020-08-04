function findDiffrences(arr, brr) {
    for (let i = 0; i < arr.length; i++) {
        brr.splice(brr.indexOf(arr[i]), 1)
    }
    return ([... new Set(brr)].sort((a, b) => { return a - b }));

}

// diff between just two arrays:
function arrayDiff(a, b) {
    return [
        ...a.filter(x => !b.includes(x)),
        ...b.filter(x => !a.includes(x))
    ];
}

// diff between multiple arrays:
function arrayDiff(...arrays) {
    return [].concat(...arrays.map( (arr, i) => {
        const others = arrays.slice(0);
        others.splice(i, 1);
        const unique = [...new Set([].concat(...others))];
        return arr.filter(x => !unique.includes(x));
    }));
}