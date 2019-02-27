import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Section from "../../components/section";

export default function() {
    return (
        <Layout>
            <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
            <Section>Aquarius</Section>
        </Layout>
    );
}
