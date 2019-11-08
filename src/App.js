import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className='card'>
            <h1>CREDIT CARD</h1>
            <img src='https://cdn.freebiesupply.com/logos/large/2x/chip-1-logo-png-transparent.png' alt='ss' width='60px' />
            <div className='card-infos'>
                <div className='infos'>
                    <p className='num'>7253   5648   5848  7548</p>
                    <div className='container'>
                        <p className='pin'>5422</p>
                        <div>
                            <p className='v-t'>MONTH/YEAR</p>
                            <div className='valid-thru'>
                                <p className='v-t'>VALID<br />THRU</p>
                                <p>></p>
                                <p>11/50</p>
                            </div>
                        </div>
                    </div>

                    <p className='holder'>CARDHOLDER</p></div>
                <img className ='imgg' src='https://krebsonsecurity.com/wp-content/uploads/2012/03/mcvisa.png' alt='sss' width='80px' />

            </div>
        </div>
    )

}
export default App