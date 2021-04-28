// By Closures
let multiply=function(x)
{
    return function(y)
    {
        console.log(x*y);
    }
}
 let multiplyTwo=multiply(2);
 multiplyTwo(3);
 let multiplyThree=multiply(3);
 multiplyThree(4);

 // By Bind Method
 let multi=function(a,b)
 {
     console.log(a*b);
 }
 let mutliFive=multi.bind(this,5);
 mutliFive(5);
 let mutliSixx=multi.bind(this,8);
 mutliSixx(5);