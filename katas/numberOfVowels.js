const numberOfVowels = (data) => {
    let c = 0;
    const v = "AEIOU";
    for(let d of data.toUpperCase()){
        if(v.includes(d))
        c++;
    }
    return c;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));