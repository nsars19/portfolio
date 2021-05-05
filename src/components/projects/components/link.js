import styled from "styled-components";
import colors from "./../../../colors";

const StyledLink = styled.div`
  color: ${colors.text};
  font-size: 1.2rem;
  text-decoration: none;
  border: 2px solid ${colors.accent};
  border-radius: 8px;
  text-align: center;
  width: max-content;

  a {
    color: ${colors.text};
    text-decoration: none;
    padding: 6px;
    border: 2px solid transparent;
    margin: 2px;
    height: max-content;
    border-radius: 5px;
    display: inline-block;
  }

  &:hover,
  &:active {
    a {
      background: ${colors.accent};
    }
  }
`;

export default function Link({ href, text }) {
  return (
    <StyledLink>
      <a href={href}>{text}</a>
    </StyledLink>
  );
}
