import { useState } from 'react';
import { motion } from "framer-motion";
import "./ProjectCardMobile.css";

const ProjectCardMobile = (props) => {

    const redirectToUrl = (link) => {
        window.location.href = link;
    };

    const [isHovering, setIsHovering] = useState(false);

    console.log(isHovering);

    return (
        <motion.div className="project-container-mobile"
            key={props.id}
            onMouseEnter={() => { setIsHovering(!isHovering) }}
            onMouseLeave={() => setIsHovering(!isHovering)} animate={{background : isHovering ? "#111827" : "", boxShadow: isHovering ? "-2px -2px 2px 0px white" : "0"}}>
            <motion.h1 className='project-title-mobile' animate={{background: isHovering ? "#111827" : "gray"}}>{props.title}</motion.h1>
            <div className="transform-container-mobile">
                <motion.img src={props.imgSrc} alt="Profile" className='profile_photo_mobile'animate={{ scale: isHovering ? 0.8 : 1 , borderRadius: isHovering ? "20px" : ""}} transition={{ ease: "linear" }}/>
                <motion.p className="project-author-mobile" animate={{opacity: isHovering ? 1 : 0}} transition={{ease: 'linear'}}>
                    Developed by - {props.author}
                </motion.p>
                <motion.div className="content-mobile" animate={{ position: isHovering ? "relative" : "absolute", opacity : isHovering ? 1 : 0, color: isHovering ? "rgba(255, 255, 255)" : "rgba(255, 255, 255, 0)"}}>
                    <p>{props.description}</p>
                    <motion.button className='project-btn-mobile' animate={{ width: isHovering ? "80%" : "50%", boxShadow: isHovering ? "0px 3px 5px 0px black" : "" }} transition={{delay: 0.5}} onClick={() => redirectToUrl(props.link)}>Try Now</motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default ProjectCardMobile;