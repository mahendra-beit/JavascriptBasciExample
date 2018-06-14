function Class(sno,name){
    this.sno = sno;
    this.name = name;
}

Class.prototype.display =function(){
    console.log(this.sno)
    console.log(this.name)
     return {
        chain: function(){

     console.log("this is  a function" + this.sno)
}}
}
var obj = new Class(12,"Mahi");
var x = obj.display();
x.chain();

//var obj = new Class(12,"Mahi");
//obj.display().chain();
//obj.display()();