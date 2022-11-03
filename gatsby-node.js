const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const portfolioProject = path.resolve('./src/templates/portfolio-project.js');
    const result = await graphql(`
        query GetProjects {
            allProject(sort: {order: DESC, fields: flotiqInternal___createdAt}) {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
`);

    if (result.errors) {
        throw result.errors;
    }
    const projects = result.data.allProject.edges;

    // Create paginated index
    const projectsPerPage = 7;
    const numPages = Math.ceil(projects.length / projectsPerPage);

    Array.from({ length: numPages }).forEach((item, i) => {
        createPage({
            path: i === 0 ? '/' : `/${i + 1}`,
            component: path.resolve('./src/templates/index.js'),
            context: {
                limit: projectsPerPage,
                skip: i * projectsPerPage,
                numPages,
                currentPage: i + 1,
            },
        });
    });

    // Create portfolio projects pages.
    projects.forEach((project, index) => {
        const previous = index === projects.length - 1 ? null : projects[index + 1].node;
        const next = index === 0 ? null : projects[index - 1].node;

        createPage({
            path: project.node.slug,
            component: portfolioProject,
            context: {
                slug: project.node.slug,
                previous,
                next,
            },
        });
    });
};
