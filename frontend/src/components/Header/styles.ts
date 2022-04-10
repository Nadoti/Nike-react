import styled from "styled-components";


export const HeaderStyles = styled.header`
  background: var(--black-1000);
  margin-bottom: 2rem;

`

export const ContentStyles = styled.div`
  .btn_mobile {
    display: none;
  } 

  max-width: 1860px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 6rem;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
  
  nav {
    ul {
      display: flex;
      align-items: center;

      li {
        a {
          display: grid;
          padding: 2.2rem 1rem 1rem 5rem;
          height: 6rem;
          width: 250px;
          border-left: 2px solid #fff;
          font-family: Roboto;
          text-transform: uppercase;
          font-size: 1.125rem;
          font-weight: bold;
          color: #fff;
          

          &:hover {
            background: #fff;
            color: #000;
          }
        }
        &:nth-child(3) {
          a {
            border-right: 2px solid #fff;
          }
        }
      }
      div {
        a {
          margin-left: 60px;
        }
      }
    }
  }


  @media (max-width: 1080px) {
    max-width: 1080px;

    nav {
      ul {
        li {
          a {
            width: 150px;
            font-size: 1rem;
            padding: 2.5rem 1rem 1rem 2.5rem;
          }
        }
      }
    }
  }

  @media (max-width: 812px) {
    .btn_mobile {
      display: block;
    }

    nav {
      ul {
        display: none;
      }

      & {
        ul.active {
          display: block;
          position: absolute;
          width: 100%;
          background: #000;
          top: 6rem;
          left: 0;
          height: calc(100vh - 6rem);
          text-align: left;
          li {
            margin: 3rem 1rem 0 1.5rem;
            border-bottom: 2px solid #393737;
            a {
              display: inline-block;
              width: 0;
              border: none;
              height: 0;
              padding: 0;
              padding-bottom: 2rem;
            }
          }
          div {
            position: absolute;
            a {
              display: block;
              margin: 3rem 0 0 1rem;
              padding: 0;
            }
          }
        }
      }
    }
  }





  @media (max-width: 600px) {
    max-width: 600px;
    img {
      margin-left: 10px;
    }

    .btn_mobile {
      display: block;
    }

    nav {
      ul {
        display: none;
      }

      & {
        ul.active {
          display: block;
          position: absolute;
          width: 100%;
          background: #000;
          top: 6rem;
          left: 0;
          height: calc(100vh - 6rem);
          text-align: left;
          li {
            margin: 3rem 1rem 0 1.5rem;
            border-bottom: 2px solid #393737;
            a {
              display: inline-block;
              width: 0;
              border: none;
              height: 0;
              padding: 0;
              padding-bottom: 2rem;
            }
          }
          div {
            position: absolute;
            a {
              display: block;
              margin: 3rem 0 0 1rem;
              padding: 0;
            }
          }
        }
      }
    }
  }
`
