import React from 'react'
import Logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'
import Recipes from '../pages/Recipes'


export default function NavBar() {
    return (
        <nav className='navbar navbar-expand-sm navbar-light bg-light'>
            <Link to={'/'} className="navbar-brand" >
                <img src={`${Logo}`} alt='logo' />
            </Link>

            <div className='collapse navbar-collapse show ml-sm-5'>
                <ul className='navbar-nav'>
                    <li className='navbar-item'><Link className='nav-link' to={'/'}>Home</Link></li>

                    <li className='navbar-item'><Link className='nav-link' to={'/recipes'}>Recipes</Link></li>                    
                </ul>
            </div>
        </nav>
    )
}