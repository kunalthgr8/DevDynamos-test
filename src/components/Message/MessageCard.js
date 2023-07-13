import './Message.css';

const MessageCard = (messages) => {

    console.log(messages);


    return (
        <div className="message-card">
            {messages.messages.map((message) => (
                <div className="message-preview" key={message.id}>
                    <img src={require(`../img/${message.photo}`)} alt="Profile" className='message-profile-pic' />
                    <p className='message-description'>{message.description}</p>
                    <hr className='message-hr' />
                    <h3 className='message-author'>{message.author}<span className='message-span'>@kunal</span></h3>
                </div>
            ))}
        </div>
    );
}

export default MessageCard;