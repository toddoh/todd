import Link from "next/link";
import styled from "styled-components";
import { FileArrowDown, PaperPlaneTilt, LinkedinLogo } from "phosphor-react";

const Content = styled.div`
  position: relative;
  margin: 0 0 0 5vw;
  padding: 30px 0;
  width: fill-available;
  align-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  grid-column-gap: 20px;
  font-family: "Outfit";

  a {
    color: var(--text-color-light);
  }
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
        href="https://www.dropbox.com/s/37y5geycl9u6ob1/2022_SeungyunToddOh.pdf?dl=0"
        passHref={true}
      >
        <a>
          <ContactType>
            <FileArrowDown size={24} />
            <span>Resume</span>
          </ContactType>
        </a>
      </Link>
      <Link href="mailto:toddstonefieldoh@gmail.com" passHref={true}>
        <a>
          <ContactType>
            <PaperPlaneTilt size={24} />
            <span>Email</span>
          </ContactType>
        </a>
      </Link>
      <Link href="https://linkedin.com/in/toddstonefieldoh" passHref={true}>
        <a>
          <ContactType>
            <LinkedinLogo size={24} />
            <span>LinkedIn</span>
          </ContactType>
        </a>
      </Link>
    </Content>
  );
};

export default Contact;
