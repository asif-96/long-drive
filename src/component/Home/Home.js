import React, { useEffect, useState } from 'react';
import './Home.css';
import ShowVehicle from '../ShowVehicle/ShowVehicle';

const Home = () => {

    const [showVehicles, setShowVehicles] = useState([]);

    useEffect(() => {
        // fetch(`http://localhost:5000/showVehicles`)
        fetch(`https://immense-spire-97470.herokuapp.com/showVehicles`)
        .then(res => res.json())
        .then(data => setShowVehicles(data))
    }, [])
    return (
        <div className="container pt-5 m-auto">
            <div className="row">
            {
                showVehicles.map(vh => <ShowVehicle vh={vh}></ShowVehicle>)
            }
            </div>
        </div>
    );
};

export default Home;