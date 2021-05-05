import styled from "styled-components";

const StyledImage = styled.div`
  img {
    max-width: 300px;
    max-height: fit-content;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 0 0.4px #0001, 0 0 0.8px #0001, 0 0 1.5px #0001,
      0 0 2.5px #0002, 0 0 3.4px #0002, 0 0 5.6px #0003;

    &:hover {
      cursor: pointer;
      transform: translateY(-1px);
      transition: transform 200ms ease, box-shadow 200ms ease;
      box-shadow: 0 0 0.4px #0001, 0 0 0.8px #0001, 0 0 1.5px #0001,
        0 2px 2.5px #0002, 0 4px 3.4px #0002, 0 4px 5.6px #0003,
        0 4px 8.7px #0004;
    }
  }

  @media (max-width: 540px) {
    img {
      max-width: 270px;
    }
  }
`;

export default function Image({ src, alt }) {
  return (
    <StyledImage>
      <img src={src} alt={alt || "Description"} />
    </StyledImage>
  );
}
