function solve(arr){
    let biggestOne = arr.shift();
    let result = []
    result.push(biggestOne)

    for (const el of arr) {
        if (el >= biggestOne) {
            result.push(el)
            biggestOne = el
        }
    }
    return result
}