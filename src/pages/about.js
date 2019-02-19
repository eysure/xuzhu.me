import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

export default () => (
    <Layout>
        <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
        <p>Hi, this is the about page</p>
        <div style={{ maxWidth: `300px` }}>
            <Image />
        </div>
        <Link to="/">Go Home</Link>
    </Layout>
);
