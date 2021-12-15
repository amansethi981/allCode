const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "add": {
      return state + 1;
    }
    case "sub": {
      return state - 1;
    }
    default: {
      return state;
    }
  }
};

const App=()=>{
    const [count,dispatch]=useReducer(reducer,initialState)

    // <h2>count</h2>
    // <button onClick=(()=>dispatch("add")) />
}

//usememo
const [count,setCount]=useState(0)

const calculation=useMemo(()=>expense(count),[count])

const expense=(num)=>{
    for(let i=0;i<100000;i++){
        num+=1;
    }
    return Number
}
// 1+1=2+1=3
// 1+1+1=3