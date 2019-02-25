import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Carousel from "../components/carousel";

const AboutPage = () => (
    <Layout>
        <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
        <Carousel
            imgKey="about_carousel"
            title={
                <>
                    <h1>More About Me</h1>
                    <h2>This page is in construction now, please come latter</h2>
                </>
            }
            cite="University of Texas at Dallas, Richardson, TX © Xinyang Zhu 2018"
        />
    </Layout>
);

export default AboutPage;
