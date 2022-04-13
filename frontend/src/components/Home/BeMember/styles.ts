import styled from "styled-components";

function pixelToRem(...value: number[]) {
  return value.reduce((acc, current) => (acc =+ current/16 + `rem `), "").trim()
}

export const ContainerStyles = styled.section`
  margin-bottom: 10rem;
  h2 {
    font-size: 3rem;
    font-family: Roboto;
    color: #777373;
    margin: 0 auto;
    max-width: 1860px;
    margin-bottom: 3rem;
  }


`

export const ContentStyles = styled.div`
  background: #000;
  text-align: center;
  margin: 0 auto;
  
  img {
    margin-top: 1rem;
  }

  h3 {
    font-size: 4rem;
    font-family: Roboto;
    color: #fff;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.125rem;
    font-family: Roboto;
    color: #fff;
    margin-bottom: 5rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;

    a {
      display: inline-block;
      background: #fff;
      padding: 10px 20px;
      border-radius: 50px;
      font-size: 1.125rem;
      font-family: Roboto;
      font-weight: bold;
      color: #000;
      margin-bottom: 5rem;

      &:hover {
        background: #444141;
        color: #fff;
      }
    }
  }
`