import Head from "next/head";
import styled from "styled-components";

import GlobalStyle from "../styles/global";
import Header from "../components/Header";
import WorkHistory from "../components/WorkHistory";
import Contact from "../components/Contact";

const Container = styled.div`
  position: relative;

  color: #00192f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  const workplaces = [
    {
      id: "aetna-cvs-2020",
      name: "Aetna, a CVS Health company",
      title: "Senior Web Engineer",
      period: "Jul 2020 — Present",
      location: "New York, NY",
      items: [
        "Leading web engineering team in charge of self-servicing API backend services and web front-end application.",
        "Led the major front-end development of migrating the legacy web front-end into a redesigned modern React front-end architecture, rolling out enterprise wide in less than 1 year to replace the existing data scientist workflow. (Led engineering initiative/architecture and developed 95% of the new code)",
        "Leading self-servicing API service (Node.js) architecture redesign onto microservices and cloud-native design.",
        "Leading web engineering initiatives for building design system components that are framework-agnostic.",
        "Leading web engineering patterns and practices on a high-level for the team.",
        "Worked with a product manager for conducting customer UX research for building user personas, UX initiatives/workflow.",
        "Identified feature/experience gaps and led front-end UI/UX development for features.",
        "Custom-developed Journey flow builder with freeform canvas drag-and-draw experience and automatic multi-flow routing synced with complex behavior model of journey data processor",
        "Custom-developed JSON data processing engine in browser with dynamic schema templating, template object generation, data object abstraction, dynamic configuration review/evaluation logic with 500% faster speed than the legacy web front-end.",
        "Custom-developed dynamic tabular renderer.",
        "Custom-developed UI components on top of design system and shared multi-depth layer rendering controllers that consists of context menu, popover, modal, and window with dynamic depth and layout positioning.",
      ],
    },
    {
      id: "rally-2019",
      name: "Rally Rd. (RSE Markets)",
      title: "Software Engineer (Front-end/Full-stack)",
      period: "Oct 2019 — Jul 2020",
      location: "New York, NY",
      items: [
        "Primary engineer and maintainer of the main React web front-end and Android PWA application codebase for its alternative asset investing web application.",
        "Maintained/updated git repository strategy along with CI pipeline configuration to have succinct commit history, better branch merge/conflict management, and CI test hook integration (CircleCI).",
        "Introduced a new network connection error handler for a better detection/user-bound error messaging",
        "Developed a custom gesture-based carousel component for Web and Android for asset browsing experience",
        "Developed a custom modal view controller optimized for Web/Android",
      ],
    },
    {
      id: "toastlabs-2015",
      name: "Toast Labs",
      title: "Full-stack Lead/Founder",
      period: "Apr 2015 — Jul 2017",
      location: "Palo Alto, CA",
      items: [
        "Led a technology startup company that developed and launched mobile applications, including “#Newsrooms”, which provided a solution for journalistic bias through an automatically generated news briefing.",
        "Custom-designed hybrid UI framework for the products in JavaScript.",
        "Developed a Node.js/MongoDB backend running a number of RESTful API endpoints and a custom natural language processing pipeline for “#Newsrooms”.",
        "Designed the user experience of the products.",
        "Custom-designed geofence engine for low-power location tracking in Objective-C: geofence target prediction/calculation based on real-time movement data",
      ],
    },
  ];

  return (
    <Container>
      <Head>
        <title>Todd Oh</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <GlobalStyle />
      <Header />
      <Contact />

      {workplaces.map((place) => (
        <WorkHistory key={place.id} workplace={place} />
      ))}
    </Container>
  );
}
