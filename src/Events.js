import fossoverflow from "./img/fossoverflow.png";
import gsoc from "./img/gsoc.png";
import code4govtech from "./img/code4govtech.png";

const Events = () => {
    return (
        <div className="event">
            <h1 className="heading">Events</h1>
            <div className="underline heading"></div>
            <div className="event-container">
                <div className="event-item">
                    <img src={fossoverflow} alt="FOSS Overflow" id="fossoverflow" />
                    <span>FOSS Overflow</span>
                    <p>FOSS Overflow is a program by OpenLake and GDSC IIT Bhilai that helps students to get started with the world of open source by helping them build real world open sourced projects under guidance of awesome mentors.</p>
                </div>
                <div className="event-item">
                    <img src={gsoc} alt="GSoC" id="gsoc" />
                    <span>GSoC</span>
                    <p>Google Summer of Code is a global, online program focused on bringing new contributors into open source software development. GSoC Contributors work with an open source organization on a 12+ week programming project under the guidance of mentors.</p>
                </div>
                <div className="event-item">
                    <img src={code4govtech} alt="Code 4 GovTech" id="cfgt" />
                    <span>Code 4 GovTech</span>
                    <p>Code for GovTech (C4GT) is a unique program aimed at creating India's first active open-source community of coders that can build and contribute to global Digital Public Goods. </p>
                </div>
            </div>
        </div>
    );
}

export default Events;