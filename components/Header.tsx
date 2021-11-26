import styled from "styled-components";
import { useRouter } from "next/router";

import { Heading3, Heading2, Subheading } from "../styles/HeadingStyles";

const HeaderContent = styled.div`
  position: relative;
  margin: 0 5vw;
  padding: 5vw 0 0 0;
  display: flex;
  flex-flow: column;
`;

export const Header = ({ miniHeader }: { miniHeader: boolean }) => {
  const router = useRouter();

  return (
    <HeaderContent>
      {miniHeader ? (
        <>
          <Subheading
            style={{ marginBottom: "5px" }}
            onClick={() => router.back()}
          >
            ← Todd Stonefield-Oh
          </Subheading>
        </>
      ) : (
        <>
          <Heading3 style={{ marginBottom: "5px" }}>
            Todd Stonefield-Oh
          </Heading3>
          <Heading2>
            Formerly a tech startup founder, a senior software engineer with
            experiences in leading engineering initiatives for web engineering
            with an understanding of design and product.
          </Heading2>
        </>
      )}
    </HeaderContent>
  );
};

export default Header;
