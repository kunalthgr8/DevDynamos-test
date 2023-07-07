import github_img from "./img/github_image.png";
import linkedin_img from "./img/linkedin_image.png";

const Contact = () => {
    return (
        <div className="contact">
            <div className="left-column column">
                <h1 className="heading">Join Us</h1>
                <div className="underline heading"></div>
                <div className="join-btn">
                    <img src={github_img} alt="GitHub" />
                </div>
                <div className="join-btn">
                    <img src={linkedin_img} alt="GitHub" />
                </div>
            </div>
            <div className="right-column column">
                <h1 className="heading">Any Queries?</h1>
                <div className="underline heading"></div>
                <form action="">
                    <label>Name:</label>
                    <input type="text" placeholder="Enter your name here" />
                    <label >Email:</label>
                    <input type="text" placeholder="Enter your Email Id" />
                    <label>Insight of query:</label>
                    <textarea name="description" id="contact-description" cols="30" rows="10" placeholder="Enter a short message"></textarea>
                    <input type="submit" value="Submit" className="btn submit-btn" />
                </form>
            </div>
        </div >
    );
}

export default Contact;