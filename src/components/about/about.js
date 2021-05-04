import styled from "styled-components";
import ScrollToTop from "./../scrollToTop/scrollToTop";

const StyledAbout = styled.div`
  height: 100vh;
  background: #ff8844;
  position: relative;
`;

export default function About() {
  return (
    <StyledAbout name="about">
      About
      <ScrollToTop />
    </StyledAbout>
  );
}
