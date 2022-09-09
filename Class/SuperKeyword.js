// super keyword diye parent kono fun ke access kora jay directly
class Parent{
    property(){
        console.log("I have a 90 Lakh Fund!")
    }

    loan(){
        console.log("I have 10 Lakh Loan!")
    }
}

class child extends Parent{
  
    demo(){
        super.property();
    }
}


var obj=new child();

obj.demo();

