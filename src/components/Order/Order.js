import React, { useEffect, useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import MyOrder from '../MyOrder/MyOrder';
import './Order.css'
// import { useParams } from 'react-router';

const Order = () => {
    // const { id } = useParams();
    const { user } = useFirebase()
    const [orders, setOrders] = useState([]);
    const [myOrder, setMyOrder] = useState([]);



    useEffect(() => {
        fetch('https://morning-retreat-37845.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    // const foundMyorders = orders.filter(order => order[1]?.data?.email == user.email)
    // setMyOrder(foundMyorders)
    useEffect(() => {
        const foundMyorders = orders.filter(order => order?.data?.email == user.email)
        // console.log(order)s
        setMyOrder(foundMyorders)
    }, [orders])


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
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining)
                }

            })
    }

    // window.location.reload()

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <h2 className='orders-title my-4'>My Orders</h2>
                    {
                        myOrder.map(or => <MyOrder
                            key={or._id}
                            order={or}
                            handleDelete={handleDelete}
                        ></MyOrder>)

                    }
                </div>
            </div>
        </div>
    );
};

export default Order;