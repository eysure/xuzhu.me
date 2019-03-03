import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Carousel from "../components/carousel";

export default class ResumePage extends Component {
    render() {
        return (
            <Layout>
                <SEO title="Resume" keywords={[`gatsby`, `application`, `react`]} />
                <Carousel imgKey="resume_carousel" cite="Photo by Helloquence on Unsplash">
                    <h1>Resume</h1>
                    <a className="button dark" href="https://www.dropbox.com/s/tdl79fhpc50cw41/Xinyang_Zhu_Resume.pdf?dl=0">
                        Download my resume
                    </a>
                    <span className="san-serif">It may take few seconds for Google Docs to transcode.</span>
                </Carousel>
            </Layout>
        );
    }
}
