import React from 'react';
import { Link } from 'gatsby';
import ProjectCard from '../components/ProjectCard';

const ProjectCards = ({ projects }) => (
    <div className="flex flex-col">
        {projects.map((project) => (
            <Link to={`/${project.slug}`}>
                <ProjectCard
                    key={project.id}
                    image={project.headerImage[0] && project.headerImage[0].localFile.publicURL}
                    name={project.name}
                    excerpt={project.description}
                />
            </Link>
        ))}
    </div>
);

export default ProjectCards;
