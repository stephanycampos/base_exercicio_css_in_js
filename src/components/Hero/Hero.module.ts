import styled from 'styled-components'

export const Form = styled.form`
   {
    height: 362px;
    width: 100%;
    background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--cor-principal);
      content: '';
      opacity: 0.7;
    }
  }

  & div {
    position: relative;
    color: #eee;
  }
`

export const HeroTitle = styled.h2`
  .heroTitle {
    font-family: Gloock, serif;
    font-size: 49px;
  }

  @media (max-width: 768px) {
    .form {
      height: auto;
      padding: 25px 0;
    }

    & {
      font-size: 32px;
    }
  }
`
