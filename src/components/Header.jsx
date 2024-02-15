import React from 'react';
import Logo from '../img/Rectangle.svg'
import {Link, NavLink} from "react-router-dom"
const Header = () => {
    return (
        <div>
            <div id="header">
                <div className="container">
                    <div className="header">
                        <img src={Logo} alt="img" />
                        <div className="nav-bar">
                            <Link to={'/'}>Home</Link>
                            <Link to={'/about'}>About</Link>
                            <Link to={'/recipes'}>Recipes</Link>
                            <Link to={'/blog'}>Blog</Link>
                            <Link to={'/meat'}>Meat</Link>
                            <Link to={'/suppport'}>Suppport</Link>


                        </div>
                        <div className="btn">
                            <button className='sign'>Sign</button>
                            <button className='demo'>Request demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;