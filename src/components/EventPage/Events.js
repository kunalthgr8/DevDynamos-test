import FossOver from "../img/fossoverflow.png";
import GSOC from "../img/gsoc.png";
import Code4Gov from "../img/code4govtech.png";
import './Events.css';
const Events = () => {


    return (

        <div className="eventpage">

            {/* This Is heading */}

            <div className='events-heading'>
                Events
                <hr className='events-hr'></hr>
            </div>

            {/* This is main content box */}

            <div className='container-events'>
                {/* This is Card for FossOverflow */}
                <div className='card'>
                    <div className="img-events">
                        <img src={FossOver} alt="Foss OverFlow" />
                    </div>
                    <div className="content-events">
                        <h2><a href='https://fossoverflow.dev/' target="_blank">Foss Overflow</a></h2>
                        <p>FOSS Overflow is a program by OpenLake and GDSC IIT Bhilai that helps students to get started with the world of open source by helping them build real world open sourced projects under guidance of awesome mentors.</p>
                    </div>
                </div>
                {/* This is Card for GSOC */}
                <div className='card'>
                    <div className="img-events">
                        <img src={GSOC} alt="GSOC" />
                    </div>
                    <div className="content-events">
                        <h2><a href='https://summerofcode.withgoogle.com/' target="_blank">GSoC</a></h2>
                        <p>Google Summer of Code is a global, online program focused on bringing new contributors into open source software development. GSoC Contributors work with an open source organization on a 12+ week programming project under the guidance of mentors.</p>
                    </div>
                </div>
                {/* This is Card for CODE 4 GOVTECH */}
                <div className='card'>
                    <div className="img-events">
                        <img src={Code4Gov} alt="Code 4 GovTech" />
                    </div>
                    <div className="content-events">
                        <h2><a href='https://www.codeforgovtech.in/' target="_blank">Code 4 GovTech</a></h2>
                        <p>Code for GovTech (C4GT)  is a unique program aimed at creating India's first active open-source  community of coders that can build and contribute to global Digital Public Goods. Use technology to create large scale impact.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Events;