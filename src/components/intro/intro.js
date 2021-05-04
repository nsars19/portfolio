import styled from "styled-components";
import colors from "../../colors";
import { useInView } from "react-intersection-observer";
import { scroller } from "react-scroll";

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

      .dot {
        display: inline;
        color: ${colors.accent};
      }
    }

    h2 {
      font-size: 1.2rem;
      padding-left: 5px;
      margin-top: 20px;
      max-width: 360px;
      opacity: ${({ inViewH2 }) => (inViewH2 ? 100 : 0)};
      margin-top: ${({ inViewH2 }) => (inViewH2 ? 20 : 40)}px;
    }

    h1,
    h2 {
      transition: opacity 400ms ease, margin-top 400ms ease;
    }
  }

  ul {
    height: 100%;
    padding-top: 20px;
    padding-left: 75px;
    opacity: ${({ ulInView }) => (ulInView ? 100 : 0)};
    transition: opacity 1000ms ease 400ms;

    li {
      font-size: 2.2rem;
      list-style: none;
      border: 2px solid transparent;
      border-radius: 8px;
      margin-top: 30px;
      cursor: pointer;
      width: max-content;
      transition: margin-left 400ms ease, opacity 400ms ease;

      button {
        background: transparent;
        padding: 3px;
        border-style: none;
        border: 2px solid transparent;
        border-radius: 4px;
        margin: 2px;
        font-size: inherit;
        color: inherit;
        cursor: pointer;
      }

      &:hover,
      &:active {
        color: ${colors.background};
        border: 2px solid ${colors.accent};
        button {
          background: ${colors.accent};
        }
      }
    }

    li:first-child {
      margin-left: ${({ l1 }) => (l1 ? 0 : -100)}px;
      opacity: ${({ l1 }) => (l1 ? 100 : 0)};
      transition-delay: 300ms;
    }
    li:nth-child(2) {
      margin-left: ${({ l2 }) => (l2 ? 0 : -100)}px;
      opacity: ${({ l2 }) => (l2 ? 100 : 0)};
      transition-delay: 400ms;
    }
    li:last-child {
      margin-left: ${({ l3 }) => (l3 ? 0 : -100)}px;
      opacity: ${({ l3 }) => (l3 ? 100 : 0)};
      transition-delay: 500ms;
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
        font-size: 1.1rem;
        padding-right: 60px;
      }
    }

    ul {
      padding-left: 35px;

      li {
        font-size: 2rem;
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
  });

  const [ulRef, ulInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 500,
  });

  const liOpts = { triggerOnce: true };
  const [li1Ref, l1View] = useInView(liOpts);
  const [li2Ref, l2View] = useInView(liOpts);
  const [li3Ref, l3View] = useInView(liOpts);

  const scrollOptions = { smooth: "easeOutCubic" };
  const scrollToProjects = () => scroller.scrollTo("projects", scrollOptions);
  const scrollToContact = () => scroller.scrollTo("contact", scrollOptions);
  const scrollToAbout = () => scroller.scrollTo("about", scrollOptions);

  return (
    <StyledIntro
      name="intro"
      inViewH1={inViewH1}
      inViewH2={inViewH2}
      ulInView={ulInView}
      l1={l1View}
      l2={l2View}
      l3={l3View}
    >
      <div className="intro-txt">
        <h1 ref={refH1}>
          Hello
          <div className="dot">.</div>
        </h1>
        <h2 ref={refH2}>
          My name is Nick. I am a self-taught full-stack web developer.
        </h2>
      </div>
      <ul ref={ulRef}>
        <li ref={li1Ref}>
          <button onClick={scrollToProjects}>Projects</button>
        </li>
        <li ref={li2Ref}>
          <button onClick={scrollToContact}>Contact</button>
        </li>
        <li ref={li3Ref}>
          <button onClick={scrollToAbout}>About</button>
        </li>
      </ul>
    </StyledIntro>
  );
}

export default Intro;
