import React from "react";
import "./style.css";

const UseState = () => {
  // const initialData = 15;
  const [myNum, setMyNum] = React.useState(0); //setMyNum Updates the value of myNum

  return (
    <>
      <div className="center_div">
        <div className="upper_div">
          <h1 className="headingg">INCR and DECR using ReactHook useState</h1>
        </div>
        <p>{myNum}</p>
        <div className="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          INCR
        </div>
        <div className="button2" onClick={()=>(myNum>0 ? setMyNum(myNum - 1) : setMyNum(0))}>
          <span></span>
          DECR
        </div>
       </div> 
    </>
  )
}

export default UseState;