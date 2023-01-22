import logo from "../../download-imagens/logo.svg";
import { ContainerLogo } from "./styles";

function Logo() {
  return (
    <ContainerLogo>
      {/*  <figure> */}
      <img src={logo} alt="Logo da empresa" />
      {/* </figure> */}

      <p>
        <strong>Alura Books</strong>
      </p>
    </ContainerLogo>
  );
}

export default Logo;
