// constructor method alada kore call kore lage na just object make korle hocche
class MyClass{
    constructor(){
        console.log("Hello Im From Constructor Class!");
    }
}

new MyClass(); //object make


class Friend{
    constructor(a,b){
        console.log(a+b);
    }
}

new Friend(10,30);