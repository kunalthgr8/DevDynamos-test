import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../Projects/Project.css";
import ProjectCard from './ProjectCard';

const ProjectList = (data) => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const obj = data;

    const dataArray = obj.data;

    const project = dataArray.map((item) => (
        <ProjectCard id={item.id} title={item.title} author={item.author} description={item.description} imgSrc={require(`../img/${item.photo}`)} link={item.link} />
    ))

    return (
        <div className="project-container">
            <Carousel responsive={responsive} showDots={true}>
                {project}
            </Carousel>
        </div>
    );
}

export default ProjectList;