import React, { useEffect, useState } from 'react';

const useDatabase = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://morning-retreat-37845.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return {
        services,
        setServices
    }
};

export default useDatabase;