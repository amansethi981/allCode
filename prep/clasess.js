function Bike(model, color) {
  this.model = model;
  this.color = color;
}

Bike.prototype.getDetails = function () {
  console.log(this.model +" "+ this.color)
};

const ob=new Bike("tt","ff")
const greet = () =>  {
    const prefix = 'Mr'
    return (name) => {
        console.log(`${prefix} ${name}, welcome!`)
    }
}

console.log(greet()('Jack'))

function myFunc() {
    console.log(this)     
  }
 
const obj = {
  bool: true,
  myFunc: myFunc,
}

obj.myFunc()

//copy one obejct to another 
const oneobj={a:1,b:2,c:3}
const twoobj={c:6,d:5}
const result=Object.assign(oneobj,twoobj)
console.log(oneobj)

var user = {
    firstName: "John",
    lastName : "Abraham",
    language : "en",
    get lang() {
      return this.language;
    },
    set lang(lang) {
    this.language = lang;
    }
  };
  console.log(user.lang); // getter access lang as en
  user.lang = 'fr';
  console.log(user.lang); // setter used to set lang as fr
