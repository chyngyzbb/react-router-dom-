import React from 'react';
import {data} from './Data/Data'

const Recipes = () => {
    return (
        <div className='container'>
            <h1>Вкусные рецепты</h1>
            {
                data.map(el=>(
                    <div>
                        <h3>{el.name}</h3>
                        <ul>
                            {
                                el.ingredients.map((ingredient)=>(
                                    <li>{ingredient.name}</li>
                                ))
                            }
                        </ul>
                        <h3>Инструкция по приготовлению</h3>
                        <ol>
                            {
                                el.steps.map((step)=>(
                                    <li>{step}</li>
                                ))
                            }
                        </ol>
                        <hr></hr>
                    </div>
                    
                    
                ))
            }
        </div>
    );
};

export default Recipes;