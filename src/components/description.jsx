import './description.css'
import book from '../assets/book.svg'
import watch from '../assets/watch.svg'
import hat from '../assets/hat.svg'
import live from '../assets/live.svg'
import adBlocker from '../assets/adblock.svg'

export default function Description() {
    return (
        <div className='description'>
            <h1>Access curated courses worth</h1>
            <span id='price'>₹ 18,500 </span>
            <span>at just </span>
            <span id='discount'>₹ 99</span>
            <span> per year!</span>
            <div>
                <span className='benifit'>
                    <img src={book} alt="" />
                    <h2><span style={{color:'#0096FF'}}>100+</span> job relevant courses</h2>
                </span>
                <span className='benifit'>
                    <img src={watch} alt="" />
                    <h2><span style={{color:'#0096FF'}}>20,000+</span> hours of video content</h2>
                </span>
                <span className='benifit'>
                    <img src={live} alt="" />
                    <h2><span style={{color:'#0096FF'}}>Exclusive</span> webinar access</h2>
                </span>
                <span className='benifit'>
                    <img src={hat} alt="" />
                    <h2>Scholarship worth <span style={{color:'#0096FF'}}>₹94,500</span></h2>
                </span>
                <span className='benifit'>
                    <img src={adBlocker} alt="" />
                    <h2><span style={{color:'#0096FF'}}>Ad free </span>learning experience</h2>
                </span>
            </div>
        </div>
    )
}