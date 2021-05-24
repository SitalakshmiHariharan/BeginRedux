import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from 'redux';


//ACTION: The action that we want to do
const increment =() =>{
  return{
    type:'INCREMENT'
  }
}

const decrement =() =>{
  return{
    type:'DECREMENT'
  }
}

//REDUCER: Describes how action transforms the state into another state
let prevState = 0 // This can be initialized inside the function below as well like (prevState=0,action)
const counter = (prevState, action) => {
    switch(action.type){
      case "INCREMENT":
        return prevState +1;
      case "DECREMENT":
        return prevState -1;
    } 
}

//STORE: Globalized state
let store = createStore(counter);

//Display it in console
store.subscribe(()=> console.log(store.getState()));  

//DISPATCH: This is how we Execute the action. 
store.dispatch(increment());
store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
