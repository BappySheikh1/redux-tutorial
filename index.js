// defining const
const INCREMENT = "INCREMENT"
const DECREMENT ="DECREMENT"
const ADD_USER ="ADD_USER"

// state
const initialCounterState ={
    count : 0,
    
}
const initialUsersState ={
     name: [{name: "Bappy Sheikh"}]
    
}

// action - object - type, payload

const IncrementCounter =()=>{
   return {
    type : INCREMENT,
   }
}

const DecrementCounter =()=>{
    return {
        type : DECREMENT,
    }
}

const addUser =()=>{
 return {
    type: ADD_USER,
    payload: {name : 'sheikh'}
 }
}