import styled from "styled-components";
import ScrollToTop from "./../scrollToTop/scrollToTop";
import { detail } from "./projDetail";
import Project from "./components/project";
import uniqid from "uniqid";

const StyledProjects = styled.div`
  position: relative;

  li.proj:last-child .proj-item {
    padding-bottom: 0;
    border-bottom: none;
  }

  .proj-wrap .proj:last-child {
    padding-bottom: 50px;
  }
`;

export default function Projects() {
  return (
    <StyledProjects name="projects">
      <ul className="proj-wrap">
        {detail.map((project) => (
          <li key={uniqid()} className="proj">
            <Project project={project} />
          </li>
        ))}
      </ul>
      <ScrollToTop />
    </StyledProjects>
  );
}
