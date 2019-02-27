import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Carousel from "../../components/carousel";
import Section from "../../components/section";
import ProjectCard from "../../components/project_card";
import { Dialog } from "@material-ui/core";
import projectList from "../../project_list";
import ProjectDetail from "../../components/project_detail";

class Projects extends React.Component {
    state = { searchInput: "", projectSelected: null };

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

                    <div className="project-card-container">{this.renderProjectCard()}</div>
                    <Dialog
                        id="project-detail-card"
                        open={this.state.projectSelected ? true : false}
                        onClose={() => this.setState({ projectSelected: null })}
                        PaperProps={{
                            elevation: 24,
                            style: { maxWidth: "100%", width: 1200, maxHeight: "fit-content", borderRadius: 16, margin: "80px 48px" }
                        }}
                    >
                        <ProjectDetail cardMode={true} _key={this.state.projectSelected} p={projectList[this.state.projectSelected]} />
                    </Dialog>
                </Section>
            </Layout>
        );
    }
}

export default Projects;

export const query = graphql`
    {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                        date
                        author
                    }
                    excerpt
                }
            }
        }
    }
`;
