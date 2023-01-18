import perfil from "../../download-imagens/perfil.svg";
import sacola from "../../download-imagens/sacola.svg";
import { ContainerIcons } from "./styles";

function IconsHeader() {
  const icons = [perfil, sacola];

  return (
    <ContainerIcons>
      {icons.map((icon) => (
        <li>
          <img src={icon} alt="icone" />
        </li>
      ))}
    </ContainerIcons>
  );
}

export default IconsHeader;
