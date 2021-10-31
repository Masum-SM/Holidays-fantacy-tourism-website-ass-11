import React from 'react';
import './Contacs.css'

const Contacts = () => {
    return (
        <div>

            <div className='Contact-header'>
                <img className='con-img' src="/photos/off.jpg" alt="" />
                <h1 className='con-title'>Welcome to Holidays Fantacy Travel</h1>
                <h5 className='con-des'>Holidays Fantacy Travel wants to connect with its client all the time. Feel free to submit your queries regarding visa application, passport booking, or flight booking to connect with our executives immediately. You can also call us or WhatsApp us on the number given on our contact details. Our executives are ready to provide assistance on a 24×7 basis. Connect with us now!</h5>
            </div>
            <div className='contact-container'>
                <div className='row row-cols-1 row-cols-md-2 g-4'>
                    <div className="col addres">
                        <h3> <i className="fas fa-map-marker-alt"></i> Address</h3>
                        <p>Main Building:Lalbug Housing.</p>
                        <p>Informatin Room:1st floor in Main Buildin</p>

                        <p>Location:Lalbug Shoshanghat.</p>
                        <div>
                            <h3><i className="fas fa-clock"></i> Office Our</h3>

                            <p>Saturday to Thursday: 10:00 am to 9:00 pm</p>
                        </div>
                    </div>
                    <div className="col contact">
                        <h3>Contact</h3>
                        <p><i className="fas fa-tty"></i> cell : 02345346</p>
                        <p><i className="fas fa-phone-volume"></i> Phone : 0175325756</p>
                        <p><i className="fas fa-phone-volume"></i> Phone : 0175349896</p>
                        <p><i className="fas fa-phone-volume"></i> Phone : 01753245280</p>
                        <p><i className="far fa-envelope-open"></i> Email:test123@gmail.com</p>
                    </div>

                </div>
            </div>
            <div className='contact-emailname'>
                <h3>Have a question?</h3>
                <h6>Please send a mail</h6>

                <input type="text" name="" id="" placeholder='Name' />
                <input type="email" name="" id="" placeholder='Email' />
                <button>Sumit</button>
            </div>

        </div>
    );
};

export default Contacts;