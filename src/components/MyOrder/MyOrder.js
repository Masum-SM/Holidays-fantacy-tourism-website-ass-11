import React from 'react';
import './MyOrder.css'

const MyOrder = (props) => {

    const { data, service, _id } = props.order
    const { handleDelete } = props
    console.log(service)
    return (
        <div className='mx-auto'>
            <div className='order-info'>
                <div className='row'>
                    <div className='col-4'>
                        <img className='order-img me-2' src={service.img} alt="" />
                    </div>
                    <div className='col-8'>
                        <h6>{service?.name}</h6>
                        <h4>Price : {service.price}</h4>
                        <h5>Status : {data.status}</h5>
                    </div>
                </div>

                <button className='log-icon my-1' onClick={() => { handleDelete(_id) }}><i className="fas fa-trash-alt"></i> Remove Order</button>
            </div>
        </div>
    );
};

export default MyOrder;