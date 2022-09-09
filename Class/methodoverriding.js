class Parent{
    property(){
        console.log("I have a 90 Lakh Fund!")
    }

    loan(){
        console.log("I have 10 Lakh Loan!")
    }
}

class child extends Parent{
    loan(){
        console.log("Loan Has Been Cleared!")
    }
}

var obj=new Parent();
var obj=new child();

obj.property();
obj.loan();

