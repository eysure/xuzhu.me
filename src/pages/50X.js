import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Carousel from "../components/carousel";

const NotFoundPage = () => (
    <Layout>
        <SEO title="404 Not found" />
        <Carousel style={{ height: "100vh", maxHeight: "100vh" }} imgKey="fof_carousel" cite="Denver, Colorado © Xinyang Zhu 2019">
            <h1>Server Error</h1>
            <h2>Sorry, my server has some errors now. Please come latter. </h2>
            <div className="flex-row" style={{ marginTop: "32px" }}>
                <button
                    className="dark"
                    onClick={() => {
                        window.history.back();
                    }}
                >
                    Back
                </button>
                <Link to="/contact">
                    <button className="dark">Ask Me</button>
                </Link>
            </div>
        </Carousel>
    </Layout>
);

export default NotFoundPage;
