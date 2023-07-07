import left_arrow from "./img/left-arrow.png";
import right_arrow from "./img/right-arrow.png";
import rose from "./img/Rose-modified.png";
import jasmine from "./img/Jasmine-modified.png";
import tulip from "./img/Tulip-modified.png";
import github_img from "./img/github_image.png";
import linkedin_img from "./img/linkedin_image.png";
import instagram_img from "./img/instagram_image.png";

const Message = () => {
    return (
        <div className="message">
            <h1 className="heading">Message</h1>
            <div className="underline heading"></div>
            <div className="message-slider">
                <div className="left-arrow arrow">
                    <img src={ left_arrow } alt="Previous" />
                </div>
                <div className="message-card">
                    <div className="message-card-1">
                        <img src={rose} alt="Profile_photo" />
                    </div>
                    <div className="message-card-2">
                        <p>Hi! I am Rose. I was a wonderful experience for me working for the DevDynamos in their projects.</p>
                    </div>
                    <div className="message-card-3"></div>
                    <div className="message-card-4">Rose</div>
                    <div className="message-card-5">
                        <img src={github_img} alt="Github" />
                        <img src={linkedin_img} alt="LinkedIn" />
                        <img src={instagram_img} alt="Instagram" />
                    </div>
                </div>
                <div className="message-card">
                    <div className="message-card-1">
                        <img src={jasmine} alt="Profile_photo" />
                    </div>
                    <div className="message-card-2">
                        <p>Hi I’m Jasmine. It was a cheerful environment where I learnt a lot from the other developers working here.</p>
                    </div>
                    <div className="message-card-3"></div>
                    <div className="message-card-4">Jasmine</div>
                    <div className="message-card-5">
                        <img src={github_img} alt="Github" />
                        <img src={linkedin_img} alt="LinkedIn" />
                        <img src={instagram_img} alt="Instagram" />
                    </div>
                </div>
                <div className="message-card">
                    <div className="message-card-1">
                        <img src={tulip} alt="Profile_photo" />
                    </div>
                    <div className="message-card-2">
                        <p>Hello!! I’m Tulip. At start I was confused but the menotrs guided me to where I am now "Sucessful Developer".</p>
                    </div>
                    <div className="message-card-3"></div>
                    <div className="message-card-4">Tulip</div>
                    <div className="message-card-5">
                        <img src={github_img} alt="Github" />
                        <img src={linkedin_img} alt="LinkedIn" />
                        <img src={instagram_img} alt="Instagram" />
                    </div>
                </div>
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