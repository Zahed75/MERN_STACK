var MyMap= new Map();

MyMap.set('ke1',"Bangladesh")
MyMap.set('ke2',"IND")
MyMap.set('ke3',"Pakistan")
MyMap.set('ke4',"Delhi")
MyMap.set('ke5',"Mumbai")
MyMap.set('ke6',"Tamilnadru")

// console.log(MyMap.values());
// console.log(MyMap.keys());

// Delete method

for(let myvalue of MyMap.values()){
    console.log(myvalue);
}

for(let mykeys of MyMap.keys()){
    console.log(mykeys);
}