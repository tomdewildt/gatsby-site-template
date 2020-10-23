/* eslint-disable react/prop-types, react/jsx-props-no-spreading */
const React = require( "react" );

const { default: Layout } = require( "./src/layout/Layout" );

exports.wrapPageElement = ( { props, element } ) => <Layout { ...props }>{ element }</Layout>;
