import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../Header/Header.css';
import './Signup.css';
import github from '../../images/github.png';
import google from '../../images/google (1).png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { UserContext } from '../../App';


const Signup = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    // Google authentication
    const provider = new firebase.auth.GoogleAuthProvider();
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    // User login by google authentication
    const handleGoogleLogIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setLoggedInUser(signedInUser);
                history.replace(from);
                // console.log(displayName, email, photoURL);
            }).catch(e => {
                console.log(e.message);
            });
    }


    // Github Authentication
    var githubProvider = new firebase.auth.GithubAuthProvider();
    // User login by github authentication

    const handleGithubLogIn = () => {
        firebase
            .auth()
            .signInWithPopup(githubProvider)
            .then((res) => {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setLoggedInUser(signedInUser);
                history.replace(from);
                console.log(displayName, email, photoURL);
                // ...
            }).catch((e) => {
                console.log(e.message);
            });
    }



    
    return (
        <div className="signup-container">
            <div className="form-container">
                <h3 className="text-dark">Create an account</h3>
                <form>
                    <input type="text" name="name" placeholder="Name" required/>
                    <input type="email" name="email" placeholder="Username or Email" required/>
                    <input type="password" name="password" placeholder="Password" required/>
                    <input type="password" name="confirmPassword" placeholder="Confirm password" required/>
                    <input type="submit" className="btn btn-success mt-3" value="Signup"/>
                    {/* <button type="button" className="btn btn-success mt-3">Success</button> */}
                </form>
                <p className="text-center mt-2">Already have an account? <Link to="/login">Login</Link></p>
                <h6 className="text-center">------ Or ------</h6>
                <button className="mt-3 mb-2 p-1" onClick={handleGithubLogIn}>
                    <img src={github} alt="" width="40" height="40" /> Continue with Github
                </button>
                <button className="mt-3 p-1" onClick={handleGoogleLogIn}>
                    <img src={google} alt="" width="35" height="35" /> Continue with Google
                </button> 
            </div>
        </div>
        
    );
};

export default Signup;