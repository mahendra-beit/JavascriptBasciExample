//console.log(this);
//alert(this)

function AAA (a,b){
    this.a = a;
    this.b = b;
    console.log(this)
}

AAA.prototype.display =function(){
console.log(this.a + " " + this.b)

}


var obje1 = new AAA(5,6);
var obje2 = new AAA("Mahendra", "Prajapati");

obje1.display();
obje2.display();