import React, { useEffect, useState } from 'react';

// useEffect



const Home = () => {

    const [counter,setCounter]=useState(0)

    useEffect(()=>{
        console.log('hi');
    },[counter])


    return (
        <div>
            <h1>{counter}</h1>
           <button onClick={()=>setCounter(counter+1)}>++</button>
        </div>
    );
};

export default Home;