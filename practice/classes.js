class Person {
  constructor(first, last, age, gender) {
    this.name = {
      first,
      last,
    };
    this.age = age;
    this.gender = gender;
  }
  getter() {
    console.log("Hi I am ", this.name.first);
  }
}
class Teacher extends Person {
  constructor(first, last, age, gender,sub, grade) {
     super(first,last,age,gender);
    this.sub = sub;
    this.grade = grade;
  }
}

let obj=new Teacher("Aman","Singh",23,"Male","Math","A");
console.log(obj)