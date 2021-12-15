const [addUser, setAddUser] = useState([]);

const addUserHandler = (uName, uAge) => {
  setAddUser((prev) => {
    return [...prev, { name: uName, age: uAge, id: Math.random().toString() }];
  });
};

props.onAddUser(name, age);
// __protoyupe
// Prtottype
// Array.prototype.

//useselector,usedispath from react-redux
const counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "incre" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decre" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", val: 10 });
  };
};

//applymiddlware,combinereducer,rootReducer from "redux"
const initalState={counter:0}

const counterReducer=(state=initalState,action)=>{
    switch(action.type){
        case "inc":{
            return {...state,counter:counter+1}
        }
        case "dec":{
            return {...state,counter:counter-1}
        }
        case"increase":{
            return {...state,counter:counter+action.val}
        }
        default:{
            return state
        }
    }
}

