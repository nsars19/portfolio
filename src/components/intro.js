import styled from "styled-components";
import hs1 from "./../assets/headshot1.jpeg";
import colors from "./../colors";
const StyledIntro = styled.section`
  height: 100vh;

  .frame {
    width: 200px;
    border-radius: 50px;
    border: 6px solid ${colors.main};
    overflow: hidden;

    img {
      max-width: 100%;
    }
`;

function Intro() {
  return (
    <StyledIntro>
      <div className="frame">
        <img src={hs1} alt="headshot" />
      </div>
    </StyledIntro>
  );
}

export default Intro;
