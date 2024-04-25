
// prototype based way of creating objects
let animal ={
  type : "unknown",
   sound : function(){
       console.log("the "+this.type + " makes a sound")
   }
}
let dog = Object.create(animal)
dog.type="dog"
dog.color = "brown"
dog.sound();
console.log(dog)
let vehicle ={wheels : 4};
let car ={
   seat : 5,
  __proto__: vehicle,
  wheels : 6
};
//console.log(`vehicle:`,vehicle,vehicle.__proto__);
console.log(`car:`, car);
//console.log(`car wheels:`, car.wheels);
// constructor based way of creating object 
function Person(name,age){
        this.name=name;
        this.age=age;
        this.sayName=function(){
            console.log(this.name);
        }
}
const personOne= new Person("Jummy",13)
console.log(personOne.name);
// json.parse()
const json = `{"result":true, "count":42}`;
const obj = JSON.parse(json)
console.log(obj)
// json.stringify()
console.log(JSON.stringify({x:5, y:6}))
 