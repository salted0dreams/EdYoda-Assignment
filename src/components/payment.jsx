import './payment.css'
import { useState } from 'react'
import iconClock from '../assets/icon-clock.svg'
import razorpay from '../assets/razorpay.png'

export default function Payment() {
    const [price, setPrice] = useState(0);

    const totalPrice = (e) => {
        setPrice(price => price + parseInt(e.target.value));
    }
    const resetRadioState = () => {
        setPrice(0);
        const radio = document.querySelectorAll('input[type="radio"]');
        radio.forEach(radio => {
            radio.checked = false;
        }
        )
    }


    return (
        <div className='offers'>
            <div className='steps'>
                <div>
                    <span className='step'>1</span>
                    <span>Sign Up</span>
                </div>
                <div>
                    <span className='step'>2</span>
                    <span>Subscribe</span>
                </div>
            </div>
            <span id='header'><h1>Select your subscription plan</h1></span>
            <form action="">
                <div className='plans' style={{ backgroundColor: 'grey' }}>
                    <div className='plan'>
                        <input type="radio" value={179} disabled/> 12 Months subscription
                    </div>
                    <span id='rate'> Total ₹ 99 <span> ₹8/month </span> </span>
                </div>
                <div className='plans'>
                    <div className='plan'>
                        <input type="radio" value={179} onClick={totalPrice} /> 12 Months subscription
                    </div>
                    <span id='rate'> Total ₹ 179 <span> ₹15/month </span> </span>
                </div>
                <div className='plans' >
                    <div className='plan'>
                        <input type="radio" value={149} onClick={totalPrice} /> 6 Months subscription
                    </div>
                    <span id='rate'> Total ₹ 149 <span> ₹25/month </span> </span>
                </div>
                <div className='plans' >
                    <div className='plan'>
                        <input type="radio" value={99} onClick={totalPrice} /> 3 Months subscription
                    </div>
                    <span id='rate'> Total ₹ 99 <span> ₹33/month </span> </span>
                </div>
                <div id='reset'>
                    <button
                        type="reset"
                        onClick={resetRadioState}
                        style={{ backgroundColor: 'red', color: 'white', padding: '8px', borderRadius: '5px', border: 'none', cursor: 'pointer', width: '100px'}}
                    >Reset</button>
                </div>

            </form >
            <hr />
            <div className='total-prev'>
                <span>Subscription Fees</span>
                <span>₹ 18,500</span>
            </div>
            <div className='limited-offer' >
                    <div id='final-disc'>Limited time offer <span style={{color:'black'}}>- ₹18,401</span></div>
                    <div id='validity'>
                        <img src={iconClock} alt="" />
                        <span>Offer valid till 25th March 2023</span>
                    </div>
            </div>

            <div id='total'>
                <span id='total'>Total(Incl. of 18% GST)</span>
                <span id='total-price'>₹ {price}</span>
            </div>

            <div className='btns'>
                <button id='cancel-btn'>Cancel</button>
                <button id='pay-btn'>Proceed to pay</button>
            </div>
            <img src={razorpay} alt="" id='payment-method' />
        </div >
    )
}