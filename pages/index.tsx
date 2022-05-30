import Head from "next/head";
import styled from "styled-components";

import GlobalStyle from "../styles/global";
import Header from "../components/Header";
import WorkHistory from "../components/WorkHistory";
import Contact from "../components/Contact";
import { BoldStrongRegTitle } from "../styles/TextStyles";

import workExperiencesData from "../public/assets/work_experiences.json";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ExperiencesContainer = styled.div`
  position: relative;
  margin: 0 5vw;
  padding: 3vw 0 3vw 0;
  display: flex;
  flex-flow: column;
`;

function Home({ workExperiences }: { workExperiences: Array<object> }) {
  return (
    <Container>
      <Head>
        <title>Todd Stonefield-Oh</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <GlobalStyle />
      <Header miniHeader={false} />
      <Contact />

      <ExperiencesContainer>
        <BoldStrongRegTitle style={{ marginBottom: "15px" }}>
          Experiences
        </BoldStrongRegTitle>

        {workExperiences.map(
          (place: {
            id: string;
            name: string;
            url: string;
            title: string;
            period: string;
            location: string;
            items: Array<string>;
          }) => (
            <WorkHistory key={place.id} workplace={place} />
          )
        )}
      </ExperiencesContainer>
    </Container>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      workExperiences: workExperiencesData.experiences,
    },
  };
};

export default Home;
