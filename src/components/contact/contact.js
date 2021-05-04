import styled from "styled-components";
import ScrollToTop from "./../scrollToTop/scrollToTop";

const StyledContact = styled.div`
  height: 100vh;
  background: #44ff88;
  position: relative;
`;

export default function Contact() {
  return (
    <StyledContact name="contact">
      Contact
      <ScrollToTop />
    </StyledContact>
  );
}
