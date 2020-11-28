import Head from "next/head";
import React from "react";
import { Grommet, Heading, Nav, Anchor, DropButton, Box } from "grommet";
import { SubTitle } from "./styles";
import { theme } from "./theme";
import {
  VscGithubAlt,
  VscTwitter,
  VscEmptyWindow,
  VscFileZip,
} from "react-icons/vsc";
import {
  SiLinkedin,
  SiApplepodcasts,
  SiJavascript,
  SiPatreon,
} from "react-icons/si";
import { FaTshirt, FaHome, FaFolder } from "react-icons/fa";
import {GrDocumentUser} from "react-icons/gr"

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baskervville&family=Manrope:wght@500&family=Rowdies:wght@700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" type="text/css" href="/style.css" />
      </Head>
      <Grommet theme={theme}>
        <header>
          <Heading textAlign="center" fill="true">
            Alex Merced - <SubTitle>Software Developer</SubTitle>
          </Heading>
          <Nav
            direction="row"
            background="brand"
            pad="small"
            background="#CE4257"
            justify="center"
            wrap="true"
            responsive="true"
          >
            <Anchor
              icon={<FaHome />}
              href="/"
              hoverIndicator
              size="xxlarge"
              weight="bold"
              margin="medium"
            />
                        <Anchor
              icon={<GrDocumentUser/>}
              href="https://dev.alexmercedcoder.work/"
              hoverIndicator
              size="xxlarge"
              weight="bold"
              margin="medium"
            />
            <Anchor
              icon={<VscEmptyWindow />}
              href="/apps"
              hoverIndicator
              size="xxlarge"
              weight="bold"
              margin="medium"
            />

            <Anchor
              icon={<VscFileZip />}
              href="/libraries"
              hoverIndicator
              size="xxlarge"
              weight="bold"
              margin="medium"
            />

            <Anchor
              icon={<SiJavascript />}
              href="https://main.devnursery.com/"
              hoverIndicator
              size="xxlarge"
              weight="bold"
              margin="medium"
            />

            <Anchor
              icon={<VscTwitter />}
              href="https://twitter.com/alexmercedcoder"
              hoverIndicator
              size="xxlarge"
              weight="bold"
              margin="medium"
            />

            <Anchor
              icon={<SiLinkedin />}
              href="http://www.linkedin.com/in/alexmerced"
              hoverIndicator
              size="xxlarge"
              weight="bold"
              margin="medium"
            />

            <Anchor
              icon={<VscGithubAlt />}
              href="https://github.com/alexmercedcoder"
              hoverIndicator
              size="xxlarge"
              weight="bold"
              margin="medium"
            />

            <Anchor
              icon={<SiApplepodcasts />}
              href="https://open.spotify.com/show/1kMcquypdIElTu4Nu98XPM"
              hoverIndicator
              size="xxlarge"
              weight="bold"
              margin="medium"
            />
          </Nav>
        </header>
        <main>{props.children}</main>
        <footer>
          <Nav
            direction="row"
            background="brand"
            pad="small"
            background="#CE4257"
            justify="center"
            wrap="true"
            responsive="true"
          >
            <Anchor
              icon={<SiPatreon />}
              href="https://www.patreon.com/alexmercedcoder"
              hoverIndicator
              size="xxlarge"
              weight="bold"
              margin="medium"
            />

            <Anchor
              icon={<FaTshirt />}
              href="https://teechip.com/devNursery1"
              hoverIndicator
              size="xxlarge"
              weight="bold"
              margin="medium"
            />

            <Anchor
              label="Alex@AlexMerced.dev"
              hoverIndicator
              size="large"
              weight="bold"
              margin="medium"
            />
          </Nav>
        </footer>
      </Grommet>
    </>
  );
};

export default Layout;
