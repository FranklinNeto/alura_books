import perfil from "../../download-imagens/perfil.svg";
import sacola from "../../download-imagens/sacola.svg";

function IconsHeader() {
  const icons = [perfil, sacola];

  return (
    <ul className="icons">
      {icons.map((icon) => (
        <li className="icon">
          <img src={icon} alt="icone" />
        </li>
      ))}
    </ul>
  );
}

export default IconsHeader;
