let fs = require('fs');

// 6. For bonus points,
// a. You can add unit tests for your code.
// b. Your code should take in the flattened JSONs that you generated as input and be able to reconstruct the original JSON.

let filePath = "./restaurants.json";
let fileContent = fs.readFileSync(filePath, encoding = 'utf8');
// console.log(JSON.parse(fileContent));
// data = flatten(JSON.parse(fileContent));

data = JSON.parse(fileContent);
console.log(data);





function flatten(data) {
  console.log(data);
};
