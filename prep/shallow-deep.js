//shallow copy

let a = {
  name: {
    firstName: "Aman",
    lastName: "Singh",
  },
  age: 23,
};

let b = { ...a };
//b.name.firstName="Preet"
b.name = "ss";
b.profile = "mean";
console.log("-------A------", a);
console.log("---------B--------", b);

//deep copy

var employee = {
  eid: "E102",
  ename: "Jack",
  eaddress: "New York",
  salary: 50000,
};

let newEmployee = JSON.parse(JSON.stringify(employee));
newEmployee.ename = "aaa";
newEmployee.age = "22";

console.log("Employee", employee);
console.log("NeW Employee", newEmployee);



