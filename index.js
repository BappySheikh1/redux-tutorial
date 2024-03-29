const {createStore} =require('redux')
// 1. state - count : 0
// action - increment, decrement, reset
// reducer
// store

// CONSTANTS
const INCREMENT ='INCREMENT';
const DECREMENT ='DECREMENT';
const RESET ='RESET';


const initialState ={
    count : 0
}

const incrementAction =()=>{
    return {
        type : INCREMENT,
    }
}

const decrementAction =()=>{
    return {
        type : DECREMENT
    }
}

const resetAction =()=>{
    return {
       type : RESET
    }
}

// Creating reducer
const counterReducer =(state=initialState , action) =>{
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count : state.count + 1
            }
            // 
        case DECREMENT:
            return {
                ...state,
                count : state.count - 1
            }
            // 
        case RESET:
            return {
                ...state,
                count : 0 ,
            }
            // 
    
        default:
            state;
    }
}

// store
const store = createStore(counterReducer)

store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(decrementAction())
store.dispatch(resetAction())