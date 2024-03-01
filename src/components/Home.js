import React, { useEffect, useState } from 'react';
import bg from '.././img/bg.jpg'

// useEffect



const Home = () => {

    const [counter,setCounter]=useState(0)

    useEffect(()=>{
        console.log('hi');
    },[counter])


    return (
        <div style={{
            background:`url(${bg}) no-repeat/cover/center`,
            width:'100%',
            height:'550px',
        }}>
            <h1>{counter}</h1>
           <button onClick={()=>setCounter(counter+1)}>++</button>
        </div>
    );
};

export default Home;