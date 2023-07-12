import useFetch from "../../useFetch";
import MessageCard from "./MessageCard";
import './Message.css';

const Message = () => {

    const { data : messages, isPending, error } = useFetch('https://json-server-openlake.vercel.app/message');

    return (
        <div className="message">
            <div className="message-head">
                <h1 className="heading">Message</h1>
                <div className="underline heading"></div>
            </div>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div>}
            { messages && <MessageCard messages={ messages } />}
        </div>
    );
}
 
export default Message;