import styled from "styled-components";


export const SectionStyles = styled.section`
  max-width: 1860px;
  margin: 0 auto;
  margin-bottom: 10rem;

  h2 {
    font-size: 3rem;
    font-family: Roboto;
    color: #777373;
    margin-bottom: 3rem;
  }

  .featured_container {
    display: flex;
    gap: 40px;
    justify-content: space-between;

    .featured_1 {
      background: url(${props => props.color}) no-repeat center;
      width: 100%;
      position: relative;

      p {
        display: block;
        position: absolute;
        bottom: 0;
        font-size: 2.25rem;
        margin-bottom: 150px;
        margin-left: 100px;
      }

      a {
        display: inline-block;
        position: absolute;
        bottom: 0;
        margin-bottom: 80px;
        margin-left: 400px;
        background: #000;
        padding: 10px 20px;
        border-radius: 50px;
        color: #fff;
        font-weight: bold;

        &:hover {
          background: #615E5E;
          color: #000;
        }
      }
    }

    .featured_2 {
      background: url(${props => props.className}) no-repeat;
      width: 100%;
      min-height: 1000px;
      position: relative;

      p {
        display: block;
        position: absolute;
        bottom: 0;
        font-size: 2.25rem;
        margin-bottom: 150px;
        margin-left: 200px;
        color: #fff;
      }

      a {
        display: inline-block;
        position: absolute;
        bottom: 0;
        margin-bottom: 80px;
        margin-left: 400px;
        background: #fff;
        padding: 10px 20px;
        border-radius: 50px;
        color: #000;
        font-weight: bold;

        &:hover {
          background: #D8D8D8;
        }
      }
    }
  }

`