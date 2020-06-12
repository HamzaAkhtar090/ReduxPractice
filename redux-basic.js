const redux = require('redux');


//reducers
initialState ={ counter : 0};


rootReducer = (state = initialState, action)=> {
    if(action.type == 'INCREMENT'){
    
        return{
            ...state,
                counter : state.counter + 1
        }
    
    }


    if(action.type == 'ADD'){
        updatedState ={...state }
        updatedState['counter'] = state.counter + action.value;
        return updatedState;
    }

    return state;
}

//create Store
const createStore = redux.createStore;
const store = createStore(rootReducer);



 
 //subiscribtion

 store.subscribe(()=>{
     console.log(store.getState())
 })
 


 //dispatchers

 store.dispatch({type : 'INCREMENT'})
 store.dispatch({type : 'ADD' , value : 9})
 