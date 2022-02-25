import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../layouts/layout';

const IndexPage = ({ data, pageContext }) => {
    const projects = data.allProject.nodes;
    return (
        <Layout additionalClass={['bg-white']}>
            <Helmet>
                <title>Flotiq Gatsby portfolio starter</title>
            </Helmet>
            <div>Projects</div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query indexQuery($skip: Int!, $limit: Int!) {
        site {
            siteMetadata {
                title
            }
        }
        allProject(sort: {fields: flotiqInternal___createdAt, order: DESC}, limit: $limit, skip: $skip,) {
            nodes {
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
                    localFile {
                        publicURL
                    }
                }
            }
        }
    }
`;

export default IndexPage;
