class Student {
    constructor(sno,sname){
        this.sno = sno;
        this.sname = sname;
    }

    display(){
        console.log(this.sno + " " + this.sname)
    }
    /*display(X){
        //console.log(this.sno + " " + this.sname)
        console.log("iNSIDE X ")
    }*/
}

var obj1 = new Student(12,"Mahendra");
var obj2 = new Student(10,"Kirti");
obj1.display();
obj2.display();