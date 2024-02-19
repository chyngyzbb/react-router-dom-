import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { APIKEY } from '../../ApiKey';
import Slider from "react-slick";
import person from '../../img/pp.png'
// import { Link, useParams } from 'react-router-dom';

const Actors = ({movieId}) => {

    // const movi=useParams()

    const [actors,setActors]=useState([])
    const getActors=async(ID,apikey)=>{
        try{
           const url=await axios(`https://api.themoviedb.org/3/movie/${ID}/credits?api_key=${apikey}&language=en-US`)
             const {data}=await url
            setActors(data.cast) 
        }catch(e){
            console.log(e);
        }
        
     }

     console.log(actors);
     useEffect(()=>{
        getActors(movieId,APIKEY)
     },[])


     const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2
      };

      

    //   <Link to={`/movies/detail-page/${el.id}`}><img src={`https://media.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}></img></Link>

    return (
        <div>
            <div id='actors'>
                <div className='container'>
                    <h2>В главных ролях</h2>
                    <div className='actors'>                       
                       <Slider {...settings}>
                       {
                            actors.map((el)=>(
                           
                            <div className='actors-card'>
                           {
                            el.profile_path? <img src={`https://media.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`}></img>
                            : <img width="200" left="40" height="180" src={person}></img>
                           }                        
                            <h4>{el.name}</h4>
                            <h5>{el.character}</h5>
                            
                            </div>
                          
                            ))
                        }
                       </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Actors;

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US