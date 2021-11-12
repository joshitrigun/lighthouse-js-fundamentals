const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let arrnew = [];
let len=ingredients.length;
let i = 0;
while(i < len) {
    console.log(ingredients[i])
    i++;
}

for(let content of ingredients) {
    console.log(...content)
}

for(let n=len; n >= 0; n--){
    console.log(ingredients[n])
}