import { ContainerOptions } from "./styles";

function OptionsHeader() {
  const textOptions = ["CATEGORIAS", "MINHA ESTANTE", "FAVORITOS"];

  return (
    <ContainerOptions>
      {textOptions.map((option) => (
        <li>
          <p>{option}</p>
        </li>
      ))}
    </ContainerOptions>
  );
}

export default OptionsHeader;
