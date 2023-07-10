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
        "The majestic sun set over the vast horizon, casting hues of orange and pink across the sky. Birds soared gracefully, while waves crashed against the shore, creating a soothing symphony of nature's beauty.",
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

  return (
    <div className="projects">
      <div className='project-heading'>
        Projects
        <hr className='project-hr'></hr>
      </div>
      <div className="project-container" >
        {data2.map((item, index) => (
          <div className="card">
            <div className="circle"></div>
            <div className="content">
              <h2>{item.projectName}</h2>
              <p>
                {item.projectDescription}
              </p>
              <a href="#">Read More</a>
            </div>
            <div className="img-box">
              <h2>{item.projectName}</h2>
              <img src={item.projectImage}></img>
            </div>
          </div>
        ))}
        {/* {data2.map((item, index) => (
          <div className="card" key={index}>
            <div className="imgbox">
              <div className="img-heading">
                {item.projectName}
              </div>
              <img
                src={item.projectImage}
                alt="Project Image"
              />
            </div>
            <div className="project-desc">
            <div className="project-h2">
            <h2>{item.projectName}</h2>
            </div>
            <div className="content" >
              <p>
                {item.projectDescription}
              </p>
            </div>
            <div>
              <button className="project-button">Explore</button>
            </div>
            </div>
          </div>
        ))} */}
      </div>
      {/* <div className="prject-button">
        <button className="btn">More Projects</button>
      </div> */}
    </div>
  );
};

export default Projects;
