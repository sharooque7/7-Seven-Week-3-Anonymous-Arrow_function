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

  print_sum_arrow(userInput);
  //end-here
});
function print_sum_arrow(Data)
{
    var arr = Data[0].split(" ");
    arr = arr.map(x=>parseInt(x));
    var sum = arr.reduce((a,b)=>a+b,0)
    console.log(sum);
}