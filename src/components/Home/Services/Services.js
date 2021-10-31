import React, { useEffect, useState } from 'react';

import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://morning-retreat-37845.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    return (
        <div id='services'>
            <h2 className='services-title mt-5'>Our Runnning Packages</h2>
            <div className='row row-cols-1 row-cols-md-2 g-4 servics-container'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}

                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;