import React, { Component } from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Section from "../../components/section";
import projectList from "../p/project_list";
import ProjectHeader from "../../components/project_header";
import Image from "../../components/image";
import Icon from "../../components/icon";
import designConcept from "../../images/p/aquarius_os/design_concept.svg";

export default class extends Component {
    p = projectList["aquarius_os"];

    render() {
        return (
            <Layout>
                <SEO title="AquariusOS" />
                <ProjectHeader p={this.p} />
                <Section>
                    <div className="center" style={{ width: 240 }}>
                        <Image imgKey="aquarius_os_logo_title" />
                    </div>
                    <h3 className="center">A mordern desktop environment for enterprise applications.</h3>
                </Section>
                <Section fullWidth>
                    <div className="flex-row full-width between" style={{ alignItems: "start" }}>
                        <div style={{ padding: "0 64px" }}>
                            <h1>AuqriusOS is</h1>
                            <ul style={{ fontSize: "1.5rem", fontWeight: 300 }}>
                                <li>A cool desktop envrionment running just in your browser</li>
                                <li>Designed for complex enterprise systems</li>
                                <li>Fully customizable for every application</li>
                                <li>Secure and fast, in every aspect</li>
                            </ul>
                        </div>
                        <div style={{ width: "100%", maxWidth: "1080px" }}>
                            <Image imgKey="aq_pc_show" />
                        </div>
                    </div>
                </Section>
                <Section contentStyle={{ padding: 64 }}>
                    <div className="flex-row" style={{ width: "100%", maxWidth: 640, alignItems: "flex-start" }}>
                        <div className="flex" style={{ width: "50%", alignItems: "flex-start" }}>
                            <h2>Front-end</h2>
                            <div className="skill-badge">
                                <Icon iconKey="js" /> JavaScript
                            </div>
                            <div className="skill-badge">
                                <Icon iconKey="react" /> React
                            </div>
                        </div>
                        <div className="flex" style={{ width: "50%", alignItems: "flex-start" }}>
                            <h2>Back-end</h2>
                            <div className="skill-badge">
                                <Icon iconKey="nodejs" /> Node.js
                            </div>
                            <div className="skill-badge">
                                <Icon iconKey="meteor" /> Meteor
                            </div>
                            <div className="skill-badge">
                                <Icon iconKey="mongodb" /> MongoDB
                            </div>
                            <div className="skill-badge">
                                <Icon iconKey="apache" /> Apache HTTP Server
                            </div>
                        </div>
                    </div>
                </Section>
                <Section title={<b>Design Concept</b>}>
                    <img style={{ width: "100%", padding: "32px 0" }} src={designConcept} />
                </Section>
                <Section contentStyle={{ alignItems: "flex-start", padding: 64 }} style={{ background: "aliceblue" }}>
                    <h1>Long-term Project</h1>
                    <p>This is a long-term project. Features, layout and contents will update continuously.</p>
                </Section>
            </Layout>
        );
    }
}
