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

  prime_num(userInput);
  //end-here
});

function prime_num(Data)
{
    var arr = Data[0].split(' ');
    arr = arr.map(x => parseInt(x));
    arr.map(x=>
        {
            for(var i=2;i<x;i++)
           { if(x%i===0){return false}}
            console.log(x);
        })


}