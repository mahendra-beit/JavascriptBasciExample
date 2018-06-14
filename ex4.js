function callme(p){
   console.log("inside function " )
    p("Pakistan" , "India")
   console.log("after function call ..")
}
// Function with function as a parameter
callme(function(a,b){
    console.log("this is call back ")
    console.log(" A Value is ==>> " + a)
    console.log(" B Value is ==>> " + b)
})
// function call by passing function as parameter 