import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';


const LeftSide = ({children}) => {
    const navigate = useNavigate()
    const handleBookingBtn = () => {
        navigate('/home/booking')
    }
    return (
        <div className='text-white'>
            <h1>Cox's bazar</h1>
            {children ? <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p> : <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>}
            {!children && <button onClick={handleBookingBtn} className='btn btn-warning'>Booking <FaArrowRight /></button>}
        </div>
    );
};

export default LeftSide;