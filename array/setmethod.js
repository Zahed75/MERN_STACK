var newset=new Set();

newset.add("Zahed")
newset.add("Rakib Ullah")
newset.add("Shahed")
newset.add("Tauhid")
newset.add("Sabbir")
newset.add("Jisan")

newset.delete("Zahed");
// newset.clear();
console.log(newset.size);
console.log(newset.values());

// has method diye value ache kina check kora
if(newset.has("Rakib Ullah")){
    console.log("Yes The name already have your database")
}

else{
    console.log("There is no Data!")
}