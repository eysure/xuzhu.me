import React, { Component } from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Section from "../../components/section";
import projectList from "./project_list";
import ProjectHeader from "../../components/project_header";
import Image from "../../components/image";
import Icon from "../../components/icon";
import Carousel from "../../components/carousel";

export default class extends Component {
    p = projectList["vr_ping_pong_trainer"];

    render() {
        return (
            <Layout>
                <SEO title="Indoor Positioning System" />
                <ProjectHeader p={this.p} />
                <Carousel imgKey="vr_pp_carousel" style={{ height: 600 }} contentStyle={{ marginTop: 60 }}>
                    <div className="center" style={{ width: "80%" }}>
                        <Image imgKey="vr_pp_logo" style={{ margin: "32px" }} />
                        <h2>A high-fidelity virtual reality Ping Pong (table tennis) trainer deployed on the HTC Vive.</h2>
                    </div>
                </Carousel>
                <Section contentStyle={{ padding: 64 }}>
                    <div className="flex-row" style={{ width: "100%", maxWidth: 960, alignItems: "flex-start" }}>
                        <div className="flex" style={{ width: "50%", alignItems: "flex-start" }}>
                            <h2>Software</h2>
                            <div className="skill-badge">
                                <Icon iconKey="csharp" /> C#
                            </div>
                            <div className="skill-badge">
                                <Icon iconKey="unity" /> Unity
                            </div>
                            <div className="skill-badge">
                                <Icon iconKey="steam" /> Steam VR
                            </div>
                        </div>
                        <div className="flex" style={{ width: "50%", alignItems: "flex-start" }}>
                            <h2>Hardware</h2>
                            <div className="skill-badge">
                                <Icon iconKey="vive" /> HTC Vive
                            </div>
                        </div>
                    </div>
                </Section>
            </Layout>
        );
    }
}
