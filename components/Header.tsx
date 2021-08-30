import styled from "styled-components";

import { Heading1, Heading2, Heading3 } from "./HeadingStyles";

const HeaderContent = styled.div`
  position: relative;
  margin: 0 5vw;
  padding: 5vw 40vw 5vw 0;
  display: flex;
  flex-flow: column;
`;

export const Header = () => {
  return (
    <HeaderContent>
      <Heading1 style={{ marginBottom: "35px" }}>Hi, I'm Todd!</Heading1>
      <Heading2>
        A web engineer with multi-year experiences in leading engineering
        initiatives for web engineering and web product development. Always
        finding the right way and practices to lead design and engineering
        process for a user interface/web product that is user-centric and
        scalable.
      </Heading2>
    </HeaderContent>
  );
};

export default Header;
