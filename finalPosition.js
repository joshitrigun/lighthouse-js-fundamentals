const moves = ["north", "north", "west", "west", "north", "east", "north"];
const finalPosition = function (moves) {
  let position = [0, 0];
  for(let m of moves) {
    if(m === 'west') position[0]--
    else if (m === "east") position[0]++
    else if (m ==="north") position[1]++
    else position[1]--
  }
  return position
}
console.log(finalPosition(moves))