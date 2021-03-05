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

  title_caps(userInput);
  //end-here
});
function title_caps(Data)
{
    var arr = Data[0].split(" ");
    arr = arr.map((x)=>{return x.charAt(0).toUpperCase() + x.slice(1)});
    console.log(arr.join(" "));
}