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

let pascal = function(input) {
  let result = "";
  let inputs = input.split(' ');
  for(let i = 0; i < inputs.length; i++) {
    for(let j = 0; j < inputs[i].length; j++) {
      if(j === 0) {
        result += inputs[i][0].toUpperCase();
      }
      else {
        result += inputs[i][j];
      }
    }
  }
  return result;
}

let snake = function(input) {
  return input.replace(/ /g, "_");
}

let kebab = function(input) {
  return input.replace(/ /g, "-");
}

let title = function(input) {
  let result = "";
  let inputs = input.split(' ');
  for(let i = 0; i < inputs.length; i++) {
    for(let j = 0; j < inputs[i].length; j++) {
      if(j === 0) {
        result += inputs[i][0].toUpperCase();
      }
      else {
        result += inputs[i][j];
      }
    }
    result += " ";
  }
  return result.trim();
}

let vowel = function(input) {
  return input.replace(/[aeiou]/g, function(v) {
    return v.toUpperCase();
  });
}

let consonant = function(input) {
  return input.replace(/[^aeiou]/g, function(v) {
    return v.toUpperCase();
  });
}

let upper = function(input) {
  // console.log(input.toUpperCase());
  return input.toUpperCase();
}

let lower = function(input) {
  return input.toLowerCase();
}

const makeCase = function(input, caseStyle) {
  let result;
  if(Array.isArray(caseStyle)) {
    result = input;
    for(c in caseStyle) {
      switch(caseStyle[c]) {
        case "camel":
          result = camelCase(result);
          break;
        case "pascal":
          result = pascal(result);
          break;
        case "snake":
          result = snake(result);
          break;
        case "kebab":
          result = kebab(result);
          break;
        case "title":
          result = title(result);
          break;
        case "vowel":
          result = vowel(result);
          break;
        case "consonant":
          result = consonant(result); 
          break;
        case "upper":
          result = upper(result);
          break;
        case "lower":
          result = lower(result);
          break;
      }
    }
  }
  else {
    switch(caseStyle) {
      case "camel":
        result = camelCase(input);
        break;
      case "pascal":
        result = pascal(input);
        break;
      case "snake":
        result = snake(input);
        break;
      case "kebab":
        result = kebab(input);
        break;
      case "title":
        result = title(input);
        break;
      case "vowel":
        result = vowel(input);
        break;
      case "consonant":
        result = consonant(input); 
        break;
      case "upper":
        result = upper(input);
        break;
      case "lower":
        result = lower(input);
        break;
    }
  } 
  return result;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", "upper"));
console.log(makeCase("this is a string", ["upper", "snake"]));
