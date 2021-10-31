import React from 'react';

import Carosel from '../Carosel/Carosel';
import PrimiumService from '../PremiumService/PrimiumService';

import Services from '../Services/Services';
import Speciality from '../Speciality/Speciality';
import './Home.css'

const Home = () => {
    return (
        <div>

            <Carosel></Carosel>
            <Speciality></Speciality>
            <Services></Services>
            <PrimiumService></PrimiumService>

        </div>
    );
};

export default Home;