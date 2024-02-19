import React from 'react';
import { Link } from 'react-router-dom';

const MoviesCard = ({el}) => {
    return (
        <div key={el.id} className='movies-card'>
                           <Link to={`/movies/detail-page/${el.id}`}><img src={`https://media.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}></img></Link>
                            <div className='movies-info'>
                            <h4>{el.title}</h4>
                            <h5>{el.popularity}</h5>
                            <h5>{el.vote_average}</h5>
                            </div>
                        </div>
    );
};

export default MoviesCard;