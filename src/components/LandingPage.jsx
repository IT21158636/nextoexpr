import React from 'react'
import Navebar from './Navebar';
import Home from './Home';
import Services from './Services';
import AboutUs from './AboutUs';
import Product from './Product';
import Newsletter from './Newsletter';
import Myfooter from './Myfooter';
import Contactus from './Contactus';
import Hcontact from './Hcontact';

export default function LandingPage() {
    return (
        <div>
            <Navebar />
            <Home />
            <Services />
            <AboutUs />
            <Product />
            <Hcontact />
            <Contactus />
            <Newsletter />
        </div>
    )
}
