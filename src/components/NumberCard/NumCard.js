import "./NumCard.css";

const NumCard = ({icon,number,label}) => {
    return (
        <div className="counter-card">
            <img src={icon} alt="Icon" className="num-card-icon" />
            <div className="num-card-counter">{number}</div>
            <p className="num-card-label">{label}</p>
        </div>
    );
}

export default NumCard;