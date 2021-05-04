import styled from "styled-components";
import colors from "./../colors";
import { useInView } from "react-intersection-observer";

const StyledIntro = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .intro-txt {
    padding-top: 80px;
    padding-left: 80px;

    h1 {
      font-size: 5rem;
      opacity: ${({ inViewH1 }) => (inViewH1 ? 100 : 0)};
      margin-top: ${({ inViewH1 }) => (inViewH1 ? 0 : 20)}px;
    }

    h2 {
      padding-left: 5px;
      margin-top: 20px;
      max-width: 360px;
      opacity: ${({ inViewH2 }) => (inViewH2 ? 100 : 0)};
      margin-top: ${({ inViewH2 }) => (inViewH2 ? 20 : 40)}px;
    }

    h1,
    h2 {
      transition: margin-top 400ms ease;
      transition: opacity 400ms ease, margin-top 400ms ease;
    }
  }

  ul {
    margin-top: 120px;
    margin-bottom: 20px;
    margin-left: 80px;
    padding-right: 45px;
    // max-width: 50%;
    display: flex;
    justify-content: flex-start;

    li {
      list-style: none;
      font-size: 1.3rem;
      padding: 6px;
      border: 2px solid transparent;
      margin-right: 30px;
      cursor: pointer;

      &:hover,
      &:active {
        background: ${colors.accentLight};
        color: ${colors.main};
      }
    }
  }

  @media (max-width: 768px) {
    .intro-txt {
      padding-top: 40px;
      padding-left: 40px;

      h1 {
        font-size: 4rem;
      }

      h2 {
        font-size: 1.2rem;
        padding-right: 60px;
      }
    }

    ul {
      display: flex;
      justify-content: space-around;
      margin: 0;
      margin-bottom: 10px;
      padding: 0;
      // max-width: 80%;

      li {
        margin: 0;
      }
    }
  }
`;

function Intro() {
  const [refH1, inViewH1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refH2, inViewH2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 1000,
  });

  return (
    <StyledIntro inViewH1={inViewH1} inViewH2={inViewH2}>
      <div className="intro-txt">
        <h1 ref={refH1}>Hello.</h1>
        <h2 ref={refH2}>
          My name is Nick. I am a full-stack, self-taught web developer.
        </h2>
      </div>
      <ul>
        <li>Projects</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </StyledIntro>
  );
}

export default Intro;
