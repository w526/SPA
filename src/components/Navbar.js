import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <Link className="navbar-brand" to='/'>SPA Example</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                        <a class="nav-link" href="/about">About</a>
                        <a class="nav-link" href="contactus">Contact Us</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}