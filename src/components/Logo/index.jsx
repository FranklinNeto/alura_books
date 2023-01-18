import logo from "../../download-imagens/logo.svg";
import "./styles.css";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Logo da empresa" className="logo-img" />
      <p>
        <strong>Alura Books</strong>
      </p>
    </div>
  );
}

export default Logo;
