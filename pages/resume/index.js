import Head from "next/head";
import { Component } from "react";
import Layout from "../../components/Layout";
import { attributes, react as HomeContent } from "../../content/resume.md";
import { Box, Card, Heading, Button, Accordion, AccordionPanel } from "grommet";

export default class Home extends Component {
  render() {
    let { title, summary, skills, employment, education } = attributes;
    return (
      <Layout title="Alex Merced Resume">
        <Heading level="2" alignSelf="center" className="head" full="true">
          {title}
        </Heading>
        <Heading level="3" alignSelf="center" className="head" full="true">
          Email: alex@alexmerced.dev
        </Heading>
        <Box wrap="true" direction="row" pad="medium" justify="between">
          <Accordion width="90%" margin="auto">
            <AccordionPanel label="Summary" full="true">
              <Box pad="medium" background="light-2">
              {summary.map((sum, index) => <p key={index}>{sum.action}</p>)}
              </Box>
            </AccordionPanel>
            <AccordionPanel label="Skills">
              <Box pad="medium" background="light-2">
                <h4>Frontend</h4>
                <p>{skills.frontend}</p>
                <h4>Backend</h4>
                <p>{skills.backend}</p>
                <h4>Dev-Ops</h4>
                <p>{skills.devops}</p>
                <h4>Productivity</h4>
                <p>{skills.productivity}</p>
              </Box>
            </AccordionPanel>
            <AccordionPanel label="Employment">
              <Box pad="medium" background="light-2">
                {employment.map((job, index) =>(<>
                <h4>{job.name} - {job.position}</h4>
                <h5>{job.dates}</h5>
                <p>{job.description}</p>
                </>) )}
              </Box>
            </AccordionPanel>
            <AccordionPanel label="Education">
              <Box pad="medium" background="light-2">
                {education.map((edu, index) =>(<>
                <h4>{edu.name} - {edu.program}</h4>
                <h5>{edu.dates}</h5>
                <p>{edu.description}</p>
                </>) )}
              </Box>
            </AccordionPanel>
          </Accordion>
        </Box>
      </Layout>
    );
  }
}
