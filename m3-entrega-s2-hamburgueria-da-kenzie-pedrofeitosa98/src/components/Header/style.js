import styled from "styled-components";

const HeaderContainer = styled.header`
padding: 0.625rem 0;
width: 100%;
min-height: 5rem;
height: fit-content;
margin-bottom: 1rem;
background-color: var(--gray-0);
display: flex;
justify-content: center;
align-items: center;
`

const Navbar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
gap: 1rem;
height: 100%;
width: 90%;
max-width: 86rem;

@media (max-width: 600px) {
 justify-content: center;
}

.inputDiv {
  width: 100%;
  max-width: 23rem;
  justify-content: space-around;
}

input {max-width: 13rem;}
`

export { HeaderContainer }
export { Navbar }