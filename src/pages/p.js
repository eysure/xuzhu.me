import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Carousel from "../components/carousel";
import Section from "../components/section";
import Icon from "../components/icon";
import Image from "../components/image";

import { Tooltip } from "@material-ui/core";
import ProjectCard from "../components/project_card";

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
            <div className="project-card-container">
                <ProjectCard
                    title="AquariusOS"
                    subtitle="A mordern desktop environment for enterprise applications."
                    techList="react redux meteor"
                    imgKey="p_aquariusos"
                    link="aquarius_os"
                />
                <ProjectCard title="Xyzhu.me" subtitle="Xinyang Zhu's personal website" techList="react gatsby material_ui" imgKey="p_xyzhu" link="xyzhu_me" />
                <ProjectCard
                    title="Dalao Hotpot"
                    subtitle="A hotpot restaurant online ordering website."
                    techList="php jquery mysql bootstrap"
                    imgKey="p_dalao"
                    link="dalao"
                />
            </div>
        </Section>
    </Layout>
);

export default Projects;
