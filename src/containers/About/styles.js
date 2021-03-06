import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);

  strong {
    color: var(--primary);
  }

  @media (min-width: 765px) {
    margin-left: 8vw;
  }
`
export const Description = styled.div`
  padding: 10vh 4vw 8vh;
  background-image: radial-gradient(
    circle,
    #d7d7d7,
    #d7d7d7 1px,
    var(--white) 0,
    var(--white)
  );
  background-size: 28px 28px;

  @media (min-width: 765px) {
    padding: 10vh 18vw 8vh;
  }
  h4 {
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 2vh;
    letter-spacing: 0;
    align-self: flex-start;
  }
  h3 {
    position: relative;
    font-size: 2.5rem;
    font-weight: 900;
    margin-bottom: 6;
    letter-spacing: 0;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      width: 90px;
      height: 4px;
      bottom: -20px;
      margin: auto;
      background: var(--primary);
    }
  }
`
export const Itens = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2vh 2vw 2vh;
  @media (min-width: 765px) {
    padding: 2vh 8vw 4vh;
  }
`
export const Item = styled.div`
  padding: 2vh 4vw 2vh;
  display: flex;
  align-self: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  @media (min-width: 765px) {
    padding: 2vh 4vw 6vh;
  }
  svg {
    align-self: center;
    max-width: 100px;
    max-height: 100px;
    margin-bottom: 2vh;
  }

  h4 {
    text-align: center;
    margin-bottom: 3vh;
    text-transform: uppercase;
    font-size: 2.2rem;
    font-weight: 900;
    letter-spacing: -1px;
  }
  p {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: -0.5px;
  }
`
