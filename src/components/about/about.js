import styled from "styled-components";
import ScrollToTop from "./../scrollToTop/scrollToTop";

const StyledAbout = styled.div`
  position: relative;
  padding-bottom: 60px;

  .content-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    border-top: 1px solid #fff2;
    margin: 30px;
  }

  h1 {
    margin-bottom: 30px;
  }

  p {
    width: 100%;
    max-width: 500px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export default function About() {
  return (
    <StyledAbout name="about">
      <div className="content-wrap">
        <h1>About me</h1>
        <p>
          Hey there! My name is Nick. Thanks for spending the time checking out
          my work!
        </p>
        <p>
          Building websites and applications is something that I've come to find
          incredibly fulfilling. The process of watching something be built
          piece by piece, component by component, right up until that final part
          is attached, is such a rewarding experience. It's no wonder so many
          software engineers take to carpentry and mechanics! I feel very
          fortunate to be able to do work that I find so enjoyable.
        </p>
        <p>
          When I'm not coding away at my computer I can be found
          hiking/backpacking in the mountains, or wrenching-on and riding my
          motorcycle.
        </p>
        <p>
          I'd love to hear from you! My contact info is below, so don't be a
          stranger!
        </p>
      </div>
      <ScrollToTop />
    </StyledAbout>
  );
}
