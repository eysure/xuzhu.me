import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Carousel from "../components/carousel";

const ContactPage = () => (
    <Layout>
        <SEO title="Contact Me" keywords={[`gatsby`, `application`, `react`]} />
        <Carousel
            imgKey="contact_me_carousel"
            style={{ height: "100vh", maxHeight: "100vh" }}
            title={
                <>
                    <h1>Let's connect</h1>
                    <div className="sm-list">
                        <a href="mailto:xinyangzhu@hotmail.com">
                            <button className="dark">
                                <i className="sm-icons">k</i>xinyangzhu@hotmail.com
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/in/xinyangzhu/" target="_blank" rel="noopener noreferrer">
                            <button className="dark">
                                <i className="sm-icons">C</i>xinyangzhu
                            </button>
                        </a>
                        <a href="https://github.com/eysure" target="_blank" rel="noopener noreferrer">
                            <button className="dark">
                                <i className="sm-icons">)</i>eysure
                            </button>
                        </a>
                        <a href="https://www.facebook.com/mr.xyzhu" target="_blank" rel="noopener noreferrer">
                            <button className="dark">
                                <i className="sm-icons">E</i>mr.xyzhu
                            </button>
                        </a>
                        <a href="https://www.instagram.com/_eysure" target="_blank" rel="noopener noreferrer">
                            <button className="dark">
                                <i className="sm-icons">Q</i>_eysure
                            </button>
                        </a>
                    </div>
                </>
            }
            cite="Manhattan, New York City, NY © Xinyang Zhu 2018"
        />
    </Layout>
);

export default ContactPage;
