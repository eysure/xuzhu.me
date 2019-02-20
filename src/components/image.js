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
    return <StaticQuery query={query} render={data => <Img fluid={data[props.imgKey || "none"].childImageSharp.fluid} {...props} />} />;
}

const query = graphql`
    query {
        none: file(relativePath: { eq: "nikita-kachanovsky-445394-unsplash.jpg" }) {
            childImageSharp {
                fluid(maxHeight: 2160) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        home_carousel: file(relativePath: { eq: "computer.jpg" }) {
            childImageSharp {
                fluid(maxHeight: 2160) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        fof_carousel: file(relativePath: { eq: "denver.jpg" }) {
            childImageSharp {
                fluid(maxHeight: 2160) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        resume_carousel: file(relativePath: { eq: "helloquence-51716-unsplash.jpg" }) {
            childImageSharp {
                fluid(maxHeight: 2160) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        contact_me_carousel: file(relativePath: { eq: "manhattan.jpg" }) {
            childImageSharp {
                fluid(maxHeight: 2160) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
