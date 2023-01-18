import Logo from "../Logo";
import OptionsHeader from "../OptionsHeader";
import IconsHeader from "../IconsHeader";
import { ContainerHeader } from "./styles";

function Header() {
  return (
    <ContainerHeader>
      <Logo />
      <OptionsHeader />
      <IconsHeader />
    </ContainerHeader>
  );
}

export default Header;
