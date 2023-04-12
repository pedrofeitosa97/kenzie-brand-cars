import { HomeContext } from "../../../../Providers/homeContext";
import { useContext } from "react";

export default function Marca() {
  const { handleFilterValueSelect } = useContext(HomeContext);

  return (
    <div>
      <h2>Marca</h2>
      <p onClick={() => handleFilterValueSelect("mark", "general motors")}>
        General Motors
      </p>
      <p onClick={() => handleFilterValueSelect("mark", "fiat")}>Fiat</p>
      <p onClick={() => handleFilterValueSelect("mark", "ford")}>Ford</p>
      <p onClick={() => handleFilterValueSelect("mark", "honda")}>Honda</p>
      <p onClick={() => handleFilterValueSelect("mark", "porsche")}>Porsche</p>
      <p onClick={() => handleFilterValueSelect("mark", "volkswagem")}>
        Volskwagem
      </p>
    </div>
  );
}
