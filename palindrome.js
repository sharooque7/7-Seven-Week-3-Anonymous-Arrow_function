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

  palindrome(userInput);
  //end-here
});
function palindrome(Data)
{
    var arr = Data[0].split(' ');
    var palindrome =  arr.map(function(word)
    {
        if(word==word.split("").reverse().join(""))
        {
            console.log(word);
        }
    })
   
}