import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Carousel from "../components/carousel";

const ContactPage = () => (
    <Layout>
        <SEO title="Contact Me" keywords={[`gatsby`, `application`, `react`]} />
        <Carousel imgKey="contact_me_carousel" style={{ height: "100vh", maxHeight: "100vh" }} cite="Manhattan, New York City, NY © Xinyang Zhu 2018">
            <div className="sm-card" style={{ textShadow: "none" }}>
                <h1 style={{ color: "black", fontSize: "2.5rem" }}>Let's connect</h1>
                <div className="sm-list">
                    <a className="button invisible" href="mailto:xinyangzhu@hotmail.com">
                        <i className="sm-icons with-text">k</i>xinyangzhu@hotmail.com
                    </a>
                    <a className="button invisible" href="https://www.linkedin.com/in/xinyangzhu/" target="_blank" rel="noopener noreferrer">
                        <i className="sm-icons with-text">C</i>xinyangzhu
                    </a>
                    <a className="button invisible" href="https://github.com/eysure" target="_blank" rel="noopener noreferrer">
                        <i className="sm-icons with-text">)</i>eysure
                    </a>
                    <a className="button invisible" href="https://www.facebook.com/mr.xyzhu" target="_blank" rel="noopener noreferrer">
                        <i className="sm-icons with-text">E</i>mr.xyzhu
                    </a>
                    <a className="button invisible" href="https://www.instagram.com/_eysure" target="_blank" rel="noopener noreferrer">
                        <i className="sm-icons with-text">Q</i>_eysure
                    </a>
                </div>
            </div>
        </Carousel>
    </Layout>
);

export default ContactPage;
