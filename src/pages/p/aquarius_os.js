import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Carousel from "../../components/carousel";
import Section from "../../components/section";
import Icon from "../../components/icon";
import Image from "../../components/image";

import { Tooltip } from "@material-ui/core";
import ProjectCard from "../../components/project_card";

const Projects = () => (
    <Layout>
        <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
        <Section title={<b>AquariusOS</b>} maxWidth="100%" backgroundColor="#EDEEEF" />
    </Layout>
);

export default Projects;
