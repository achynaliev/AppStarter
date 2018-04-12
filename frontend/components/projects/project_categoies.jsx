import React from 'react';
import { Link } from 'react-router-dom';
import ProjectItemView from './explore_item_container';

export const AllProjectCategories = ({projects, category}) => (
      <section>
        <ul className="ProjectIndexUL">
          {projects.map( (project) => <ProjectItemView project={project} key={`project-${project.id}`} />)}
        </ul>
      </section>
);

export const ProjectCategories = ({projects, category}) => (
      <section>
        <ul className="ProjectIndexUL">
          {projects.map( (project) => project.categories[0] === category ? <ProjectItemView project={project} key={`project-${project.id}`} /> : null)}
        </ul>
      </section>
);
