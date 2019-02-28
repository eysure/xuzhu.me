import React, { Component } from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Section from "../../components/section";
import projectList from "../../../project_list";
import ProjectHeader from "../../components/project_header";
import XyzhuLogo from "../../images/xyzhu.svg";
import Icon from "../../components/icon";

export default class extends Component {
    p = projectList["xyzhu_me"];

    render() {
        return (
            <Layout>
                <SEO title="Xyzhu.me" />
                <ProjectHeader p={this.p} />
                <Section>
                    <div className="center" style={{ width: 240 }}>
                        <img style={{ width: 240 }} src={XyzhuLogo} alt="xyzhu.me logo" />
                    </div>
                    <h3 className="center">Xinyang Zhu's personal website.</h3>
                </Section>
                <Section contentStyle={{ padding: 64 }}>
                    <div className="flex-row" style={{ width: "100%", maxWidth: 640, alignItems: "flex-start" }}>
                        <div className="flex" style={{ width: "50%", alignItems: "flex-start" }}>
                            <h2>Front-end</h2>
                            <div className="skill-badge">
                                <Icon iconKey="js" /> JavaScript
                            </div>
                            <div className="skill-badge">
                                <Icon iconKey="gatsby" /> Gatsby
                            </div>
                            <div className="skill-badge">
                                <Icon iconKey="graphql" /> GraphQL
                            </div>
                        </div>
                        <div className="flex" style={{ width: "50%", alignItems: "flex-start" }}>
                            <h2>Back-end</h2>
                            <div className="skill-badge">
                                <Icon iconKey="apache" /> Apache HTTP Server
                            </div>
                        </div>
                    </div>
                </Section>
                <Section contentStyle={{ alignItems: "flex-start", padding: 64 }} style={{ background: "aliceblue" }}>
                    <h1>Long-term Project</h1>
                    <p>This is a long-term project. Features, layout and contents will update continuously.</p>
                </Section>
            </Layout>
        );
    }
}
