const urlEncode = text => {
    let res = text.trim().split('');
    console.log(res)
    for(let i = 0; i < res.length; i++){
        const s = res[i];
        if(s === ' '){
            res[i] = "%20"
        }
    }
    return res.join('')

}
console.log(urlEncode('Lighthouse Labs'));
console.log(urlEncode(' Lighthouse Labs '));
console.log(urlEncode('blue is greener than purple for sure'));