import styled from "styled-components";


export const ContainerStyles = styled.section`
  max-width: 1860px;
  margin: 0 auto;
  margin-bottom: 10rem;

  h2 {
    font-size: 3rem;
    font-family: Roboto;
    color: #777373;
    margin-bottom: 3rem;
  }
`

export const ContentStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;

  div {
    cursor: pointer;
    img {
      width: 100%;
      background: #F4F2F2;
      padding: 12rem 1rem 5rem 1rem;
      border-radius: 10px;
      margin-bottom: 20px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h3 {
        font-size: 1.125rem;
        font-family: Roboto;
      }
    }
  }
`