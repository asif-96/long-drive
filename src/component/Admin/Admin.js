import React, { useEffect, useState } from 'react';
import '../Admin/Admin.css';
import { BsPlus, BsFillGridFill, BsPencilSquare } from "react-icons/bs";
import AddVehicle from '../AddVehicle/AddVehicle';
import ManageVehicle from '../ManageVehicle/ManageVehicle';


const Admin = () => {

    const [showOutput, setShowOutput] = useState(false);
    const [manageOutput, setManageOutput] = useState(false);

    const [manageVehicle, setManageVehicle] = useState([]);

    const handleAddVehicle = () => {
        setShowOutput(true);
        setManageOutput(false);
    }
    const handleManageVehicle = () => {
        setManageOutput(true);
        setShowOutput(false);
    }

    useEffect(() => {
        fetch('https://immense-spire-97470.herokuapp.com/showVehicles')
            .then(res => res.json())
            .then(data => setManageVehicle(data))
    }, [])


    return (
        <div className="container">
            <h4 className="display-5 p-2">Admin Panel</h4>
            <div className="row p-3">
                <div className="menu col-md-3">
                    <ul>
                        <li onClick={handleManageVehicle}><BsFillGridFill /> Manage Vehicle</li>
                        <li onClick={handleAddVehicle}><BsPlus /> Add Vehicle</li>
                        <li><BsPencilSquare /> Edit Vehical</li>
                    </ul>
                </div>
                <div className="output-field col-md-8">
                    {showOutput ? <AddVehicle /> : null}
                    {/* {
                        manageVehicle.map(mv => manageOutput ? <ManageVehicle mv={mv}></ManageVehicle> : null)
                    } */}
                    {
                        manageOutput ? <table class="table table-striped">
                            <thead>
                                <tr>
                                    {/* <th scope="col">#</th> */}
                                    <th scope="col">Vehicle Name</th>
                                    <th scope="col">Model</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {manageVehicle.map(mv => <ManageVehicle mv={mv}></ManageVehicle>)}
                            </tbody>
                        </table> : null
                    }
                </div>
            </div>
        </div>
    );
};

export default Admin;