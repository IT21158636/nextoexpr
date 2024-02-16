import React from 'react';
import Contactus from './Contactus';
import TypeformEmbed from './TypeformEmbed';
import Nabarc from './Nabarc';

function ContactPage() {
    return (
        <div>
            <Nabarc/>
            <div className="section-title text-center" style={{ marginTop: '60px' }}>
                <h1 className='text-6xl text-#1E1C34 font-semibold mb-3'><br></br>You like coffee? Us too! have a chat </h1>
            </div>
            <br></br>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                <TypeformEmbed />
            </div>

            <Contactus />
        </div>
    );
}

export default ContactPage;
