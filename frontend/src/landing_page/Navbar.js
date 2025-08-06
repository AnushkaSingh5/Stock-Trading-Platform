import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#fff"}} >
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <Link class="navbar-brand" to='/'>
                    <img src='media/images/logo.svg' alt='Logo' style={{width:"30%"}} />
                </Link>
                <div class="d-flex">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" to='/signup'>
                                Signup
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to='/about'>
                                About
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to='/products'>
                                Products
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to='/pricing'>
                                Pricing
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to='/support'>
                                Support
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}

export default Navbar;