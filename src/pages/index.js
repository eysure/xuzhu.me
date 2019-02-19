import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className="carousel">
            <Image className="carousel-image" />
            <div className="carousel-title">Xinyang Zhu</div>
            <span className="carousel-subtitle">A programmer for ultimate user experience</span>
            <a className="carousel-cite" href="https://unsplash.com/photos/OVbeSXRk_9E" target="_blank" rel="noopener noreferrer">
                Photo by Nikita Kachanovsky on Unsplash
            </a>
        </div>
    </Layout>
);

export default IndexPage;
