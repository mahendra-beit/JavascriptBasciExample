/* var a = 50;
function test(){
var  a = 100;
 console.log(a);
 {
     var a = 60;
     console.log("inside object " + a)
 }
console.log("outside object " + a)
}
test();
*/

/*
    for(var a=5; a< 40;a++){
        //console.log("asd")
    }
console.log(a + "==<<<<")\
*/
/* block level */
 var a = 50;
function test(){
let a = 100;
 console.log(a);
 {
   let  a = 60;
     console.log("inside object " + a)
 }
console.log("outside object " + a)
}
console.log("object " + a)

test();
console.log("object " + a)

    for(var a=5; a< 40;a++){
    //console.log("asd")
    }
console.log(a + "==<<<<")
