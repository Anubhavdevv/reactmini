import React, {useReducer} from 'react'
import "./style.css"
//If want to work with bigger taks then useReducer is best otherwise useState is best for smaller ones
const reducer = (state, action) => {
  if(action.type === "INCR"){
    state += 1;
  }
  if(state > 0 && action.type === "DECR"){
      state -= 1;
  }
  return state //If action want to do nothing state remains same 
}

const UseReducer = () => {
  const intialData = 15;
  const [state, dispatch] = useReducer(reducer, intialData); //It takes 2 argument and stat take one only
  //Dispatch will not update the value it will use to trigger the reducer function and in reducer it has update func
  return (
    <>
      <div className="center_div">
        <div className="upper_div">
          <h1 className="headingg">INCR and DECR using ReactHook useReducer</h1>
        </div>
        <p>{state}</p>
        <div className="button2" onClick={() => dispatch({type: "INCR"})}>
          <span></span>
          INCR
        </div>
        <div className="button2" onClick={() => dispatch({type: "DECR"})}>
          <span></span>
          DECR
        </div>
       </div> 
    </>
  );
};

export default UseReducer;