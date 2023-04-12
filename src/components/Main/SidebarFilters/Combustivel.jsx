import { HomeContext } from "../../../Providers/homeContext";
import { useContext } from "react";

export default function Combustivel() {
  const { handleFilterValueSelect } = useContext(HomeContext);

  return (
    <div>
      <h2>Combustível</h2>
      <p onClick={() => handleFilterValueSelect("fuel", "diesel")}>Diesel</p>
      <p onClick={() => handleFilterValueSelect("fuel", "etanol")}>Etanol</p>
      <p onClick={() => handleFilterValueSelect("fuel", "gasoline")}>
        Gasolina
      </p>
      <p onClick={() => handleFilterValueSelect("fuel", "flex")}>Flex</p>
    </div>
  );
}
