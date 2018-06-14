function callme(p){
   console.log("inside function " )
    p("Pakistan" , "Lanka")
    p("Pakistan2" , "Lanka2")
   console.log("after function call ..")
}
// Function with function as a parameter
var x = function(a,b){
    console.log("this is call back ")
    console.log(" A Value is ==>> " + a)
    console.log(" B Value is ==>> " + b)
}

callme(x)
// function call by passing function as parameter 