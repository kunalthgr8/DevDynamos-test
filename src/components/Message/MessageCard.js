import './Message.css';
import github_image from "../img/github_image.png";
import linkedin_image from "../img/linkedin_image.png";
import instagram_image from "../img/instagram_image.png";

const MessageCard = (messages) => {

    console.log(messages);

    return (
        <div className="message-card">
            {messages.messages.map((message) => (
                <div className="message-preview" key={ message.id }>
                    <img src={ require(`../img/${ message.photo }`) } alt="Profile" className='message-profile-pic'/>
                    <p className='message-description'>{ message.description }</p>
                    <hr className='message-hr'/>
                    <h3 className='message-author'>{ message.author }</h3>
                    <div className="message-social-media">
                        <img src={ github_image } alt="GitHub Link" />
                        <img src={ linkedin_image } alt="LinkedIn Link" />
                        <img src={ instagram_image } alt="Instagram Link" />
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default MessageCard;