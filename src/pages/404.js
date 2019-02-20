import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Carousel from "../components/carousel";

const NotFoundPage = () => (
    <Layout>
        <SEO title="404 Not found" />
        <Carousel
            style={{ height: "100vh", maxHeight: "100vh" }}
            imgKey="fof_carousel"
            title={
                <>
                    <h1>404</h1>
                    <h2>
                        Sorry, but I can't find anything about <b>{window.location.pathname.slice(1)}</b>
                    </h2>
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
                </>
            }
            cite="Denver, Colorado © Xinyang Zhu 2019"
        />
    </Layout>
);

export default NotFoundPage;
