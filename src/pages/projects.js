import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Carousel from "../components/carousel";

const Projects = () => (
    <Layout>
        <SEO title="Life" keywords={[`gatsby`, `application`, `react`]} />
        <Carousel
            imgKey="project_carousel"
            title={
                <>
                    <h1>Projects</h1>
                    <h2>This page is in construction now, please come latter</h2>
                </>
            }
            cite="University of Texas at Dallas, Richardson, TX © Xinyang Zhu 2018"
        />
    </Layout>
);

export default Projects;
