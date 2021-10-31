import React, { useEffect, useState } from 'react';
import AllOrder from '../AllOrder/AllOrder';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([])

    useEffect(() => {
        fetch('https://morning-retreat-37845.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])


    const handleDelete = (id) => {
        const url = `https://morning-retreat-37845.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Do you want to delete?')
                    const remaining = allOrders.filter(order => order._id !== id);
                    setAllOrders(remaining)
                }

            })
    }


    return (
        <div>
            <h2 className='orders-title my-4'>Manage All Orders</h2>
            {
                allOrders.map(allorder => <AllOrder
                    key={allorder._id}
                    allOrder={allorder}
                    handleDelete={handleDelete}

                ></AllOrder>)
            }
        </div>
    );


};

export default ManageOrders;