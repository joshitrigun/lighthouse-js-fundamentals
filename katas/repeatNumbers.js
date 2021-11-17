const repeatNumbers = (data) => {
  let output = [];
  for (let i = 0; i < data.length; i++) {
    let line = "";
    for (let j = 0; j < data[i][j]; j++) {
      line += data[i][0];
    }
    output.push(line);
  }
  return output.join(",");
};
