import Logo from "./img/openlakeLogo.png";
import project_icon from "./img/projects_icon.png";
import blog_icon from "./img/blog_icon.png";
import community_icon from "./img/community_icon.png";
import event_icon from "./img/events_icon.png";

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-container-1">
                <div className="intro-logo-container">
                    <img src={Logo} alt="OpenLake Logo" id="intro-logo" />
                </div>
                <div className="intro-para-container">
                    <h1>OpenLake</h1>
                    <div className="underline-intro"></div>
                    <p className="intro-para">
                        As the world is moving towards a connected society. The communities driving the development of open source technologies are becoming more prominent. With the importance of Open Source made crystal clear. There is one problem that needs to be addressed: Connecting people with Open Source Communities. The idea of OpenLake is to act as a bridge between Students and the World of Open Source Development.
                    </p>
                </div>
            </div>
            <div className="intro-container-2">
                <div className="counter-card">
                    <img src={project_icon} alt="Projects-icon" id="projects-icon" />
                    <div id="counter">0+</div>
                    <p>Projects</p>
                </div>
                <div className="counter-card">
                    <img src={ blog_icon } alt="Blogs-icon" id="blogs-icon"/>
                    <div id="counter">0+</div>
                    <p>Blogs</p>
                </div>
                <div className="counter-card">
                    <img src={ community_icon } alt="Community-icon" id="community-icon"/>
                    <div id="counter">0+</div>
                    <p>Community</p>
                </div>
                <div className="counter-card">
                    <img src={ event_icon } alt="Events-icon" id="events-icon"/>
                    <div id="counter">0+</div>
                    <p>Events</p>
                </div>
            </div>
        </div>
    );
}

export default Intro;