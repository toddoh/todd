import Link from "next/link";
import styled from "styled-components";
import { FileArrowDown, PaperPlaneTilt, LinkedinLogo } from "phosphor-react";

const Content = styled.div`
  position: relative;
  margin: 0 45vw 0 5vw;
  padding: 3vw 0;
  width: fill-available;
  align-content: flex-start;
  display: flex;
  flex-flow: column;
  grid-row-gap: 10px;
`;

const ContactType = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2em;

  > span {
    margin-left: 7px;
    font-weight: 500;
  }
`;

export const Contact = () => {
  return (
    <Content>
      <Link
        href="https://www.dropbox.com/s/ciyhxa5a2o8hrsf/2021_SeungyunToddOh_Resume.pdf?dl=0"
        passHref={true}
      >
        <ContactType>
          <FileArrowDown size={28} />
          <span>View Resume</span>
        </ContactType>
      </Link>
      <Link href="mailto:toddstonefieldoh@gmail.com" passHref={true}>
        <ContactType>
          <PaperPlaneTilt size={28} />
          <span>Email me</span>
        </ContactType>
      </Link>
      <Link href="https://linkedin.com/in/toddstonefieldoh" passHref={true}>
        <ContactType>
          <LinkedinLogo size={28} />
          <span>LinkedIn</span>
        </ContactType>
      </Link>
    </Content>
  );
};

export default Contact;
