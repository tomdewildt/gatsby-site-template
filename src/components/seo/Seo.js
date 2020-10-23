/* eslint-disable complexity, max-len */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                siteTitle
                siteLanguage
                siteDescription
                siteBanner
                siteUrl
            }
        }
    }
`;

const Seo = ( {
    title,
    description,
    banner,
    path,
} ) => {
    const { site: { siteMetadata: metadata } } = useStaticQuery( query );

    return (
        <Helmet>
            <html lang={ metadata.siteLanguage } />

            <title>{ title ?? metadata.siteTitle }</title>

            <meta name="title" content={ title ?? metadata.siteTitle } />
            <meta name="description" content={ description ?? metadata.siteDescription } />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={ metadata.siteUrl + path } />
            <meta property="og:title" content={ title ?? metadata.siteTitle } />
            <meta property="og:description" content={ description ?? metadata.siteDescription } />
            <meta property="og:image" content={ banner ?? metadata.siteBanner } />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={ metadata.siteUrl + path } />
            <meta property="twitter:title" content={ title ?? metadata.siteTitle } />
            <meta property="twitter:description" content={ description ?? metadata.siteDescription } />
            <meta property="twitter:image" content={ banner ?? metadata.siteBanner } />
        </Helmet>
    );
};

Seo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    banner: PropTypes.string,
    path: PropTypes.string,
};

Seo.defaultProps = {
    title: null,
    description: null,
    banner: null,
    path: "",
};

export default Seo;
