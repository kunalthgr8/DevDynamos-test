import rose from "../img/Rose-modified.png";
import github from "../img/github_image.png";
import linkedin from "../img/linkedin_image.png";
import instagram from "../img/instagram_image.png";
import "./MessCard.css";
function MessCard({ mentor_pic, mentor_message, mentor_name, mentor_github, mentor_linkedIn, mentor_insta }) {
    return (
        <div className="message-card">
            <div className="message-card-pic">
                <img src={mentor_pic} alt={mentor_name} />
            </div>
            <div className="message-card-message">
                <p>{mentor_message}</p>
            </div>
            <hr className="before-name"></hr>
            <div className="message-card-name">{mentor_name}</div>
            <div className="message-card-socials">
                <a href={mentor_github} target="_blank">  <img src={github} alt="Github" />      </a>
                <a href={mentor_linkedIn} target="_blank"><img src={linkedin} alt="LinkedIn" />  </a>
                <a href={mentor_insta} target="_blank">   <img src={instagram} alt="Instagram" /></a>
            </div>
        </div>
        
    );
}

export default MessCard;