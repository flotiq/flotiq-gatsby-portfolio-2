import React from 'react';
import { graphql } from 'gatsby';
import { Header } from 'flotiq-components-react';
import Layout from '../layouts/layout';

const PortfolioProjectTemplate = ({ data }) => {
    const { project } = data;
    return (
        <Layout additionalClass={['bg-white']}>
            <Header text={project.name} />
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
