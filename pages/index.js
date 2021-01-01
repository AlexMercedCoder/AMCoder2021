import Head from "next/head";
import { Component } from "react";
import Layout from "../components/Layout";
import { Heading, Box, Paragraph } from "grommet";
import { VscEmptyWindow, VscFileZip } from "react-icons/vsc";
import { SiJavascript } from "react-icons/si";
import { FaUserGraduate } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";
import Tada from "react-reveal/Tada";
import Link from 'next/link'
import {CtaBox, CtaBtn} from "../components/styles"

export default class Home extends Component {
  render() {
    return (
      <Layout title="Alex Merced - Software Developer">
        <Box className={"main"}>
          <Heading level="2" alignSelf="center" className="sub">
            <span class="orange">
              {" "}
              <Tada>I Learn. I Teach. I Code.</Tada>
            </span>
          </Heading>
          <img style={{
            height: "250px",
            borderRadius: "50%",
            width: "200px",
            display: "block",
            margin: "9px auto"
          }} id="photo" src="/pic.JPG" alt="Alex Merced Coder"/>

          <CtaBox>
            <Link href="/resume"><CtaBtn>Resume</CtaBtn></Link>
            <Link href="/apps"><CtaBtn>Apps</CtaBtn></Link>
          </CtaBox>

          <CtaBox>
            <Link href="/libraries"><CtaBtn>Libraries</CtaBtn></Link>
            <a href="https://tuts.alexmercedcoder.com"><CtaBtn>Blog</CtaBtn></a>
          </CtaBox>


          <p alignSelf="center" fill={true} className={"head"}>
            My name is Alex Merced and I'm a software developer with a passion
            for developing, learning and educating. This page is my home on the
            web and I invite you to explore for content that reflects the time
            and passion I spend honing my craft.{" "}
            <span id="plug">
              You can also find links to my patreon and merchandise in the
              footer.
            </span>
            <hr />
            <ul>
              <li>
                <FaUserGraduate /> To view my resume
              </li>
              <li>
                <VscEmptyWindow /> To view apps I've created
              </li>
              <li>
                <VscFileZip /> To view code libraries I've authored
              </li>
              <li>
                <SiJavascript /> To head to devNursery.com where I post video
                and blog tutorials, along with my developer slack and discord
                communities.
              </li>
              <li>
                Also please follow me on twitter, linkedin, Github, and
                subscribe my podcast, Web Dev 101.
              </li>
            </ul>
            <hr />
            If you need someone to assist or consult on your development project
            feel free to email me at alex@alexmerced.dev for a free consultation
            to assess your needs and what your best options are.
          </p>
        </Box>
      </Layout>
    );
  }
}
