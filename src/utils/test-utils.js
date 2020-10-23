/* eslint-disable import/no-extraneous-dependencies,react/prop-types */
import React from "react";
import { ThemeProvider } from "styled-components";
import { render, waitFor } from "@testing-library/react";

import defaultTheme from "../theme";

export const findByAttribute = async ( key, value ) => {
    let result = null;
    await waitFor( () => {
        result = document.querySelector( `[${ key }='${ value }']` );
        return expect( result ).toBeInTheDocument();
    } );
    return result;
};

export const findAllByAttribute = async ( key, value ) => {
    let result = null;
    await waitFor( () => {
        result = document.querySelectorAll( `[${ key }='${ value }']` );
        return expect( result.length ).toBeGreaterThan( 0 );
    } );
    return result;
};

export const renderWithTheme = (
    component,
    theme = defaultTheme,
) => ( {
    findByAttribute,
    findAllByAttribute,
    ...render( component, {
        wrapper: ( { children } ) => (
            <ThemeProvider theme={ theme }>
                { children }
            </ThemeProvider>
        ),
    } ),
} );

export const renderComponent = (
    component,
    options = {},
) => ( {
    findByAttribute,
    findAllByAttribute,
    ...render( component, options ),
} );
