import activitytracker from "./img/activitytracker.png";
import canonforces from "./img/canonforces2.png";
import photosharing from "./img/photosharing.png";
import ksp from "./img/ksp.png";

const Projects = () => {
    return (
        <div className="projects">
            <div className="head">
                <div className="head-left">
                    <h1 className="heading">Projects</h1>
                    <div className="underline heading"></div>
                </div>
                <div className="btn head-right">
                    More Projects
                </div>
            </div>
            <div className="project-container">
                <div className="left-column column">
                    <div className="project-box secondary-color">
                        <div className="project-name">
                            Activity Tracker
                        </div>
                        <img src={activitytracker} alt="Activity Tracker" />
                    </div>
                    <div className="project-box secondary-color">
                        <div className="project-name">
                            Knowledge Sharing Platform
                        </div>
                        <img src={ksp} alt="Knowledge Sharing Platform" />
                    </div>
                </div>
                <div className="right-column column">
                    <div className="project-box secondary-color">
                        <div className="project-name">
                            Photo Sharing
                        </div>
                        <img src={photosharing} alt="Photo_Sharing_App" />
                    </div>
                    <div className="project-box secondary-color">
                        <div className="project-name">
                            Canon Forces
                        </div>
                        <img src={canonforces} alt="Canon Forces" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Projects;