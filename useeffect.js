const { useState, useEffect } = require("react");


function Example(){
    const [count,setCount] = useState(0);

    useEffect(()=> {
        document.title = `you clicked ${count}`;
    }, [count]);

    return(
        <>
        <p>you clicked {count}</p>
        <button onClick={() => setCount(count+1)}>click me</button>
        </>
    );
}

export default Example;