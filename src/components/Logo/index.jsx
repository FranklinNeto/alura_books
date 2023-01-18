import logo from "../../download-imagens/logo.svg";
import { ContainerLogo } from "./styles";

function Logo() {
  return (
    <ContainerLogo>
      <img src={logo} alt="Logo da empresa" />
      <p>
        <strong>Alura Books</strong>
      </p>
    </ContainerLogo>
  );
}

export default Logo;
