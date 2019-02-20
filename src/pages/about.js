import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image";

const AboutPage = () => (
    <Layout>
        <SEO title="Life" keywords={[`gatsby`, `application`, `react`]} />
        <div className="carousel">
            <Image className="carousel-image" />
            <div className="carousel-title">
                <h1>More About Me</h1>
                <h2>A programmer for ultimate user experience</h2>
            </div>
        </div>
    </Layout>
);

export default AboutPage;
