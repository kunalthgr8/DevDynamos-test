import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectCardMobile from "./ProjectCardMobile";
import { useMediaQuery } from 'react-responsive';

const ProjectPage = (data) => {

    const isLarge = useMediaQuery({ minWidth: 501 });
    const isSmall = useMediaQuery({ maxWidth: 500 });

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const obj = data;

    const dataArray = obj.data;

    const projects = dataArray.map((item) => (

        <React.Fragment key={item.id}>
            {isLarge && (
                <ProjectCard
                    id={item.id}
                    title={item.title}
                    author={item.author}
                    description={item.description}
                    link={item.link}
                    imgSrc={require(`../img/${item.photo}`)}
                />
            )}
            {isSmall && (
                <ProjectCardMobile
                    id={item.id}
                    title={item.title}
                    author={item.author}
                    description={item.description}
                    link={item.link}
                    imgSrc={require(`../img/${item.photo}`)}
                />
            )}
        </React.Fragment>

    ));

    return (
        <div className="project-list">
            <Carousel responsive={responsive} showDots={true}>
                {projects}
            </Carousel>
        </div>
    );
}

export default ProjectPage;