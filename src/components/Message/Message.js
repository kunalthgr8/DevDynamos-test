import CardList from "../MessageCard/CardList";
import useFetch from "../../useFetch";
import './Message.css';

const Message = () => {

    const { data, isPending, error } = useFetch('http://localhost:8000/message');

    return (
        <div className="message">
            <div className="message-head">
                <h1 className="heading">Message</h1>
                <div className="underline heading"></div>
            </div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <CardList data={data}></CardList>}
        </div>
    );
}

export default Message;