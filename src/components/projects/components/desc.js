import styled from "styled-components";

const StyledDescription = styled.p`
  max-width: 500px;
`;

export default function Description({ text }) {
  return <StyledDescription>{text}</StyledDescription>;
}
