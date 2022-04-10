import styled from "styled-components";

export const MainStyles = styled.main`
  display: flex;
  max-width: 1860px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;

  .info {
    margin-bottom: 10rem;
    padding-left: 10rem;
    max-width: 800px;
    text-align: center;

    h1 {
      font-size: 4.5rem;
      line-height: 5rem;
      font-family: Roboto;
      margin-bottom: 1rem;
      text-align: left;

      span {
        color: #47CBDF;
      }
    }

    p {
      font-size: 1.125rem;
      color: #A09A9A;
      font-family: Roboto;
      line-height: 1.5rem;
      margin-bottom: 3rem;
      text-align: left;
    }
    a {
      display: inline-block;
      color: #fff;
      background: #000;
      padding: 20px 80px 20px 80px;
      border-radius: 5px;
      transition: 0.2s;
      &:hover {
        background: #5C5959;
      }
    }
  }

  figure {
    div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      img {
        max-width: 100%;
      }
    }
  }

`