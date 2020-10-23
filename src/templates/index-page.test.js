import React from "react";
import { axe } from "jest-axe";

import { renderWithTheme } from "../utils/test-utils";

import PageIndex from "./index-page";

describe( "Index", () => {
    const data = {
        markdownRemark: {
            frontmatter: { title: "custom title" },
        },
    };

    it( "renders consistently", () => {
        const { asFragment } = renderWithTheme( <PageIndex data={ data } /> );
        const fragment = asFragment();

        expect( fragment ).toMatchSnapshot();
    } );

    it( "should have no axe violations", async () => {
        const { container } = renderWithTheme( <PageIndex data={ data } /> );
        const result = await axe( container );

        expect( result ).toHaveNoViolations();
    } );

    it( "respects the data prop", async () => {
        const { findByAttribute } = renderWithTheme( <PageIndex data={ data } /> );
        const metaTitle = await findByAttribute( "name", "title" );
        const ogTitle = await findByAttribute( "property", "og:title" );
        const twitterTitle = await findByAttribute( "property", "twitter:title" );

        expect( metaTitle.content ).toEqual( "custom title" );
        expect( ogTitle.content ).toEqual( "custom title" );
        expect( twitterTitle.content ).toEqual( "custom title" );
    } );
} );
