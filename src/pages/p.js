import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Carousel from "../components/carousel";
import Section from "../components/section";
import Icon from "../components/icon";
import Image from "../components/image";

import { Tooltip } from "@material-ui/core";

const Projects = () => (
    <Layout>
        <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
        <Carousel
            style={{ height: 600 }}
            imgKey="project_carousel"
            title={
                <>
                    <h1>Projects</h1>
                    <h2>Featured proejcts I have done these years.</h2>
                </>
            }
            cite="University of Texas at Dallas, Richardson, TX © Xinyang Zhu 2018"
        />
        <Section title={<b>Web Development</b>} maxWidth="100%" backgroundColor="#EDEEEF">
            <div className="project-grid">
                <div className="project-badge" style={{ gridColumn: "1 / span 3" }}>
                    <div style={{ boxSizing: "border-box", height: "100%", width: "calc(100% - 22vw)", padding: "32px" }}>
                        <h1 style={{ margin: "8px 0 16px 0", fontSize: "2vw" }}>AquariusOS</h1>
                        <h2>A mordern desktop environment for enterprise applications.</h2>
                        <div style={{ position: "absolute", bottom: 0, left: 0, margin: 32, display: "flex", justifyContent: "start", alignItems: "center" }}>
                            <Tooltip title="React" placement="top">
                                <div className="skill-badge-mini">
                                    <Icon iconKey="react" />
                                </div>
                            </Tooltip>
                            <Tooltip title="Redux" placement="top">
                                <div className="skill-badge-mini">
                                    <Icon iconKey="redux" />
                                </div>
                            </Tooltip>
                            <Tooltip title="Meteor" placement="top">
                                <div className="skill-badge-mini">
                                    <Icon iconKey="meteor" />
                                </div>
                            </Tooltip>
                        </div>
                    </div>
                    <Image imgKey="home_carousel" />
                </div>
                <div className="project-badge" style={{ gridColumn: "1 / span 3" }}>
                    <div style={{ boxSizing: "border-box", height: "100%", width: "calc(100% - 22vw)", padding: "32px" }}>
                        <h1 style={{ margin: "8px 0 16px 0", fontSize: "2vw" }}>Xyzhu.me</h1>
                        <h2>Xinyang Zhu's personal website</h2>
                        <div style={{ position: "absolute", bottom: 0, left: 0, margin: 32, display: "flex", justifyContent: "start", alignItems: "center" }}>
                            <Tooltip title="React" placement="top">
                                <div className="skill-badge-mini">
                                    <Icon iconKey="react" />
                                </div>
                            </Tooltip>
                            <Tooltip title="Gatsby" placement="top">
                                <div className="skill-badge-mini">
                                    <Icon iconKey="gatsby" />
                                </div>
                            </Tooltip>
                        </div>
                    </div>
                    <Image imgKey="home_carousel" />
                </div>
                <div className="project-badge" style={{ gridColumn: "1 / span 3" }}>
                    <div style={{ boxSizing: "border-box", height: "100%", width: "calc(100% - 22vw)", padding: "32px" }}>
                        <h1 style={{ margin: "8px 0 16px 0", fontSize: "2vw" }}>Dalao Restaurant</h1>
                        <h2>A hotpot restaurant online ordering website.</h2>
                        <div style={{ position: "absolute", bottom: 0, left: 0, margin: 32, display: "flex", justifyContent: "start", alignItems: "center" }}>
                            <Tooltip title="PHP" placement="top">
                                <div className="skill-badge-mini">
                                    <Icon iconKey="php" />
                                </div>
                            </Tooltip>
                            <Tooltip title="jQuery" placement="top">
                                <div className="skill-badge-mini">
                                    <Icon iconKey="jquery" />
                                </div>
                            </Tooltip>
                            <Tooltip title="MySQL" placement="top">
                                <div className="skill-badge-mini">
                                    <Icon iconKey="mysql" />
                                </div>
                            </Tooltip>
                            <Tooltip title="Bootstrap" placement="top">
                                <div className="skill-badge-mini">
                                    <Icon iconKey="bootstrap" />
                                </div>
                            </Tooltip>
                        </div>
                    </div>
                    <Image imgKey="home_carousel" />
                </div>
            </div>
        </Section>
    </Layout>
);

export default Projects;
