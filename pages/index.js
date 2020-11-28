import Head from "next/head";
import { Component } from "react";
import Layout from "../components/Layout";
import { Heading, Box, Paragraph } from "grommet";
import { VscEmptyWindow, VscFileZip } from "react-icons/vsc";
import { SiJavascript } from "react-icons/si";
import { FaFolder } from "react-icons/fa";
import {GrDocumentUser} from "react-icons/gr"

export default class Home extends Component {
  render() {
    return (
      <Layout title="main page">
        <Box>
          <Heading level="2" alignSelf="center"> Welcome, let's code.</Heading>
          <Paragraph alignSelf="center" fill="true" className={"head"}>
            My name is Alex Merced and I'm a software developer with a passion for developing, learning and educating. This page is my home on the web and I invite you to check the page out for really cool content that reflects the time and passion I spend honing my craft. You can also find links to my patreon and merchandise in the footer.

            <ul>
              <li><GrDocumentUser/> To view my resume</li>
              <li><VscEmptyWindow/> To view apps I've created</li>
              <li><VscFileZip/> To view my code libraries I've authored</li>
              <li><SiJavascript/> To head to devNursery.com where I post video and blog tutorials, along with my developer slack and discord communities.</li>
              <li>Also please follow me on twitter, linkedin, Github, and subscribe my podcast, Web Dev 101.</li>
              </ul>

              If you need someone to assist or consult on your development project feel free to email me at alex@alexmerced.dev for a free consultation to assess your needs what your best options are.
          </Paragraph>
        </Box>
      </Layout>
    );
  }
}
