const isOdd = num => {
    return num %2 ===1
}

const isEleven = isOdd(11)
const isSix = isOdd(6)

console.log("Eleven is odd: "+ isEleven)
console.log("Six is odd: "+ isSix)