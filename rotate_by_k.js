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

  Rotate(userInput);
  //end-here
});
function Rotate(Data)
{
  var arr = Data[0].split(" ");
  var k =+Data[1];
  var Rotated_array = function(rot,k){
      for(var i=0;i<k;i++)
      {
          rot.unshift(rot.pop())
      }
      return rot;
  }
  console.log(Rotated_array(arr,k));
}