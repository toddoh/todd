import styled from "styled-components";
import { useRouter } from "next/router";

import { Heading2, Heading3, Subheading } from "../styles/HeadingStyles";
import { RegularTextBaseLine } from "../styles/TextStyles";

const HeaderContent = styled.div`
  position: relative;
  margin: 0 5vw;
  padding: 5vw 40vw 0 0;
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
            ← Todd Oh
          </Subheading>
        </>
      ) : (
        <>
          <Heading2 style={{ marginBottom: "15px" }}>Todd Oh</Heading2>
          <Heading3>
            A web engineer/tech lead with multi-year experiences in leading
            engineering initiatives for web engineering and web product
            development.
          </Heading3>
        </>
      )}
    </HeaderContent>
  );
};

export default Header;
