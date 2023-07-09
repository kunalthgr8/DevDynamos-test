import React from "react";
import activitytracker from "../img/activitytracker.png";
import canonforces from "../img/canonforces2.png";
import photosharing from "../img/photosharing.png";
import ksp from "../img/ksp.png";
import "./Project.css";
import { useState } from 'react';

const Projects = () => {

  const data2 = [
    {
      projectName: "Canon Forces",
      projectImage: canonforces,
      projectDescription:
        "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      projectTechStack: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      projectName: "Activity Tracker",
      projectImage: activitytracker,
      projectDescription:
        "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      projectTechStack: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      projectName: "Photo Sharing",
      projectImage: photosharing,
      projectDescription:
        "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      projectTechStack: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      projectName: "KSP",
      projectImage: ksp,
      projectDescription:
        "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      projectTechStack: ["HTML", "CSS", "JavaScript", "React"],
    },
  ];
  const [openItems, setOpenItems] = useState([]);

  const toggleAccordion = (index) => {
    const isOpen = openItems.includes(index);
    if (isOpen) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const getHeaderBorderRadius = (index) => {
    return openItems.includes(index) ? ' 0' : '0 0 15px 15px ';
  };


  return (
    <div className="projects">
      <div className='project-heading'>
        Projects
        <hr className='project-hr'></hr>
      </div>
      <div className="project-container" >
        {data2.map((item, index) => (
          <div className="card" key={index}

          >
            <h2>{item.projectName}</h2>
            <div className="imgbox"
            >
              <img
                src={item.projectImage}
                onClick={() => toggleAccordion(index)}
                style={{ borderRadius: getHeaderBorderRadius(index) }}
                alt=""
              />
            </div>
            {openItems.includes(index) &&
              <div className="content" >
                <p>
                  {item.projectDescription}
                </p>

              </div>
            }
          </div>
        ))}
      </div>
      <div className="prject-button">
        <button className="btn">More Projects</button>
      </div>
    </div>
  );
};

export default Projects;
