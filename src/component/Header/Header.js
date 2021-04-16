import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../images/logo.jpg';
import { Link, useParams } from 'react-router-dom';

const Header = (props) => {
    // const {isSignedIn} = useParams();
    const {isSignedIn, name} = props.visitor; 
    // console.log(isSignedIn);


    return (
        <div className="header bg-dark text-white">
            <nav className="navbar navbar-expand-lg navbar-light navbar-width">
                <div className="container">
                    <a className="navbar-brand text-white" href="#">
                        <span className="text-warning font-weight-bold">Your</span> Drive
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" style={{color: 'white'}} to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Destination</a> */}
                                <Link className="nav-link" style={{color: 'white'}} to="/order">Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{color: 'white'}} to="/admin">Admin</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{color: 'white'}} href="#">Deals</a>
                            </li>                            
                        </ul>
                        {/* <button className="btn btn-outline-success me-2" type="button"><Link className="text-decoration-none text-dark" to="/login">Login</Link></button> */}
                        {
                            (props.visitor.isSignedIn) ? <button className="btn btn-outline-success me-2" type="button"><Link className="text-decoration-none text-white" to="/login">{name}</Link></button>
                            :
                            <button className="btn btn-outline-success me-2" type="button"><Link className="text-decoration-none text-white" style={{color: 'white'}} to="/login">Login</Link></button>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;