// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  print_odd_anonymous(data)
});

function print_odd_anonymous(Data)
{
    var arr = Data.split(" ");
    console.log(arr);
    arr = arr.map((x)=>parseInt(x));
    var odd =[]; 
    arr.map(function(num)
    {
        if(num%2==1)
        {
            odd.push(num);
        }
    })
    console.log(...odd);
}
//ctrl-d 