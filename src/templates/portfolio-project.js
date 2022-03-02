import React from 'react';
import { graphql } from 'gatsby';
import { Header, Paragraph, Image } from 'flotiq-components-react';
import Layout from '../layouts/layout';
import ProjectGallery from '../components/ProjectGallery';

const PortfolioProjectTemplate = ({ data }) => {
    const { project } = data;
    return (
        <Layout additionalClass={['bg-medium-gray md:bg-white']}>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3">
                    <div className="lg:pr-10 py-10 order-2 lg:order-1">
                        <Header
                            text={project.name}
                            additionalClasses={['font-archivo uppercase tracking-widest !text-4xl md:!text-6xl '
                            + 'mb-5 lg:mb-10 text-center lg:text-left']}
                        />
                        <Paragraph
                            text={project.description}
                            additionalClasses={['font-normal italic uppercase px-10 lg:px-0']}
                        />
                    </div>
                    <div className="col-span-2 order-1 lg:order-2">
                        <Image
                            url={project.headerImage[0] && project.headerImage[0].localFile.publicURL}
                            rounded="3xl"
                            stretched={true}
                            additionalClasses={['px-1']}
                        />
                    </div>
                </div>
                <div className="grid lg:grid-cols-3">
                    <div>
                        <div className="pr-5 mb-6 md:mb-0">
                            <Header text={project.gallery_name} additionalClasses={['mb-5']} level={3} />
                            <Paragraph text={project.gallery_description} additionalClasses={['!font-lg font-sora']} />
                        </div>

                    </div>
                    <div className="col-span-2 pt-16">
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
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
            gallery_name
            gallery_description
            gallery {
                id
                localFile {
                    publicURL
                }
            }
        }
    }
`;

export default PortfolioProjectTemplate;
