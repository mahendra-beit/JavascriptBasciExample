var obj = [
    "123", "5khkh","Ram","Ravi","Rajvi","Rakesh",
    "MAH@GMAIL.COM",
    "mahendra@gmail.com",
    "week","kirti@gmail.com","jjj","Johan","John","jon","blue@gmail.com","34@er34","mahi","Manish","rm","kk","KK","ker1k"];
//var regx = /^R/;

//var regx = /^[0-9]/;
//var regx = /^[RMWrmw]/;
//var regx = /[0-9]$/;
///
//[a-zA-Z][a-zA-Z]{2,4}[a-zA-Z]$;
//var regx = /^[a-zA-Z]{2,4}[a-zA-Z]$/;

//var regx = /^[a-zA-Z].{2,3}[a-zA-Z]$/;

//var regx = /^[Jj](oh|o|ho)n$/;

//var regx = /^[a-zA-Z][a-zA-Z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]{2,5}$/;

var regx = new RegExp("^[a-zA-Z][a-zA-Z0-9_\.]+@[q-z]+[\.][a-z]{2,5}$");

for (var x in obj){
    if(regx.test(obj[x])){
        console.log(obj[x])
    }
}
/* 
regular expression - it is a string patten 
which is built by using some special charactat.
 where the chars used has some inbuilt meaning 
 
 ^ beginnin with
 [] - set of alternate charectars
 [abc] -- a or b or c
 $ -- ending with
 + one or more occurences
 * zero or more occurences
 
 {n}

 */