import './MessCard.css';
import github from "../img/github_image.png";
import linkedin from "../img/linkedin_image.png";
import instagram from "../img/instagram_image.png";

const Card = (props) => {

    return (
        <div className="message-card" key={props.id}>
            <div className="message-card-pic">
                <img src={props.imgSrc} alt="Profile" className="profile_photo" />
            </div>
            <div className="message-card-message">
                <p>{props.description}</p>
            </div>
            <hr className="before-name" />
            <div className="message-card-name">
                {props.author}
            </div>
            <div className="message-card-socials">
                <a href="" target="_blank">  <img src={github} alt="Github" />      </a>
                <a href="" target="_blank"><img src={linkedin} alt="LinkedIn" />  </a>
                <a href="" target="_blank">   <img src={instagram} alt="Instagram" /></a>
            </div>
        </div>
    );
};

export default Card;
