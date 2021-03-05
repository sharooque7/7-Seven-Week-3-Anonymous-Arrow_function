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

  print_odd_arrow(userInput);
  //end-here
});

function print_odd_arrow(Data)
{

    var arr = Data[0].split(" ");
    arr=arr.map(x=>parseInt(x));
    arr.map(num=>{
        if(num%2==1)
        {
            console.log(num);
        }
    })
}