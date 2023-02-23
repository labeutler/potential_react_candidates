// import React, { useState } from "react";
import React from "react";
import { removeHyphan } from "../utils/helpers";

// function Project(props) {
    // const [input, setInput] = useState('');
function Project({ project }) {
    const { name, languages, packages, description, repo, link } = project;

    return (
        <div className="project" key={name}>
            <img
            src={require(`../assets/projects/${name}.png`).default}
            alt={removeHyphan(name)}
            className="project-bg"
        />
        <div className="project-text">
            <h3>
                <a href={link}>{removeHyphan(name)}</a>{' '}
                <a href={repo}>
                    <i className="fab fa-github"></i>
                </a>
            </h3>
            <p>{languages}</p>
            <br />
            <p>{packages}</p>
            <br />
            <p>{description}</p>
            <br />
        </div>
        </div>
        // <h1>Project</h1>,
        // <br></br>,
        // <div>
        //     <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
        //         {props.projects.map((project) => (
        //             <div className="card">
        //                 <div className="card-image">
        //                     <figure className="image is-4by3">
        //                         <a href={project.live} target="_blank" rel="noreferrer">
        //                             <img src={process.env.PUBLIC_URL + project.image} alt="Placeholder image" />
        //                         </a>
        //                     </figure>
        //                 </div>
        //                 <div className="card-content">
        //                     <div className="media">
        //                         <div className="media-left"></div>
        //                         <div className="media-content">
        //                             <p className="titel is-4" key={project.id}>
        //                                 {project.title}
        //                             </p>
        //                         </div>
        //                     </div>

        //                     <div className="content hast-text-left">
        //                         {project.description}
        //                         <br />
        //                         <br />
        //                         <div className="content is-family-code">
        //                             Languages: {project.languages}
        //                             <br />
        //                             NPM packages: {project.packages}
        //                         </div>
        //                         <div className="card">
        //                             <footer className="card-footer">
        //                                 <a
        //                                     href={project.repo}
        //                                     className="card-footer-item"
        //                                     target="_blank" rel="noreferrer"
        //                                 >
        //                                     See the Repo!
        //                                 </a>
        //                                 <br />
        //                                 <a
        //                                     href={project.live}
        //                                     className="card-footer-item"
        //                                     target="_blank" rel="noreferrer"
        //                                 >
        //                                     See the Live Site!
        //                                 </a>
        //                             </footer>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         ))}
        //     </div>
        // </div>
    );
}

export default Project;