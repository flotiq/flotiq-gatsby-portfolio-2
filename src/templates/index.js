import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Header, Paragraph } from 'flotiq-components-react';
import Layout from '../layouts/layout';

const topHeader = 'Hi, I am';
const mainHeader1 = 'Joe';
const mainHeader2 = 'Jonas';
const descriptionText = 'I am professional 3d artist';

const IndexPage = ({ data, pageContext }) => {
    const projects = data.allProject.nodes;
    return (
        <Layout additionalClass={['bg-light-gray md:bg-white']}>
            <Helmet>
                <title>Flotiq Gatsby portfolio starter</title>
            </Helmet>

            <div className="max-w-7xl mx-auto grid grid-cols-2">
                <div>
                    <Header
                        level={2}
                        text={topHeader}
                        additionalClasses={['font-lora uppercase !text-xl mb-3 p-0']}
                    />
                    <Header
                        text={mainHeader1}
                        additionalClasses={['!p-0 uppercase font-archivo tracking-widest !text-8xl']}
                    />
                    <Header
                        text={mainHeader2}
                        additionalClasses={['!p-0 uppercase font-archivo tracking-widest !text-8xl']}
                    />
                    <Paragraph
                        text={descriptionText}
                        additionalClasses={['font-lora italic uppercase text-xl mt-2']}
                    />
                </div>
                <div>Project cards</div>
            </div>
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
