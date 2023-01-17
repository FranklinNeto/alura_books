import logo from "../../download-imagens/logo.svg";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Logo da empresa" />
      <p>
        <strong>Alura Books</strong>
      </p>
    </div>
  );
}

export default Logo;
