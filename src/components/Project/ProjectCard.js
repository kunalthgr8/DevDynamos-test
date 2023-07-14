import { useState } from 'react';
import './ProjectCard.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {

    const [isHovering, setIsHovering] = useState(false);

    console.log(isHovering);

    return (
        <motion.div
            className="project-container"
            key={props.id}
            onMouseEnter={() => { setIsHovering(!isHovering) }}
            onMouseLeave={() => setIsHovering(!isHovering)}
            animate={{ background: isHovering ? "#111827" : "", boxShadow: isHovering ? "-2px -2px 2px 0px white" : "0" }}>
            <motion.h1
                className='project-title'
                animate={{ background: isHovering ? "#111827" : "gray" }}>{props.title}</motion.h1>
            <div className="transform-container">
                <motion.img
                    src={props.imgSrc}
                    alt="Profile"
                    className="profile_photo"
                    animate={{ scale: isHovering ? 0.5 : 1, borderRadius: isHovering ? "30px" : "", x: isHovering ? "20%" : 0, y: isHovering ? "-6%" : 0 }}
                    transition={{ ease: "linear" }} />
                <motion.p animate={{ x: isHovering ? "50%" : 0, y: isHovering ? "calc(-350% + 10px)" : 0, opacity: isHovering ? 1 : 0 }} transition={{ ease: 'linear' }} className='project-author'>Developed by - {props.author}</motion.p>
                <motion.div
                    className="content"
                    animate={{ display: isHovering ? "flex" : "none", opacity: isHovering ? 1 : 0, x: isHovering ? "-62%" : 0, color: isHovering ? "rgba(255, 255, 255)" : "rgba(255, 255, 255, 0)" }}
                    transition={{ ease: "linear" }}>
                    <p>{props.description}</p>
                    <motion.button className='project-btn' animate={{ width: isHovering ? "50%" : "40%", boxShadow: isHovering ? "0px 3px 5px 0px black" : "" }} transition={{ delay: 0.5 }} ><Link to={`/projects/${props.id}`} className='link-reset'>Try Now</Link></motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;