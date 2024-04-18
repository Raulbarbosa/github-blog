import styled from "styled-components";
import BackgroundHeader from '../../assets/background_header.svg';


export const HeaderContainer = styled.header`
  max-width: 100vw;
  height: 29.6rem;

  background-color: white;
`

export const HeaderContent = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${BackgroundHeader});
  background-repeat: no-repeat;
  background-size: cover;
`