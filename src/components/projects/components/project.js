import styled from "styled-components";
import Description from "./desc";
import Tag from "./tag";
import Image from "./image";
import Link from "./link";
import uniqid from "uniqid";

const StyledProject = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  height: 100%;
  padding-bottom: 60px;
  border-bottom: 1px solid #fff2;
  margin: 30px;

  .content-top {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h2 {
      width: max-content;
    }
  }

  .links {
    margin-top: 10px;
    height: max-content;
    display: flex;
    justify-content: flex-start;

    & > *:first-child {
      margin-right: 6px;
    }
  }

  .content-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-right: 25px;

    & > *:not(ul:last-child) {
      margin-bottom: 20px;
    }
  }

  .img-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tag-wrap {
    text-align: center;
  }

  .tag-wrap li {
    display: inline-block;
    list-style: none;
    margin: 8px 8px 8px 0;

    &:not(&:first-child) {
      margin-left: 8px;
    }
  }

  @media (max-width: 1024px) {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    row-gap: 30px;

    .content-right {
      align-items: center;
      margin-right: 0;
    }

    .content-top {
      justify-content: center;

      h2 {
        align-self: center;
      }
    }
    .links {
      justify-content: center;
    }
  }
`;

export default function Project({ project, setImg, setVis }) {
  const { title, src, desc, tags, code, live } = project;

  return (
    <StyledProject className="proj-item">
      <div className="img-wrap">
        <Image src={src} alt={"Facespace"} setImg={setImg} setVis={setVis} />
      </div>
      <div className="content-right">
        <div className="content-top">
          <h2>{title}</h2>
          <div className="links">
            <Link href={code} text="Code" />
            {live ? <Link href={live} text="See it live" /> : <div />}
          </div>
        </div>
        <Description text={desc} />
        <ul className="tag-wrap">
          {tags.map((tag) => (
            <li key={uniqid()}>
              <Tag text={tag} />
            </li>
          ))}
        </ul>
      </div>
    </StyledProject>
  );
}
