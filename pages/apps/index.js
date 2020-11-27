import Head from "next/head";
import { Component } from "react";
import Layout from "../../components/Layout";
import { attributes, react as HomeContent } from "../../content/apps.md";
import { Box, Card, Heading, Button } from "grommet";

export default class Home extends Component {
  render() {
    let { title, apps } = attributes;
    return (
      <Layout title="main page">
        <Heading level="2" alignSelf="center" className="head" full="true">
          {title}
        </Heading>
        <Box wrap="true" direction="row" pad="medium" justify="between">
          {apps.map((app, index) => (
            <Card key={index} pad="medium" width="medium" alignContent="center">
              <h3 className="head">{app.name}</h3>
              <img src={app.img} alt={app.name} className="thumb"></img>
              <Box pad="small" justify="between" direction="row">
              <button className="button"><a href={app.live}>App</a></button>
              <button className="button"><a href={app.git}>Git</a></button>
              
              </Box>
              <p>{app.description}</p>
            </Card>
          ))}
        </Box>
      </Layout>
    );
  }
}
