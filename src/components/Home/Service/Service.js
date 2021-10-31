import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import './Service.css'

const Service = ({ service }) => {
    const { img, name, des, duration, price, _id } = service;
    // const [serviceInfo, setServiceInfo] = useState([]);
    // const history = useHistory()
    // const hanldeOrder = () => {
    //     setServiceInfo(service)
    //     // history.push('/placeorder')
    // }
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{des}</p>
                    </div>
                    <div>
                        <p><small>Duration : {duration}</small></p>
                        <p>Cost : {price}</p>
                    </div>
                    <div className='mb-4'>
                        {/* <button className='mb-3 bg-warning' onClick={hanldeOrder}>Book Now</button> */}
                        <Link to={`/placeorder/${_id}`}>
                            <button className='mb-3 bg-warning'>Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;