import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

export default function(props) {
    return <StaticQuery query={query} render={data => <Img fluid={data[props.iconKey || "none"].childImageSharp.fluid} {...props} />} />;
}

const query = graphql`
    query {
        none: file(relativePath: { eq: "icons/js.png" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        js: file(relativePath: { eq: "icons/js.png" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        java: file(relativePath: { eq: "icons/java.png" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        python: file(relativePath: { eq: "icons/python.png" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        php: file(relativePath: { eq: "icons/php.png" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        react: file(relativePath: { eq: "icons/react.png" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        redux: file(relativePath: { eq: "icons/redux.png" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        gatsby: file(relativePath: { eq: "icons/gatsby.png" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        html5: file(relativePath: { eq: "icons/html5.png" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        css3: file(relativePath: { eq: "icons/css3.png" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        jquery: file(relativePath: { eq: "icons/jquery.png" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        material_ui: file(relativePath: { eq: "icons/material_ui.png" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        bootstrap: file(relativePath: { eq: "icons/bootstrap.png" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        expressjs: file(relativePath: { eq: "icons/expressjs.png" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        meteor: file(relativePath: { eq: "icons/meteor.png" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        nodejs: file(relativePath: { eq: "icons/nodejs.png" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        mongodb: file(relativePath: { eq: "icons/mongodb.png" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        mysql: file(relativePath: { eq: "icons/mysql.png" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        oracle: file(relativePath: { eq: "icons/oracle.jpg" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        aws: file(relativePath: { eq: "icons/aws.png" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        firebase: file(relativePath: { eq: "icons/firebase.png" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        alibaba_cloud: file(relativePath: { eq: "icons/alibaba_cloud.png" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        apache: file(relativePath: { eq: "icons/apache.png" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        android: file(relativePath: { eq: "icons/android.png" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        csharp: file(relativePath: { eq: "icons/csharp.jpg" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        steam_vr: file(relativePath: { eq: "icons/steam.png" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        unity: file(relativePath: { eq: "icons/unity.png" }) {
            childImageSharp {
                fluid(maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
