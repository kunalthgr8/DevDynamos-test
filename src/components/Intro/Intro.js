import NumCard from "../NumberCard/NumCard";
import Logo from "../img/openlakeLogo.png";
import blog_icon from "../img/blog_icon.png";
import community_icon from "../img/community_icon.png";
import event_icon from "../img/events_icon.png";
import project_icon from "../img/projects_icon.png";
import "./Intro.css";

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-container-1">
                <div className="intro-logo">
                    <img src={Logo} alt="OpenLake Logo" id="intro-logo" />
                </div>
                <div className="intro-para">
                    <h1 className="intro-heading">OpenLake</h1>
                    <hr></hr>
                    <p className="intro-paragraph">
                        As the world is moving towards a connected society. The communities driving the development of open source technologies are becoming more prominent. With the importance of Open Source made crystal clear. There is one problem that needs to be addressed: Connecting people with Open Source Communities. The idea of OpenLake is to act as a bridge between Students and the World of Open Source Development.
                    </p>
                </div>
            </div>
            <div className="intro-container-2">
                <NumCard
                    icon={project_icon}
                    number="500+"
                    label="Projects"
                />
                <NumCard
                    icon={blog_icon}
                    number="1000+"
                    label="Blogs"
                />
                <NumCard
                    icon={community_icon}
                    number="2000+"
                    label="Members"
                />
                <NumCard
                    icon={event_icon}
                    number="50+"
                    label="Events"
                />
            </div>
        </div>
    );
}

export default Intro;