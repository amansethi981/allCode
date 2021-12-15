const arr=[3,62,234,7,23,74,23,76,92];
const arr2=[];
for(var i=0;i<arr.length;i++){
    if(arr[i]>70){
       // console.log(arr[i])
        arr2.push(arr[i])
    }
}
console.log(arr2)

const user={
    fname:"Sahil",
    lname:"Dua",
    Address: { 
        Line1: "address line 1",
        Line2: "address line 2",
        State: "Delhi",
        Pin: 110085, 
        Country:"India", 
        City: "New Delhi"
     },
     phoneno:99999999
}
let {fname,lname,Address,phoneno}=user;
console.log(fname)
console.log(Address)

// const song = { name: 'Dying to live', artist: 'Tupac', featuring: 'Biggie Smalls' }; 
// let {name,artist,featuring}=song;
