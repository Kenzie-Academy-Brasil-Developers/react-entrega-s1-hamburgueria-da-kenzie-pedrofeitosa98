import logo from "./logo.svg";
import { HeaderContainer, Navbar } from "./style";

function Header() {
  return (
    <>
      <HeaderContainer>
        <Navbar>
          <img src={logo} alt="Logo Kenzie Burguer" />
          <div className="inputDiv">
            <input type="text" placeholder="Digitar pesquisa" />
            <button className="button medium green">Pesquisar</button>
          </div>
        </Navbar>
      </HeaderContainer>
    </>
  );
}

export default Header;
