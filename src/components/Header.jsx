import React from 'react';
import Logo from '../img/Rectangle.svg'
import { Link, NavLink, useNavigate} from "react-router-dom"
const Header = () => {
    const usenavigate=useNavigate()
    return (
        <div>
            <div id="header">
                <div className="container">
                    <div className="header">
                        <Link to={'/'}><img src={Logo} alt="img" /></Link>
                        <div className="nav-bar">
                            <NavLink to={'/'}>Home</NavLink>
                            <NavLink to={'/toprated'}>TopRated</NavLink>
                            <NavLink to={'/recipes'}>Recipes</NavLink>
                            <NavLink to={'/popular'}>Popular</NavLink>


                        </div>
                        <div className="btn">
                            <button onClick={()=>usenavigate('/')} className='sign'>Sign</button>
                            <button className='demo'>Request demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;