import styled from "styled-components";

export const MainStyles = styled.main`
  display: flex;
  max-width: 1860px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20rem;

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
    .img_product_principal {
      width: 100%;
      margin-left: 1rem;
    }
    div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      img {
        max-width: 100%;
        cursor: pointer;
      }
    }
  }


  @media (max-width: 1640px) {
    .info {
      max-width: 600px;
      h1 {
        font-size: 3rem;
        line-height: 3rem;
      }
      p {
        font-size: 0.875rem;
      }
      a {
        padding: 15px 50px;
      }
    }

  }

  @media (max-width: 810px) {
    display: flex;
    flex-direction: column;
    
    .info {
      display: inline-block;
      text-align: center;
    }

    figure {
      .img_product_principal {
        display: block;
        width: 500px;
        margin: 0;
        padding: 0;
        margin: 0 auto;
      }

      div {
        img {
          margin: 20px;
        }
      }
    }
  }

`