function Person(person_name , person_age, person_gender){
    this.name = person_name;
    this.age = person_age;
    this.gender = person_gender;

    this.greet = function(){
        return (`Hi ${this.name}`);
    }
}
const person1 = new Person ("Pooja",25,'Female');
const person2 = new Person("Sam", 25 , 'Male');
console.log(person1);
console.log(person2);
console.log(person1.greet());