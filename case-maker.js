let camelCase = function(input) {
  let result = "";
  let inputs = input.split(' ');
  for(let i = 0; i < inputs.length; i++) {
    if(i === 0) {
      result+= inputs[i];
    }
    else {
      for(let j = 0; j < inputs[i].length; j++) {
        if(j === 0) {
          result += inputs[i][0].toUpperCase();
        }
        else {
          result += inputs[i][j];
        }
      }
    }
  }

  return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));