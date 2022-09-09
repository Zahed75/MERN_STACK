class MyClass {
    constructor(a, b) {
        this.FirstNum = a
        this.SecondNum = b
    }


    add() {
        let result = this.FirstNum + this.SecondNum;
        console.log(result);
    }
}

var obj=new MyClass(20,20);

obj.add();