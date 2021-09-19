import Head from "next/head";
import styled from "styled-components";

import GlobalStyle from "../styles/global";
import Header from "../components/Header";
import BlogEntryPreview from "../components/article/BlogEntryPreview";
import WorkHistory from "../components/WorkHistory";
import Contact from "../components/Contact";
import { BoldStrongUpperTitle } from "../styles/TextStyles";

import workExperiencesData from "../public/assets/work_experiences.json";
import blogArticlesList from "../public/blog/articles.json";

const Container = styled.div`
  position: relative;
  color: #00192f;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const WorkExpContainer = styled.div`
  position: relative;
  margin: 0 5vw;
  padding: 5vw 40vw 5vw 0;
  display: flex;
  flex-flow: column;
`;

function Home({
  workExperiences,
  articleList,
}: {
  workExperiences: Array<object>;
  articleList: Array<object>;
}) {
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
      <Header miniHeader={false} />
      <Contact />
      <BlogEntryPreview articleList={articleList} />

      <WorkExpContainer>
        <BoldStrongUpperTitle style={{ marginBottom: "15px" }}>
          Work Experiences
        </BoldStrongUpperTitle>

        {workExperiences.map(
          (place: {
            id: string;
            name: string;
            title: string;
            period: string;
            location: string;
            items: Array<string>;
          }) => (
            <WorkHistory key={place.id} workplace={place} />
          )
        )}
      </WorkExpContainer>
    </Container>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      workExperiences: workExperiencesData.experiences,
      articleList: blogArticlesList.articles,
    },
  };
};

export default Home;
