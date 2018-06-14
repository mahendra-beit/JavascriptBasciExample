function outer(x,y){

        function inner(n){
            var m = 25;
            l = 100;
            x = n + 30;
            y = n + x + 40;
            console.log("X Value ==> " + x)
             console.log("Y Value ==> " + y)
             console.log("m Value ==> " + m)
        console.log("l Value ==> " + l)
        }
        inner(50)
        console.log("X Value =>> " + x)
        console.log("y Value ==> " + y)
        //console.log("m Value ==> " + m)
        console.log("l Value ==> " + l)
}

outer(10,20)
