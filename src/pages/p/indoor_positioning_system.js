import React, { Component } from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Section from "../../components/section";
import projectList from "../../../project_list";
import ProjectHeader from "../../components/project_header";
import Image from "../../components/image";
import Icon from "../../components/icon";

export default class extends Component {
    p = projectList["indoor_positioning_system"];

    render() {
        return (
            <Layout>
                <SEO title="Indoor Positioning System" />
                <ProjectHeader p={this.p} />
                <Section>
                    <div className="center" style={{ width: 240 }}>
                        <Image imgKey="ips_logo" />
                    </div>
                    <h3 className="center">A real-time indoor positioning system using Bluetooth Low Energy (BLE) beacons and Android Smartphone</h3>
                </Section>
                <Section contentStyle={{ padding: 64 }}>
                    <div className="flex-row" style={{ width: "100%", maxWidth: 960, alignItems: "flex-start" }}>
                        <div className="flex" style={{ width: "33%", alignItems: "flex-start" }}>
                            <h2>Front-end</h2>
                            <div className="skill-badge">
                                <Icon iconKey="java" /> Java
                            </div>
                            <div className="skill-badge">
                                <Icon iconKey="android" /> Android SDK
                            </div>
                        </div>
                        <div className="flex" style={{ width: "33%", alignItems: "flex-start" }}>
                            <h2>Back-end</h2>
                            <div className="skill-badge">
                                <Icon iconKey="java" /> Java
                            </div>
                            <div className="skill-badge">
                                <Icon iconKey="mysql" /> MySQL
                            </div>
                        </div>
                        <div className="flex" style={{ width: "33%", alignItems: "flex-start" }}>
                            <h2>Hardware</h2>
                            <div className="skill-badge">
                                <Icon iconKey="bluetooth" /> Bluetooth LE
                            </div>
                            <div className="skill-badge">
                                <Icon iconKey="mysql" /> MySQL
                            </div>
                        </div>
                    </div>
                </Section>
            </Layout>
        );
    }
}
