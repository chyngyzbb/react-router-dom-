import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { APIKEY } from '../ApiKey';

const Popular = () => {

    const [popular,setPopular]=useState([])
    const getPopular=async()=>{
        const res=await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
        const data=await res.data
        setPopular(data.results)
        
    }
console.log(popular);
    useEffect(()=>{
        getPopular()
    },[])

    return (
        <div id='movies'>
            <div className='container'>
                <div className='movies'>
                    {popular.map((el)=>(
                        <div>
                            <img src={`https://media.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}></img>
                            <h4>{el.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Popular;