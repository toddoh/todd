import { useRouter } from "next/router";
import Head from "next/head";
import styled from "styled-components";
import fs from "fs";
import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXProvider } from "@mdx-js/react";
import MDX from "@mdx-js/runtime";

import Header from "../../components/Header";
import GlobalStyle from "../../styles/global";

const Container = styled.div`
  position: relative;
  color: #00192f;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ArticleContainer = styled.div`
  position: relative;
  margin: 0 5vw;
  padding: 20px 40vw 5vw 0;
  display: flex;
  flex-flow: column;
`;

const Article = ({ mdx }: { mdx: string }) => {
  return (
    <Container>
      <Head>
        <title>Todd Oh</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;560;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <GlobalStyle />
      <Header miniHeader={true} />

      <ArticleContainer>
        <MDXProvider>
          <MDX>{mdx}</MDX>
        </MDXProvider>
      </ArticleContainer>
    </Container>
  );
};

export const getStaticProps = async (props) => {
  const folderPath = path.join(process.cwd(), "content");
  const filePath = path.join(folderPath, `${props.params.articleSlug}.mdx`);
  const source = fs.readFileSync(filePath);
  return {
    props: {
      mdx: source.toString(),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { articleSlug: "404" } }],
    fallback: true,
  };
};

export default Article;
