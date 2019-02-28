import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Carousel from "../../components/carousel";
import Section from "../../components/section";
import ProjectCard from "../../components/project_card";
import { navigate } from "gatsby";
import projectList from "./project_list";

class Projects extends React.Component {
    state = { searchInput: "", projectSelected: this.props.p || null };

    onChange = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    };

    onClick = e => {
        this.setState({ projectSelected: e });
    };

    renderProjectCard = () => {
        let list = [];
        Object.keys(projectList).forEach(key => {
            list.push(<ProjectCard key={key} _key={key} p={projectList[key]} onClick={this.onClick} />);
        });
        return list;
    };

    handleClose = e => {
        navigate("/p/");
        this.setState({ projectSelected: null });
    };

    render() {
        return (
            <Layout>
                <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
                <Carousel style={{ height: 600 }} imgKey="project_carousel" cite="University of Texas at Dallas, Richardson, TX © Xinyang Zhu 2018">
                    <h1>Projects</h1>
                    <h2>From database to UI, mobile to VR, make dreams come true.</h2>
                </Carousel>
                <Section maxWidth="100%" backgroundColor="#EDEEEF">
                    <div className="project-card-container center">{this.renderProjectCard()}</div>
                </Section>
            </Layout>
        );
    }
}

export default Projects;
