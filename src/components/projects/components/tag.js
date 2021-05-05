import styled from "styled-components";
import colors from "./../../../colors";

const StyledTag = styled.div`
  width: max-content;
  padding: 6px;
  border-radius: 8px;
  background: ${colors.accent};
`;

export default function Tag({ text }) {
  return <StyledTag>{text}</StyledTag>;
}
