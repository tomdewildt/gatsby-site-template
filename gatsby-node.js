const path = require( "path" );

const { createFilePath } = require( "gatsby-source-filesystem" );

exports.createPages = async ( { actions, graphql } ) => {
    const { createPage } = actions;

    const result = await graphql( `
        {
            allMarkdownRemark(limit: 1000) {
                nodes {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        templateKey
                    }
                }
            }
        }
    ` );
    if ( result.errors ) return;

    const pages = result.data.allMarkdownRemark.nodes;

    pages.forEach( ( page ) => {
        createPage( {
            path: page.fields.slug,
            component: path.resolve(
                `src/templates/${ page.frontmatter.templateKey }.js`,
            ),
            context: { id: page.id },
        } );
    } );
};

exports.onCreateNode = ( { node, actions, getNode } ) => {
    const { createNodeField } = actions;

    if ( node.internal.type === "MarkdownRemark" ) {
        const value = createFilePath( { node, getNode } );
        createNodeField( {
            name: "slug",
            node,
            value,
        } );
    }
};
