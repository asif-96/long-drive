import React from 'react';

const ManageVehicle = ({ mv }) => {

    const deleteItem = (id) => {
        fetch(`https://immense-spire-97470.herokuapp.com/deleteItem/${id}`, {
            method: 'DELETE',
            // headers: {
            //     'Content-type': 'application/json'
            // }
        })
            .then(res => res.json())
            .then(result => {
                console.log('Deleted item successfully!', result);
            })
        console.log(id);
    }

    return (
        <tr>
            <td>{mv.vehicleName}</td>
            <td>{mv.model}</td>
            <td>{mv.price}</td>
            <td>
                <button className="btn btn-success mr-1">Edit</button>
                <button onClick={() => deleteItem(mv._id)} className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
};

export default ManageVehicle;