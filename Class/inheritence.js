class parent{


fun1(){
    console.log("Hello I have 10 Lakh money!!!")
}

fun2(){
    console.log("Hello I have a Lamborghini car!")
}


}




class child extends parent{


}

var obj=new child();

obj.fun1();
obj.fun2();


//Object made from parent
var obj=new parent();

obj.fun1();