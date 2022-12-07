// defining const
const INCREMENT = "INCREMENT"
const DECREMENT ="DECREMENT"

// state
const initialCounterState ={
    count : 0,
    
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

const counterReducer = (state=initialCounterState,action)=>{
    switch (action.type) {
        case INCREMENT:
             return {
                ...state ,
                count: state.count + 1
             }
            // 
        case DECREMENT:
              return {
                ...state ,
                count: state.count - 1
              }
            // 
            
    
        default:
            state;
    }
}