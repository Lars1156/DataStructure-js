const student = {
    name:'pooja',
    age:20,
    hobbies: ['reading', 'reading', 'singing'],
    greet: function(){
        console.log('Hello every one:', student.name);
    },
    score:{
        math:45, science:39
    }
};
console.log(typeof student);
console.log(student);
console.log(student.hobbies[0]);
student.status ='Good student';
console.log(student);
student.greet();
// create a objects using Construtor functions
function Person(){
   this.name = 'Nisha',
   this.age = 27,
   this.hobbies = ['reaing', 'singing'],
   this.greet = function(){
    console.log('Hello every one:' + this.name);
   },
   this.score = {
    Math: 78,
    science: 56
   }
}
 const person = new Person();
 console.log(typeof person);
 console.log(person);
 console.log(person.score.Math);

// Using object.create( ) creates new objects using the prototype of given objects

let Student = {
    Name :'Lissa',
    age : 23,
    mark : 34.5,
    display(){
        console.log("MyName is: ",this.Name);
    }
};
let std1 = Object.create(Student);
std1.Name = 'ShreeRam';
console.log(std1.Name);
console.log(std1);
// create( ) method is static method , being a static method is called using Object class name
// create(proto , propertiesObjects) = 
// proto :- the object which shoudle be prototype the newly created object

// Object.getPrototypesof():

let Animal = {
    makeSound(){
        console.log(`${this.name}, ${this.sound}`);
    },

};

function Dog(name){
    this.name = name;
    this.sound = "brek";
    Object.setPrototypeOf(this,Animal);
}

const dog1 = new Dog("Lissa");
console.log(Animal.makeSound);
console.log(Animal);
console.log(Animal.isPrototypeOf(dog1))
