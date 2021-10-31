import React from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://morning-retreat-37845.herokuapp.com/services', data)
            .then(res => {
                alert('Added successfully')
                reset()
            })
    };
    return (

        <div className='add-servic'>
            <h2>Please a add service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img")} placeholder='Image Url' />
                <input {...register("name", { required: true, maxLength: 40 })} placeholder='Name' />
                <textarea {...register("des")} placeholder='Description' />
                <input type="text" {...register("duration")} placeholder='Duration' />
                <input type="number" {...register("price")} placeholder='Cost' />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;