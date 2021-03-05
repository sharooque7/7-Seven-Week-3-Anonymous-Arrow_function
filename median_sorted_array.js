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

  median(userInput);
  //end-here
});
function median(Data)
{
    var arr = Data[0].split(" ");
    var arr1 = Data[1].split(" ");
    var arr3 = arr.concat(arr1);
   // var arr3 = [1,2,3,4,5,6,7,8]
    arr3 = arr3.map(x=>parseInt(x));
    arr3.sort(function(a,b){return a-b})
    var medians = function(med)
    {
      return med[Math.floor(med.length/2)-1] + med[Math.floor(med.length/2)];
    }
    console.log(medians(arr3)/2);
}