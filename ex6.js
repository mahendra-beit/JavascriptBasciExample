function callme(p,q,r){
   q(mahi(p))
   r(mahi(p))

   q("Kirti")
   r("Niki")


}

function mahi (j){
    //test(j)
    return " Welcome to Node Js Application !!!" + j ; 

}

function test(k){
    console.log("Please learn Node Js" + k)
}

callme("Mahendra",function(a){
    console.log("Hi Good Morning " + a);
},function(b){
console.log("Hi Good After Noon " + b);
})