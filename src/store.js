import {createStore} from "redux"

//types
const COLOR_PICKER = 'COLOR_PICKER'

//actions

export const changeColor = (color) => ({
    type: COLOR_PICKER, 
    payload: {
        value: color     
    }
})

//initialstate 
const initialColor = {
    color: 'red'
}

//reducer
const reducer = (state=initialColor, action) => {
    switch (action.type){
        case "COLOR_PICKER":
        return{
            ...state,
            color: action.payload.value,
        };
       default:
        return state;
    }
      
};
//create store

const store = createStore(
    reducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  //export store

  export default store;