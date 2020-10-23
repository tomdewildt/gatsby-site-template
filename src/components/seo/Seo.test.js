import React from "react";
import { axe } from "jest-axe";

import { renderWithTheme } from "../../utils/test-utils";

import Seo from "./Seo";

describe( "Seo", () => {
    it( "renders consistently", () => {
        const { asFragment } = renderWithTheme( <Seo /> );
        const fragment = asFragment();

        expect( fragment ).toMatchSnapshot();
    } );

    it( "should have no axe violations", async () => {
        const { container } = renderWithTheme( <Seo /> );
        const result = await axe( container );

        expect( result ).toHaveNoViolations();
    } );

    it( "respects the title prop", async () => {
        const { findByAttribute } = renderWithTheme( <Seo title="custom title" /> );
        const metaTitle = await findByAttribute( "name", "title" );
        const ogTitle = await findByAttribute( "property", "og:title" );
        const twitterTitle = await findByAttribute( "property", "twitter:title" );

        expect( document.title ).toEqual( "custom title" );
        expect( metaTitle.content ).toEqual( "custom title" );
        expect( ogTitle.content ).toEqual( "custom title" );
        expect( twitterTitle.content ).toEqual( "custom title" );
    } );

    it( "respects the description prop", async () => {
        const { findByAttribute } = renderWithTheme( <Seo description="custom description" /> );
        const metaDescription = await findByAttribute( "name", "description" );
        const ogDescription = await findByAttribute( "property", "og:description" );
        const twitterDescription = await findByAttribute( "property", "twitter:description" );

        expect( metaDescription.content ).toEqual( "custom description" );
        expect( ogDescription.content ).toEqual( "custom description" );
        expect( twitterDescription.content ).toEqual( "custom description" );
    } );

    it( "respects the banner prop", async () => {
        const { findByAttribute } = renderWithTheme( (
            <Seo banner="https://example.com/images/custom.png" />
        ) );
        const ogBanner = await findByAttribute( "property", "og:image" );
        const twitterBanner = await findByAttribute( "property", "twitter:image" );

        expect( ogBanner.content ).toEqual( "https://example.com/images/custom.png" );
        expect( twitterBanner.content ).toEqual( "https://example.com/images/custom.png" );
    } );

    it( "respects the path prop", async () => {
        const { findByAttribute } = renderWithTheme( <Seo path="/custom" /> );
        const ogUrl = await findByAttribute( "property", "og:url" );
        const twitterUrl = await findByAttribute( "property", "twitter:url" );

        expect( ogUrl.content ).toEqual( "https://example.com/custom" );
        expect( twitterUrl.content ).toEqual( "https://example.com/custom" );
    } );
} );
