function person(name,age){
    this.name=name;
    this.age=age
}

function developer(name,age,competency){
    person.call(this,name,age)
    this.competency=competency
}
function seniordevloper(name,age,competency,experience){
    developer.call(this,name,age,competency)
    this.experience=experience
}
const obj=new seniordevloper("aman",23,"MEAN",2)
console.log(obj)