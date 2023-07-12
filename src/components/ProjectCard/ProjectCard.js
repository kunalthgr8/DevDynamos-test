import '../Projects/Project.css';

const ProjectCard = (props) => {

    console.log(props);

    return (
        <div className="card" key={props.id}>
            <div className="circle"></div>
            <div className="content">
                <div className="content-heading">
                    <h2>{props.title}</h2>
                    <hr className="content-hr"></hr>
                </div>
                <p>
                    {props.description}
                </p>
                <a href={props.link}>Read More</a>
            </div>
            <div className="img-box">
                <h2>{props.title}</h2>
                <img src={props.imgSrc} alt={props.title} />
            </div>
        </div>
    );
}

export default ProjectCard;