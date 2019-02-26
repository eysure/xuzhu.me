import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Carousel from "../components/carousel";
import Section from "../components/section";
import ProjectCard from "../components/project_card";

class Projects extends React.Component {
    state = { searchInput: "" };

    onChange = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <Layout>
                <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
                <Carousel
                    style={{ height: 600 }}
                    imgKey="project_carousel"
                    title={
                        <>
                            <h1>{this.props.p || "Projects"}</h1>
                            <h2>From database to UI, mobile to VR, make dreams come true.</h2>
                        </>
                    }
                    cite="University of Texas at Dallas, Richardson, TX © Xinyang Zhu 2018"
                />
                <Section maxWidth="100%" backgroundColor="#EDEEEF">
                    <div id="search-bar" style={{ maxWidth: "100%", width: "600px" }}>
                        {/* <input
                            name="searchInput"
                            type="text"
                            value={this.state.searchInput}
                            onChange={this.onChange}
                            placeholder="Search..."
                            style={{ width: "100%" }}
                        /> */}
                    </div>

                    <div className="project-card-container">
                        <ProjectCard
                            title="AquariusOS"
                            subtitle="A mordern desktop environment for enterprise applications."
                            tags={["Full-stack", "Front-end", "Server-side"]}
                            techList="react redux meteor"
                            imgKey="p_aquariusos"
                            link="aquarius_os"
                        />
                        <ProjectCard title="Xyzhu.me" subtitle="Xinyang Zhu's personal website" tags={["Front-end"]} techList="react gatsby" imgKey="p_xyzhu" />
                        <ProjectCard
                            title="Dalao Hotpot"
                            subtitle="A hotpot restaurant online ordering website."
                            tags={["Full-stack", "Front-end", "Server-side"]}
                            techList="php jquery mysql bootstrap"
                            imgKey="p_dalao"
                        />
                        <ProjectCard
                            title="Indoor Positioning System"
                            subtitle="High precision indoor position system using Bluetooth LE beacons and Android phone."
                            tags={["Android", "Server-side"]}
                            techList="android java mysql"
                            imgKey="p_indoor_positioning"
                        />
                        <ProjectCard
                            title="VR Ping Pong Trainer"
                            subtitle="High-fidelity VR Ping Pong Training Simulator."
                            tags={["VR"]}
                            techList="csharp unity"
                            imgKey="p_pingpong"
                        />
                    </div>
                </Section>
            </Layout>
        );
    }
}

export default Projects;
