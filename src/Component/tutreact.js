// import React from 'react' 
//No need to write it because of version 18 version below 17 requries to import it 

import React from "react"

const App = () => { //With functions no need of fat arrow(=>)
  return ( //This JSx which will return only one element can return 
    //shortname for React Fragment syntax format (<> and </>)
    <> 
      <MyName />
      <h1>App{3+3}</h1> 
    </> 
  );
};
const MyName = () =>{
  return <h1>Hey vrooo</h1>;
};
//Not a Good Approach :-
//But sometime to use react inbuilt functions component still it need to import React

// const Worde=()=>{
//   return React.createElement("h1", {}, "HelloWorld"); 
// }

export default App;
