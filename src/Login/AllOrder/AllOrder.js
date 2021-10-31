import React from 'react';
import './AllOrder.css'


const AllOrder = (props) => {
    const { data, service, _id } = props.allOrder;
    const { handleDelete } = props;

    // const handleUpdateStatus = (id) => {
    //     const updateStatus = { status: 'complete' }
    //     const url = `http://localhost:8000/orders/${id}`
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updateStatus)

    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 alert('Update Succesfully')

    //             }
    //         })
    // }
    return (
        <div className='order-info'>
            <div className='row'>
                <div className='col-5'>
                    <img className='order-img me-2' src={service.img} alt="" />
                    <p>Phone : {data?.name}</p>
                    <p>{data.email}</p>
                </div>
                <div className='col-7 mt-2'>
                    <h6>{service?.name}</h6>
                    <h6>{service.duration}</h6>
                    <p>{service.price}</p>
                    <h5>Status : {data?.status}</h5>
                </div>
            </div>
            <button className='log-icon my-1' onClick={() => { handleDelete(_id) }}><i className="fas fa-trash-alt"></i> Remove Order</button>
            {/* <button className='log-icon my-1' onClick={() => { handleUpdateStatus(_id) }}><i className="fas fa-clipboard-check"></i> comfirm Order</button> */}

        </div>
    );
};

export default AllOrder;
