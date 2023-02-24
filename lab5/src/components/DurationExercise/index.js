import {useCallback, useEffect, useState} from 'react'

function Stopwatch({name, minutes}) {
    const [startTime, setStartTime] = useState(0)
    const [intervalID, setIntervalID] = useState(undefined)
    const [value, setValue] = useState(0)

    function reset() {
        setStartTime(undefined);
        setIntervalID(0);
        setValue(0);
    }

    let callback = useCallback(() => {
        setInterval(() => {
            setValue(value=> value+1)
        }, 10)
        setStartTime(Date.now() + minutes*60*1000)
    }, [minutes])

    useEffect(() => (() => {
        clearInterval(intervalID)
    }))

    let currentTime
    if(startTime) {
        setInterval( () => {
            setValue(value => value+1)
        }, 10)
    }
    if(startTime !== undefined) {
        currentTime = new Date(Date.now()-startTime.valueOf())
    }


    return(
        <>
        <p>{name}</p>
        <div>
            <p>Time:</p>
            {startTime ?
            `${currentTime.getSeconds()}:${currentTime.getMilliseconds()}`
            :"00:00" }
        </div>
        <button onClick={() => callback()}>Start</button>
        <button onClick={() => reset()}>Reset</button>
         </>
    )

    
 }

 export default Stopwatch