import "./NumCard.css";
import CountUp from 'react-countup';
import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

const NumCard = ({ icon, number, label }) => {

    const [counterOn, setCounterOn] = useState(false);
    return (
        <div className="counter-card">
            <img src={icon} alt="Icon" className="num-card-icon" />
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className="num-card-counter">
                    {counterOn && <CountUp start={0} end={number} duration={1.5} delay={0} />}
                    +
                </div>
            </ScrollTrigger>
            <p className="num-card-label">{label}</p>
        </div>
    );
}

export default NumCard;