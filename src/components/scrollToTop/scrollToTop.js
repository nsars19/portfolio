import styled from "styled-components";
import colors from "./../../colors";
import { FiChevronUp } from "react-icons/fi";
import { scroller } from "react-scroll";

const StyledScroll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  right: 20px;
  font-size: 2rem;
  cursor: pointer;

  p {
    color: transparent;
    text-align: center;
    font-size: 12px;
  }

  &:hover p {
    color: ${colors.text};
    transition: color 200ms ease;
  }
`;

export default function ScrollToTop() {
  const backToTop = () => scroller.scrollTo("intro");

  return (
    <StyledScroll onClick={backToTop}>
      <FiChevronUp />
      <p>Back to top</p>
    </StyledScroll>
  );
}
