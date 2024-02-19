import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { APIKEY } from '../../ApiKey';

const DetailPage = () => {

    const [detaile,setDetaile]=useState({})
    const movie=useParams()
    const detaiPage=async()=>{
        const url=await axios(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${APIKEY}&language=en-US`)
        const {data}=await url
        setDetaile(data)
    }

    
    console.log(detaile);
    useEffect(()=>{
        detaiPage()
    },[])

    const {title,poster_path,overview,runtime,vote_average}=detaile
    return (
        <div id='detail'
        style={{
            width:'100%',
            background:'grey',
            color:'white'
        }}>
            <div className='container'>
                    {
                        <div className='detail'>
                            <img
                            style={{boxShadow:'0 20px 15px black'}}
                             src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`}></img>
                            <div className='detail-info'>
                                <h1>{title}</h1>
                                <p>{overview}</p>
                                <h2>{Math.round(runtime/60)} h {runtime%60} min</h2>
                                <div className='detail-vote'><h2>{Math.floor(vote_average*10)}<sup>%</sup></h2></div>
                            </div>
                        </div>   
                    }
            </div>
        </div>
    );
};

export default DetailPage;

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US