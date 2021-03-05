const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  Duplicate(userInput);
  //end-here
});
function Duplicate(Data)
{
  var arr = Data[0].split(" ");
  var DistinctArray = arr.filter((value,index)=>arr.indexOf(value) === index);
  console.log(...DistinctArray);
}