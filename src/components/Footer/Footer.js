import youtube from "../img/youtube_grey.png";
import linkedin from "../img/linkedin_image.png";
import twitter from "../img/twitter_grey.png";
import instagram from "../img/instagram_image.png";
import github from "../img/github_image.png";
import facebook from "../img/facebook_grey.png";
import './Footer.css'



const Footer = () => {
    return (
        <div className="footer">
            <hr className="footer-line" />
            <div className="footer-options">
                <div className="openlake">
                    OpenLake
                </div>
                <div className="icon-list">
                    <div className="icon">
                        <a href="www.youtube.com"><img src={ youtube } alt="Youtube" /></a>
                    </div>
                    <div className="icon">
                        <a href="https://www.linkedin.com/company/openlake/?originalSubdomain=in"><img src={ linkedin } alt="LinkedIn" /></a>
                    </div>
                    <div className="icon">
                        <a href="www.twitter.com"><img src={ twitter } alt="Twitter" /></a>
                    </div>
                    <div className="icon">
                        <a href="https://www.instagram.com/openlake_iitbhilai/"><img src={ instagram } alt="Instagram" /></a>
                    </div>
                    <div className="icon">
                        <a href="https://github.com/OpenLake"><img src={ github } alt="GitHub" /></a>
                    </div>
                    <div className="icon">
                        <a href="www.facebook.com"><img src={ facebook } alt="Facebook" /></a>
                    </div>
                </div>
            </div>
            <hr className="footer-line" />
            <p className="copyright">© Copyrights With DevDynamos</p>
        </div>
    );
}
 
export default Footer;