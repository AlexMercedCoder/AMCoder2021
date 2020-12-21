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
import { FaTshirt, FaHome, FaUserGraduate, FaYoutubeSquare } from "react-icons/fa";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Kumbh+Sans&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" type="text/css" href="/style.css" />

        <meta name='application-name' content='Alex Merced - Developer Portfolio' />
<meta name='apple-mobile-web-app-capable' content='yes' />
<meta name='apple-mobile-web-app-status-bar-style' content='default' />
<meta name='apple-mobile-web-app-title' content='AM Coder' />
<meta name='description' content='Alex Merced - Developer Portfolio' />
<meta name='format-detection' content='telephone=no' />
<meta name='mobile-web-app-capable' content='yes' />
<meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
<meta name='msapplication-TileColor' content='#2B5797' />
<meta name='msapplication-tap-highlight' content='no' />
<meta name='theme-color' content='#000000' />
          
<link rel='apple-touch-icon' sizes='180x180' href='/static/icons/apple-touch-icon.png' />
<link rel='icon' type='image/png' sizes='32x32' href='/static/icons/favicon-32x32.png' />
<link rel='icon' type='image/png' sizes='16x16' href='/static/icons/favicon-16x16.png' />
<link rel='manifest' href='/static/manifest.json' />
<link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#5bbad5' />
<link rel='shortcut icon' href='/static/icons/favicon.ico' />
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
     
<meta name='twitter:card' content='summary' />
<meta name='twitter:url' content='https://yourdomain.com' />
<meta name='twitter:title' content='PWA App' />
<meta name='twitter:description' content='Best PWA App in the world' />
<meta name='twitter:image' content='https://yourdomain.com/static/icons/android-chrome-192x192.png' />
<meta name='twitter:creator' content='@DavidWShadow' />
<meta property='og:type' content='website' />
<meta property='og:title' content='PWA App' />
<meta property='og:description' content='Best PWA App in the world' />
<meta property='og:site_name' content='PWA App' />
<meta property='og:url' content='https://yourdomain.com' />
<meta property='og:image' content='https://yourdomain.com/static/icons/apple-touch-icon.png' />


      </Head>
      <Grommet theme={theme}>
        <header>
          <Heading textAlign="center" fill="true">
            <span class="orange">Alex Merced - </span><span class="red">Software Developer</span>
          </Heading>
          <Nav
            direction="row"
            background="brand"
            pad="small"
            background="#CE4257"
            justify="center"
            wrap="true"
            responsive="true"
            className="headernav"
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
              icon={<FaUserGraduate />}
              href="/resume"
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
              className="gonesmall"
            />

          <Anchor
              icon={<FaYoutubeSquare />}
              href="https://www.youtube.com/AlexMercedFullStackDeveloper"
              hoverIndicator
              size="xxlarge"
              weight="bold"
              margin="medium"
              className="gonesmall"
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
