import { useEffect } from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  display: ${({ vis }) => (vis ? "grid" : "none")};
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: #000a;
  z-index: 2;

  img {
    max-height: 80%;
    max-width: 80%;
    object-fit: cover;
  }

  .toggle {
    position: fixed;
    top: 15px;
    right: 15px;
    height: 50px;
    width: 50px;
    background: #aaa1;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    span {
      display: block;
      width: 27px;
      height: 2px;
      background: #fff3;
      position: absolute;
    }

    span:first-child {
      transform: rotate(45deg);
    }

    span:last-child {
      transform: rotate(-45deg);
    }

    &:hover {
      background: #aaa5;

      span {
        background: #000a;
      }
    }

    &:hover,
    span {
      transition: background 50ms ease;
    }
  }
`;

export default function ImageModal({ vis, setVis, img }) {
  const toggleVis = (e) => {
    if (e.target.nodeName === "IMG") return;
    else setVis(false);
  };

  useEffect(() => {
    window.addEventListener("click", toggleVis);

    return () => window.removeEventListener("click", toggleVis);
  });

  return (
    <StyledModal vis={vis}>
      <div className="toggle" onClick={toggleVis}>
        <span />
        <span />
      </div>
      <img src={img?.src} alt={img?.alt || "Description"} />
    </StyledModal>
  );
}
