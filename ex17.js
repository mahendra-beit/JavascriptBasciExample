function callme(p){
    //console.log("before call ...")
     p ("India");
     //return "India";
     //console.log("after call ...")
}

class Mahi {
    constructor() {
        this.value = "Pakistan";
    }
    changeMahi(){
        /*callme(function(data){
                this.value = data;
        }.bind(this));*/

        callme((data)=>this.value=data);
    }

    disply(){
        console.log(this.value);
    }
}

var obj = new Mahi();

obj.disply();
obj.changeMahi();
obj.disply();