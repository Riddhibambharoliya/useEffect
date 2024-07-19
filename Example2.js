import { useEffect, useState } from "react";


function Example2(){
    const [count,setcount] = useState(0);

    useEffect(() => {
       document.title = `you entered the ${count}`;
    },[count]);

    return(
        <>
        <p>enterd value is {count}</p>
        <button onClick={()=> setcount(count+1)}>baby click me</button>
        </>
    );
}
export default Example2;