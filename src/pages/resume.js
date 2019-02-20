import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Carousel from "../components/carousel";

export default class ResumePage extends Component {
    onDocumentLoadSuccess = () => {
        console.log("Success");
    };
    render() {
        return (
            <Layout>
                <SEO title="Resume" keywords={[`gatsby`, `application`, `react`]} />
                <Carousel
                    imgKey="resume_carousel"
                    title={
                        <>
                            <h1>Resume</h1>
                            <a
                                className="button dark"
                                href="https://docs.google.com/document/export?format=pdf&id=1w81QS9r4sta0MFz4QKj7qDqU5Zi7eXf236_bhiIkUi0"
                            >
                                Take a copy
                            </a>
                        </>
                    }
                    cite="Photo by Helloquence on Unsplash"
                />
            </Layout>
        );
    }
}
