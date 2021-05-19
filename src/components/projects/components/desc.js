import styled from "styled-components";

const StyledDescription = styled.p`
  max-width: 500px;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export default function Description({ text }) {
  return <StyledDescription>{text}</StyledDescription>;
}
