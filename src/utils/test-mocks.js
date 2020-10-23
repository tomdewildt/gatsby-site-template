jest.mock( "gatsby", () => ( {
    ...jest.requireActual( "gatsby" ),
    graphql: jest.fn( () => "" ),
    useStaticQuery: jest.fn( () => ( {
        site: {
            siteMetadata: {
                siteTitle: "title",
                siteLanguage: "en",
                siteDescription: "description",
                siteBanner: "https://example.com/banner.png",
                siteUrl: "https://example.com",
            },
        },
    } ) ),
} ) );
