function OptionsHeader() {
  const textOptions = ["CATEGORIAS", "MINHA ESTANTE", "FAVORITOS"];

  return (
    <ul className="options">
      {textOptions.map((option) => (
        <li className="option">
          <p>{option}</p>
        </li>
      ))}
    </ul>
  );
}

export default OptionsHeader;
