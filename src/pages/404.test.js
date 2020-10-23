import React from "react";
import { axe } from "jest-axe";

import { renderWithTheme } from "../utils/test-utils";

import PageNotFound from "./404";

describe( "NotFound", () => {
    it( "renders consistently", () => {
        const { asFragment } = renderWithTheme( <PageNotFound /> );
        const fragment = asFragment();

        expect( fragment ).toMatchSnapshot();
    } );

    it( "should have no axe violations", async () => {
        const { container } = renderWithTheme( <PageNotFound /> );
        const result = await axe( container );

        expect( result ).toHaveNoViolations();
    } );
} );
