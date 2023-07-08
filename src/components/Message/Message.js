import left_arrow from "../img/left-arrow.png";
import right_arrow from "../img/right-arrow.png";
import rose from "../img/Rose-modified.png";
import jasmine from "../img/Jasmine-modified.png";
import tulip from "../img/Tulip-modified.png";

import MessCard from "../MessageCard/MessCard";

const Message = () => {
    return (
        <div className="message">
            <h1 className="heading">Message</h1>
            <div className="underline heading"></div>
            <div className="message-slider">
                <div className="left-arrow arrow">
                    <img src={ left_arrow } alt="Previous" />
                </div>
                <MessCard
                mentor_pic={rose}
                mentor_message= "Hi I am Rose. Smell like A rose. used in mata ki puja."
                mentor_name="rose"
                mentor_github="https://github.com/kunalthgr8"
                mentor_linkedIn="https://github.com/kunalthgr8"
                mentor_insta="https://github.com/kunalthgr8"
                />
                
                <div className="right-arrow arrow">
                    <img src={right_arrow} alt="Next" />
                </div>
            </div>
            <div className="message-circle">
                <div className="ellipse secondary-color"></div>
                <div className="ellipse primary-color"></div>
            </div>
        </div>
    );
}

export default Message;