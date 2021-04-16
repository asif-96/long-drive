import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const AddVehicle = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        // console.log({...data,imageURL});
        const eventData = {
            vehicleName: data.name,
            model: data.model,
            price: data.price,
            imageURL: imageURL
        }
        // const url = `http://localhost:5000/admin`;
        const url = `https://immense-spire-97470.herokuapp.com/admin`;
        console.log(eventData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response!', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '49a1a5294c7364eef4344d47e5486bae');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                // console.log(response);
                // console.log(response.data.data.display_url);
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")}  type="text" placeholder="Enter Vehicle Name" />
                <br />
                <input {...register("model")} type="text" placeholder="Enter Model" />
                <br />
                <input {...register("price")} type="number" placeholder="Enter Price" />
                <br />
                <input type="file" onChange={handleImageUpload} />
                <br />
                <input className="btn btn-success" type="submit" />
            </form>
            
        </div>
    );
};

export default AddVehicle;