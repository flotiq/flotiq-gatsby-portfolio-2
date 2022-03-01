import React from 'react';
import { navigate } from 'gatsby';
import ProjectCard from '../components/ProjectCard';

const ProjectCards = ({ projects }) => (
    <div className="flex flex-col">
        {projects.map((project) => (
            <ProjectCard
                key={project.id}
                onClick={() => { navigate(`/${project.slug}`); }}
                image={project.headerImage[0] && project.headerImage[0].localFile.publicURL}
                name={project.name}
                excerpt={project.description}
            />
        ))}
    </div>
);

export default ProjectCards;
