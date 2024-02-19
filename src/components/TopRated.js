import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { APIKEY } from '../ApiKey';
import MoviesCard from './page/MoviesCard';

const TopRated = () => {

    
    const [topRated,setTopRated]=useState([])
    const getTopRated=async()=>{
        const url=await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`)
        const {results}=await url.data
        setTopRated(results)
    }
    console.log(topRated);
    useEffect(()=>{
        getTopRated()
    },[])
    return (
        <div id='movies'>
            <div className='container'>
                <div className='movies'>
                    {topRated.map((el)=> <MoviesCard el={el}/>)}
                </div>
            </div>
        </div>
    );
};

export default TopRated;