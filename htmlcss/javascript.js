


const calculatearea=(radius)=>{
    var area=radius*radius*Math.PI
    console.log(area)
}
const radius=22;
//calculatearea(radius)

const person={
    Name:'Aman',
    age:'22',
}
const newperson={...person}
//console.log(newperson)

const employee=[
    {
        name:'john',
        age:'23',
        salary:'4000',
        DOB:'23/09/1998'
    },
    {
        name:'Arun',
        age:'25',
        salary:'50000',
        DOB:'25/05/2000'

    },
    {
        name:'Arjun',
        age:'26',
        salary:'3000',
        DOB:'2/03/1998'
    },
    {
        name:'Tarun',
        age:'24',
        salary:'900',
        DOB:'20/10/1998'
    }
]
const filteredemployee=()=>{
    employee.filter((i)=>{
        if(i.salary>5000){
            console.log(i)
        }
    })
}
const incrementsalary=()=>{
    var newsalary=0;
    employee.filter((emp)=>{
        // console.log(emp.salary)
        if(emp.salary<1000 && emp.age>20){
            newsalary=newsalary+emp.salary*5;
            console.log('New Salary is:',newsalary)
        }
    })
}
const groupbyage=(arr,key)=>{
    return arr.reduce((result,currvalue)=>{
        (result[currvalue[key]]=result[currvalue[key]] ||[]).push(
            currvalue
        )
        return result
    })
}
// filteredemployee()
// incrementsalary()
const grouped=groupbyage(employee,'age')
console.log(grouped)
