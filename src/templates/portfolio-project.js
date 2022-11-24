import React from 'react';
import { graphql } from 'gatsby';
import { Header, Paragraph } from 'flotiq-components-react';
import { Helmet } from 'react-helmet';
import Layout from '../layouts/layout';
import ProjectGallery from '../components/ProjectGallery';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PortfolioProjectTemplate = ({ data }) => {
    const { project } = data;
    return (
        <Layout additionalClass={['bg-medium-gray md:bg-white']}>
            <Helmet>
                <title>{project.name}</title>
                <meta
                    name="description"
                    content={project.description}
                />
            </Helmet>
            <div className="max-w-7xl mx-auto px-2 sm:px-6">
                <div className="grid lg:grid-cols-3 items-center">
                    <div className="lg:pr-10 py-5 order-2 lg:order-1">
                        <Header
                            additionalClasses={['font-archivo uppercase tracking-widest !text-4xl md:!text-6xl '
                                + 'text-center lg:text-left lg:mb-10']}
                        >
                            {project.name}
                        </Header>
                        <Paragraph
                            additionalClasses={['font-normal italic uppercase text-sm leading-loose px-7 lg:px-0']}
                        >
                            {project.description}
                        </Paragraph>
                    </div>
                    <div className="col-span-2 order-1 lg:order-2">
                        <GatsbyImage
                            image={getImage(project.headerImage[0] && project.headerImage[0].localFile)}
                            stretched='true'
                            className={['px-1 rounded-3xl']}
                            alt={project.name}
                        />
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 py-5 lg:py-24">
                    <div>
                        <div className="pr-5 mb-3 lg:mb-0">
                            <Header
                                additionalClasses={['font-archivo uppercase tracking-widest !text-2xl !p-0 lg:mb-5']}
                            >
                                {project.gallery_name}
                            </Header>
                            <Paragraph
                                additionalClasses={['font-normal italic uppercase text-sm leading-loose']}
                            >
                                {project.gallery_description}
                            </Paragraph>
                        </div>

                    </div>
                    <div className="col-span-2">
                        <ProjectGallery
                            gallery={project.gallery}
                            name={project.name}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query PortfolioProjectBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        project( slug: { eq: $slug } ) {
            id
            description
            slug
            name
            headerImage {
                extension
                url
                width
                height
                localFile {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
                    }
                }
            }
            gallery_name
            gallery_description
            gallery {
                extension
                url
                width
                height
                id
                localFile {
                  publicURL
                  childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
                }
                }
            }
        }
    }
`;

export default PortfolioProjectTemplate;
