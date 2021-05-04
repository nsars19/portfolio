import styled from "styled-components";
import ScrollToTop from "./../scrollToTop/scrollToTop";

const StyledProjects = styled.div`
  height: 100vh;
  background: #4488ff;
  position: relative;
`;

export default function Projects() {
  return (
    <StyledProjects name="projects">
      Projects
      <ScrollToTop />
    </StyledProjects>
  );
}
