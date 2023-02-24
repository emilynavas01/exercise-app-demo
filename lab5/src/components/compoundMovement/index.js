function Movement(props){
    return (
        <>
        <p>{props.name}</p>
        <div>Reps: {props.count}</div><br></br>
        <button onClick={() => props.setCount (count=>count+1)}>Add count</button>
        <button onClick={() => props.setCount (0)}>Reset</button>
 </>
     )
}

export default Movement
