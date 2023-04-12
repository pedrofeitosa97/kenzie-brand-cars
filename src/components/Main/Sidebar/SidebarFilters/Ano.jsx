import { HomeContext } from "../../../../Providers/homeContext";
import { useContext } from "react";

export default function Ano() {
  const { handleFilterValueSelect } = useContext(HomeContext);

  return (
    <div>
      <h2>Ano</h2>
      <p onClick={() => handleFilterValueSelect("year", "2022")}>2022</p>
      <p onClick={() => handleFilterValueSelect("year", "2021")}>2021</p>
      <p onClick={() => handleFilterValueSelect("year", "2018")}>2018</p>
      <p onClick={() => handleFilterValueSelect("year", "2015")}>2015</p>
      <p onClick={() => handleFilterValueSelect("year", "2013")}>2013</p>
      <p onClick={() => handleFilterValueSelect("year", "2012")}>2012</p>
      <p onClick={() => handleFilterValueSelect("year", "2010")}>2010</p>
    </div>
  );
}
