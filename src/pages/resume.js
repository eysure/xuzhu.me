import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Carousel from "../components/carousel";

import dropboxIcon from "../../src/images/icons/dropbox.svg";

export default class ResumePage extends Component {
    render() {
        return (
            <Layout>
                <SEO title="Resume" keywords={[`gatsby`, `application`, `react`]} />
                <Carousel imgKey="resume_carousel" cite="Photo by Helloquence on Unsplash">
                    <h1>Resume</h1>
                    <div className="flex-row">
                        <a className="button dark" href="https://www.dropbox.com/s/tdl79fhpc50cw41/Xinyang_Zhu_Resume.pdf?dl=1">
                            <i className="material-icons with-text" style={{ fontSize: "1.25rem" }}>
                                cloud_download
                            </i>
                            Download
                        </a>
                        <a className="button dark" href="https://www.dropbox.com/s/tdl79fhpc50cw41/Xinyang_Zhu_Resume.pdf?dl=0">
                            <i className="sm-icons with-text" style={{ fontSize: "1.25rem", transform: "scale(1.8)" }}>
                                ç
                            </i>
                            View on Dropbox
                        </a>
                    </div>
                </Carousel>
            </Layout>
        );
    }
}
