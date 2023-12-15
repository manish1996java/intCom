//cheating in lexical scope---------------------------


// "use strict"; //with strict mode it won't allow to create b in local scope instead it is a syntax error.
// var b = 2;

// function fun1(str,a){
//     eval(str);  // evaluate the string in function scope so b has defined inside the function
//     console.log(a,b);
// }

// fun1("var b=4", 6);  // 6 4




/*

- In Hoisting function initialise first then variable.
- Hoisting doesn't work with function expression.
- It also doesn't work with const and let; (temporal dead zone).

*/









// principal of least privilege or encapsulation.-------------------


//instead of ------

// function funcA(a) {
//     b = a + funcB(a*2);
//     console.log(b*3);
// }

// function funcB(a) {
//     return a-1;
// }

// var b;

// funcA(2);

// do this ------

// function funcA(){
//     function funcB(a) {
//         return a-1;
//     }
//     var b;

//     b=a+funcB(a*2);
//     console.log(b*3);
// }

// funcA()








/*
Closure is when a function is able to remember and access its lexical
scope even when that function is executing outside its lexical scope. 
*/