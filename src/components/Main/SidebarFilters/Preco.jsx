import { HomeContext } from "../../../Providers/homeContext";
import { useContext } from "react";

export default function Preco() {
  const { handleFilterValueSelect } = useContext(HomeContext);

  return (
    <div>
      <h2>Preço</h2>
      <div>
        <button onClick={() => handleFilterValueSelect("price", "minimum")}>
          Mínimo
        </button>
        <button onClick={() => handleFilterValueSelect("price", "maximum")}>
          Máximo
        </button>
      </div>
    </div>
  );
}
