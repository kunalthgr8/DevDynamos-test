import './ProjectSite.css';
import useFetch from "../../useFetch";
import { useParams } from 'react-router-dom';

const ProjectSite = () => {

    const { id } = useParams();

    const { data, isPending, error } = useFetch("https://json-server-openlake.vercel.app/projects/" + id);

    const redirectToUrl = (link) => {
        window.open(link, '_blank');
      };

    return (
        <div>
            { error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            { data && 
            <div className="project-site" id="Project-Site">
                <div className="project-site-heading">
                    {data.title}
                    <hr className="project-site-hr" />
                </div>
                <div className='projectsite-content'>

                    <div className='projectsite-image'>
                        <img src={require(`../img/${data.photo}`)} alt='Screenshot'></img>
                        <button className='projectsite-button' onClick={() => redirectToUrl(data.link)}>Github Link</button>
                    </div>
                    <div className='projectsite-details'>
                        <div className='projectsite-github'>
                            <div className='projectsite-minor-details'>
                                <h6>stars</h6>
                                <h6>10</h6>
                            </div>
                            <div className='projectsite-minor-details'>
                                <h6>Prs</h6>
                                <h6>10</h6>
                            </div>
                            <div className='projectsite-minor-details'>
                                <h6>Commits</h6>
                                <h6>10</h6>
                            </div>
                            <div className='projectsite-minor-details'>
                                <h6>Issues</h6>
                                <h6>10</h6>
                            </div>
                            <div className='projectsite-minor-details'>
                                <h6>Forks</h6>
                                <h6>10</h6>
                            </div>
                            <div className='projectsite-minor-details'>
                                <h6>Watchers</h6>
                                <h6>10</h6>
                            </div>
                        </div>
                        <div className='projectsite-desc'>
                            <h2>Description</h2>
                            <p>{data.description}</p>
                        </div>
                        <div className='projectsite-mantainers'>
                            <h2>Maintainers</h2>
                            <h6>@Kunal</h6>
                            <h6>@Satyam</h6>
                            <h6>@Suprabho</h6>
                        </div>

                    </div>
                </div>
            </div>
            }
        </div>
    );

};

export default ProjectSite;
