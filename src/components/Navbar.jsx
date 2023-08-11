import { useState } from 'react';
import './navbar.css';

export default function Navbar() {

    const [value1, setValue1] = useState('Courses');
    const [value2, setValue2] = useState('Programs');

    const handleChange1 = (event) => {
        setValue1(event.target.value);
    };

    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };


    return (
        <div className='navbar'>
            <div className='left-content'>
                <h1>EDYODA</h1>
                <select value={value1} onChange={handleChange1}>
                    <option value='Courses'>Courses</option>
                    <option value='Learning'>Learning</option>
                    <option value='Discussion'>Discussion</option>
                    <option value='Jobs'>Jobs</option>
                    <option value='More'>More</option>
                </select>
                <select value={value2} onChange={handleChange2}>
                    <option value='Programs'>Programs</option>
                    <option value='Degree'>Degree</option>
                    <option value='Certificate'>Certificate</option>
                </select>
            </div>
            <div className='right-content'>
                <button className='login-btn'>Login</button>
                <button className='signup-btn'>Join Now</button>
            </div>
        </div>
    )
}