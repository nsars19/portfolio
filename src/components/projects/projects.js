import styled from "styled-components";
import ScrollToTop from "./../scrollToTop/scrollToTop";
import { detail } from "./projDetail";
import Project from "./components/project";
import uniqid from "uniqid";
import { useState } from "react";
import ImageModal from "./components/imageModal";

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
  const [modalVis, setModalVis] = useState(false);
  const [img, setImg] = useState(null);

  return (
    <>
      <StyledProjects name="projects">
        <ul className="proj-wrap">
          {detail.map((project) => (
            <li key={uniqid()} className="proj">
              <Project project={project} setImg={setImg} setVis={setModalVis} />
            </li>
          ))}
        </ul>
        <ScrollToTop />
      </StyledProjects>
      <ImageModal img={img} vis={modalVis} setVis={setModalVis} />
    </>
  );
}
