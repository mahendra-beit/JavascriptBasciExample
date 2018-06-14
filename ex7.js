function callthisToo(p){

    //console.log(p);

    return function(q){
        console.log(p + " near to  "  + q);
        console.log(q);
    }
}

callthisToo("broda")("Ahmedabad");
