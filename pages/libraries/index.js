import Head from "next/head";
import { Component } from "react";
import Layout from "../../components/Layout";
import { attributes, react as HomeContent } from "../../content/libraries.md";
import { Box, Card, Heading, Button } from "grommet";

export default class Home extends Component {
  render() {
    let { title, libraries } = attributes;
    return (
      <Layout title="main page">
        <Heading level="2" alignSelf="center" className="head" full="true">
          {title}
        </Heading>
        <Box wrap="true" direction="row" pad="medium" justify="between">
          {libraries.map((lib, index) => (
            <Card key={index} pad="medium" width="medium" alignContent="center">
              <h3 className="head">{lib.name}</h3>
              <Box pad="small" justify="between" direction="row">
              <button className="button"><a href={lib.npm}>NPM</a></button>
              <button className="button"><a href={lib.git}>GIT</a></button>
              </Box>
              <Box pad="small" justify="between" direction="row">
              <button className="button"><a href={lib.blog}>Blog</a></button>
              <button className="button"><a href={lib.vid}>Video</a></button>
              </Box>
              <p>{lib.description}</p>
              <code>{lib.command}</code>
            </Card>
          ))}
        </Box>
      </Layout>
    );
  }
}
