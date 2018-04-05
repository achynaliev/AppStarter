import React from 'react';
import { Link } from 'react-router-dom';

export const FeaturedProject = ({project}) => (
        <section className="FeaturedProject">
          {console.log(project)}
          {<Link to={`/projects/${project.id}`}>
          <img src={project.image_url}/>
            <h4>{project.title}</h4>
            <h6>created by: {project.username}</h6>
          </Link>}
        </section>
);
