import React from 'react';
import './Speciality.css';

const Speciality = () => {
    return (
        <div className='speiciality-container'>
            <h2 className='speiciality-header'>Why Choose Holidays Fantacy Travel ?</h2>
            <div className='row row-cols-1 row-cols-md-3 g-4 speciality-row'>
                <div className="col ">
                    <div className="card h-100 speiciality-colom">
                        <div><i className="fas fa-globe-asia speciality-icon"></i></div>
                        <div className="card-body">
                            <h5 className="card-title">
                                Diverse Destinations</h5>
                            <p className="card-text sp-txt">Travelmate knows the value of your time and the varieties bucket list of you. We have the innovative team to fulfill your taste of diverse destination.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 speiciality-colom">
                        <div><i className="fas fa-check-circle speciality-icon"></i></div>
                        <div className="card-body">
                            <h5 className="card-title">Easy Tour Confirmation</h5>
                            <p className="card-text sp-txt">A long Tour Confirmation process can’t support you to purchase any tour package. Travelmate has tried to complete the whole process into one call.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 speiciality-colom">
                        <div>  <i className="fas fa-comments speciality-icon"></i></div>
                        <div className="card-body">
                            <h5 className="card-title">
                                Experienced Team</h5>
                            <p className="card-text sp-txt">Travelmate introduces 24/7 support team via online or offline. You can reach us in every method including email, social media or phone call. Just feel free to ask anything.</p>
                        </div>
                    </div>
                </div>

            </div>
            {/* <div >
                <hr className="speiciality-footer" />
            </div> */}
        </div>
    );
};

export default Speciality;