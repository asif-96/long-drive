import React from 'react';
import '../ShowVehicle/ShowVehicle.css';
import { BsCheckBox } from "react-icons/bs";
import { Link } from 'react-router-dom';

const ShowVehicle = ({ vh }) => {
    return (
        <div className="col-md-3 p-2 card-vehicle">
            <img src={vh.imageURL} style={{ height: '200px', width: '100%' }} alt="" />
            <h3 className="mt-2 font-weight-bold">{vh.vehicleName}</h3>
            <div className="info">
                <p>{vh.model}</p>
                <p>$: {vh.price}</p>
            </div>
            <Link to="/order">
                <button className="btn btn-primary mb-2"><BsCheckBox /> Book Now</button>
            </Link>
        </div>
    );
};

export default ShowVehicle;