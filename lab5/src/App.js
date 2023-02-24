//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Stopwatch from './components/DurationExercise';
import Counter from './components/RepetitionExercise';
import Movement from './components/compoundMovement';

const durArray = [
  {name: "Running"},
  {name: "Plank"}
];
const repArray = [
  {name: "Push Ups"},
  {name: "Pull Ups"}
];
const luArray = [
  {name: "Squats"}
];



export default function App(startTime, runStartTime){
  let [currentCount, setCurrentCount] = useState(0)
  let [displayComponent, setDisplayComponent] = useState(-1)
  let components = [
    <Stopwatch name={<>{durArray.map(({name}) => (<h2>{name}</h2>))}</>
  } minutes={2}
  startTime={startTime} runStartTime={runStartTime}></Stopwatch>,
    <Counter name={<>{repArray.map(({name}) => (<h2>{name}</h2>))}</>
  } count={currentCount}
  setCount={setCurrentCount} message={""}></Counter>,
  <Movement name={<>{repArray.map(({name}) => (<h2>{name}</h2>))}</>
  } count={currentCount}
  setCount={setCurrentCount} message={""}></Movement>
   
  
  ]

     return (
    (displayComponent !== -1 ?
      <>
      {displayComponent !== -1 ? components[displayComponent] :undefined}
      <button onClick={() => setDisplayComponent(-1)}>Back</button>
      </>
      : <>
      <h1> Exercise App </h1>
      {repArray.map(({name}) => (
        <p>
          <button style={{"fontSize" : "1em"}}onClick={() => setDisplayComponent(1)}>{name}</button>
        </p>
      ))}

      {durArray.map(({name}) => (
        <p>
          <button onClick={() => setDisplayComponent(0)}>{name}</button>
        </p>
      ))}

        {luArray.map(({name}) => (
        <p>
          <button onClick={() => setDisplayComponent(2)}>{name}</button>
        </p>
      ))}
      </>
    )
  );
      }
