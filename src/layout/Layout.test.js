import React from "react";
import { axe } from "jest-axe";

import { renderComponent } from "../utils/test-utils";

import Layout from "./Layout";

describe( "Layout", () => {
    it( "renders consistently", () => {
        const { asFragment } = renderComponent( <Layout>layout</Layout> );
        const fragment = asFragment();

        expect( fragment ).toMatchSnapshot();
    } );

    it( "should have no axe violations", async () => {
        const { container } = renderComponent( <Layout>layout</Layout> );
        const result = await axe( container );

        expect( result ).toHaveNoViolations();
    } );
} );
