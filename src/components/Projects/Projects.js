import ProjectList from "../ProjectCard/ProjectList";
import useFetch from "../../useFetch";
import './Project.css';

const Project = () => {

    const { data, isPending, error } = useFetch('http://localhost:8000/projects');

    // console.log(data);

    return (
        <div className="projects">
            <div className="project-heading">
                Projects
                <div className="project-hr"></div>
            </div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <ProjectList data={data}></ProjectList>}
        </div>
    );
}

export default Project;