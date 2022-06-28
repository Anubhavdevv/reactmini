import React, {useState, useEffect} from 'react'
import "./style.css"
//useEffect Stores the data after the job isa finished for eg when we visit site after visiting whole site there 
//ispop up to suscribe website that is useEffect basically which show the thing when result is finished 
const UseEffect = () => {
  // const initialData = 15;
  const [myNum, setMyNum] = useState(0); //setMyNum Updates the value of myNum
  useEffect(()=>{
    document.title = `Chats${myNum}`
  }); //[] this means useEffect will run only one time if we click on incr then it will not incremented only one time it will
  return (
    <>
      <div className="center_div">
        <div className="upper_div">
          <h1 className="headingg">INCR using ReactHook useEffect</h1>
        </div>
        <p>{myNum}</p>
        <div className="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          INCR
        </div>
       </div> 
    </>
  );  
};

export default UseEffect;