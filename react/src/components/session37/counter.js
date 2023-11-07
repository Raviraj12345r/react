import  React,{useState} from 'react';
const Counter = () => {
    const [count, setCount]=useState(0);
    const increment = ()=>{
        setCount(count +1);
    };
    if(count>10){
        alert("Go back to zero")
    }
    const decrement = () => {
        if (count === 0) {
          alert("Error: Count cannot be negative!");
        } else {
          setCount(count - 1);
        }
      };
    const reset = () => {
        setCount(0);
    };
    return(
        <div style={{background:"#E4A11B"}} className='container'>
 <h1 style={{color: "#332D2D"}}>Cunter Using React</h1>
            <p style={{color:"#FBFBFB"}}> Your Current Count: {count}</p>
            <button  className='btn btn-primary' onClick={increment}>Increment</button><br/><br/>
            <button className='btn btn-info' onClick={decrement}>Decrement</button><br/><br/>
            <button className='bt btn-secondary' onClick={reset} >Goback zero</button>
        </div>
    );
    
};

export default Counter;
