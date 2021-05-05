import styled from "styled-components";
import ScrollToTop from "./../scrollToTop/scrollToTop";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import colors from "./../../colors";

const StyledContact = styled.div`
  position: relative;
  padding: 0 30px;
  padding-bottom: 100px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .border {
    width: 100%;
    border-top: 1px solid #fff2;
    margin-bottom: 60px;
  }

  .border.top {
    margin-bottom: 60px;
  }

  h1 {
    text-align: center;
  }

  .contact-wrap {
    margin-top: 30px;
  }

  .item-content {
    border: 2px solid ${colors.accent};
    border-radius: 8px;

    &:not(&:first-child) {
      margin-top: 5px;
    }
  }

  .contact-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    border-radius: 4px;
    border: 2px solid transparent;
    margin: 2px;
    cursor: pointer;
    color: ${colors.text};
    text-decoration: none;

    &:hover,
    &:active {
      background: ${colors.accent};
    }
  }

  .icon {
    font-size: 30px;
    color: ${colors.text};
    margin-left: 15px;
  }
`;

export default function Contact() {
  return (
    <StyledContact name="contact">
      <div className="border" />
      <h1>Get in touch</h1>
      <div className="contact-wrap">
        <div className="item-content">
          <a href={"mailto:nick@sardo.dev"} className="contact-item">
            <h3>nick@sardo.dev</h3>
            <MdEmail className="icon" />
          </a>
        </div>
        <div className="item-content">
          <a
            href="https://www.linkedin.com/in/nick-sardonini/"
            className="contact-item"
          >
            <h3>LinkedIn</h3>
            <AiFillLinkedin className="icon" />
          </a>
        </div>
        <div className="item-content">
          <a href="https://github.com/nsars19" className="contact-item">
            <h3>Github</h3>
            <AiFillGithub className="icon" />
          </a>
        </div>
      </div>
      <ScrollToTop />
    </StyledContact>
  );
}
