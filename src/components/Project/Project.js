import useFetch from "../../useFetch";
import ProjectPage from "./ProjectPage";
import './ProjectIndex.css';

const Project = () => {

    const { data, isPending, error } = useFetch('http://localhost:8000/projects');

    return (
        <div className="project" id="Project">
            <div className="project-heading">
                Projects
                <hr className="project-hr2"></hr>
            </div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <ProjectPage data={data} />}
        </div>
    );
}

export default Project;