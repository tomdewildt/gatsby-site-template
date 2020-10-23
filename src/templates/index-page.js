import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import { Page, Seo } from "../components";

const PageIndex = ( { data: { markdownRemark: { frontmatter } } } ) => (
    <Page id="index">
        <Seo title={ frontmatter.title } />
    </Page>
);

PageIndex.propTypes = {
    data: PropTypes.shape( {
        markdownRemark: PropTypes.shape( {
            frontmatter: PropTypes.shape( {
                title: PropTypes.string.isRequired,
            } ).isRequired,
        } ).isRequired,
    } ).isRequired,
};

export const query = graphql`
    query IndexPageQuery {
        markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
            frontmatter {
                title
            }
        }
    }
`;

export default PageIndex;
