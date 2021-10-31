import React, { useEffect, useState } from 'react';
import './PlaceOrder.css'

import { useForm } from 'react-hook-form';
import { useHistory, useLocation, useParams } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import axios from 'axios';

const PlaceOrder = () => {
    // const history = useHistory();
    // const location = useLocation();

    const { id } = useParams();

    const [service, setServie] = useState([]);
    console.log(service)

    useEffect(() => {
        fetch(`https://morning-retreat-37845.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setServie(data))
    }, [])
    console.log(service)
    console.log(id)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useFirebase();

    const onSubmit = data => {
        console.log(data)
        const orderInfo = {
            data,
            service


        }

        axios.post('https://morning-retreat-37845.herokuapp.com/orders', orderInfo)
            .then(res => {
                alert('Added successfully')
                reset()
            })
            .then(result => {
                if (result?.insertedId) {
                    alert('Order processed successfully');

                    reset()
                }

            })
    }
    return (
        <div className='w-75 mx-auto py-4'>
            <div className='row row-cols-1 row-cols-md-2 g-4"'>
                <div className="col">
                    <div className='card'>
                        <img src={service.img} alt="" />
                        <h4>{service.name}</h4>
                        <p>{service.price}</p>
                    </div>
                </div>
                <div className="card text-center ">
                    <div className="col mx-auto">

                        <form className='placeorder-form mx-auto' onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user.displayName} {...register("name", { required: true })} />
                            {/* {errors.name && <span>This field is required</span>} */}
                            <input defaultValue={user.email} {...register("email", { required: true })} />


                            <input defaultValue="Pending" {...register("status", { required: true })} />

                            {errors.status && <span>This field is required</span>}

                            <input placeholder='Address'  {...register("address")} />
                            <input placeholder='City'  {...register("city")} />
                            <input placeholder='Phone Number'  {...register("Phone")} />



                            <input type="submit" />
                        </form>
                    </div>
                </div>


            </div>



        </div>
    );
};

export default PlaceOrder;