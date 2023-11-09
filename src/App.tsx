import { useEffect } from "react";
import { selectRandomNumber,randomArray } from "./algoritm";

function App() {

  useEffect(()=>{

  },[])

  return (
    <div className="App">
      {/* {selectRandomNumber([1,2,3,4,5,6,7,8,9])} */}
      {randomArray()}
    </div>
  );
}

export default App;
