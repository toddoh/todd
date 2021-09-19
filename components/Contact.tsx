import Link from "next/link";
import styled from "styled-components";
import { FileArrowDown, PaperPlaneTilt, LinkedinLogo } from "phosphor-react";

const Content = styled.div`
  position: relative;
  margin: 0 45vw 0 5vw;
  padding: 30px 0;
  width: fill-available;
  align-content: flex-start;
  display: flex;
  grid-column-gap: 20px;
`;

const ContactType = styled.div`
  display: flex;
  align-items: center;
  font-size: 1em;

  > span {
    margin-left: 5px;
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
          <FileArrowDown size={24} />
          <span>View Resume</span>
        </ContactType>
      </Link>
      <Link href="mailto:toddstonefieldoh@gmail.com" passHref={true}>
        <ContactType>
          <PaperPlaneTilt size={24} />
          <span>Email me</span>
        </ContactType>
      </Link>
      <Link href="https://linkedin.com/in/toddstonefieldoh" passHref={true}>
        <ContactType>
          <LinkedinLogo size={24} />
          <span>LinkedIn</span>
        </ContactType>
      </Link>
    </Content>
  );
};

export default Contact;
