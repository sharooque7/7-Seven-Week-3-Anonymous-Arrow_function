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
    var arr = Data[0].split(" ");
    arr = arr.map(x=>parseInt(x));
    var prime = arr.map(function(num) {
        for (var i=2;i<num;i++)
        {
        if(num%i===0){return false}}
        return num;
        
    })
    console.log(prime);
}
