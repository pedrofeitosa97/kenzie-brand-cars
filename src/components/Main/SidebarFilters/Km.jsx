import { HomeContext } from "../../../Providers/homeContext";
import { useContext } from "react";

export default function Km() {
  const { handleFilterValueSelect } = useContext(HomeContext);

  return (
    <div>
      <h2>Km</h2>
      <div>
        <button onClick={() => handleFilterValueSelect("km", "minimum")}>
          Mínima
        </button>
        <button onClick={() => handleFilterValueSelect("km", "maximum")}>
          Máxima
        </button>
      </div>
    </div>
  );
}
