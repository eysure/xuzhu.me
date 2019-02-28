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
        project_carousel: file(relativePath: { eq: "project.jpg" }) {
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
        about_carousel: file(relativePath: { eq: "utd.jpg" }) {
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
        p_aquariusos: file(relativePath: { eq: "p_aquariusos.jpg" }) {
            childImageSharp {
                fluid(maxHeight: 1024) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        p_dalao: file(relativePath: { eq: "p_dalao.jpg" }) {
            childImageSharp {
                fluid(maxHeight: 1024) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        p_xyzhu: file(relativePath: { eq: "p_xyzhu.jpg" }) {
            childImageSharp {
                fluid(maxHeight: 1024) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        p_pingpong: file(relativePath: { eq: "p_pingpong.jpg" }) {
            childImageSharp {
                fluid(maxHeight: 1024) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        p_indoor_positioning: file(relativePath: { eq: "p_indoor_positioning.jpg" }) {
            childImageSharp {
                fluid(maxHeight: 1024) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        aquarius_os_logo_title: file(relativePath: { eq: "p/aquarius_os/aquarius_os_logo_title.png" }) {
            childImageSharp {
                fluid(maxHeight: 1024) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        aq_pc_show: file(relativePath: { eq: "p/aquarius_os/pc_show.png" }) {
            childImageSharp {
                fluid(maxHeight: 594) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        dalao_carousel: file(relativePath: { eq: "p/dalao_hotpot/carousel.jpg" }) {
            childImageSharp {
                fluid(maxHeight: 1024) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        dalao_logo: file(relativePath: { eq: "p/dalao_hotpot/logo.png" }) {
            childImageSharp {
                fluid(maxHeight: 1024) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        ips_logo: file(relativePath: { eq: "p/indoor_positioning_system/logo.png" }) {
            childImageSharp {
                fluid(maxHeight: 1024) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        vr_pp_carousel: file(relativePath: { eq: "p/vr_ping_pong_trainer/background.png" }) {
            childImageSharp {
                fluid(maxHeight: 1024) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        vr_pp_logo: file(relativePath: { eq: "p/vr_ping_pong_trainer/logo.png" }) {
            childImageSharp {
                fluid(maxHeight: 1024) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
