import "./App.css";

//state in a react is a plain js object used by react to represent
// a piece of info about components current situation. It is completely
// managed by the component itself. Whenever we call something as a function
// and it starts with use in react we called that a hook

import { useState, useEffect } from "react";

//below is a component-1
const Person = (props) => (
  <>
    <h1 className="text-3xl font-bold underline">Name: {props.name}</h1>
    <h1>Age: {props.age}</h1>
  </>
);

const App = () => {
  // creating state: alert: never modify state manually change by setter functions
  const [counter, setCounter] = useState(0);

  // useEffect(()=>{
  //   setCounter(100);
  // },[]);   //[] is a dependency allow change of state

  useEffect(() => {
    alert("You changed counter to " + counter);
  }, [counter]);

  const name = null;
  // const isNameShowing = false;

  return (
    <div className="App bg-green-400" >
      {
        /* <h1> Hello, {isNameShowing? name:"someone"} </h1> */
        name ? (
          <>
            <h1>Hello {name}</h1>
          </>
        ) : (
          <>
            <h1>Hello someone</h1>
            <h1>There is no name</h1>
          </>
        )
      }
      {/* below is the component-1 calling by react tag <component/> */}

      <Person name={"Nishan"} age={12} />
      <Person name={"Ariful"} age={20} />
      <Person name="Alam" age={100} />

      {/* state counting */}

      <div>
        <h1>Counter:</h1>
        <button
          onClick={() =>
            setCounter((prevCount) => {
              return prevCount - 1;
            })
          }
        >
          -
        </button>

        <h1>{counter}</h1>
        <button
          onClick={() =>
            setCounter((prevCount) => {
              return prevCount + 1;
            })
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;
