import Marca from "./SidebarFilters/Marca";
import Modelo from "./SidebarFilters/Modelo";
import Cor from "./SidebarFilters/Cor";
import Ano from "./SidebarFilters/Ano";
import Combustivel from "./SidebarFilters/Combustivel";
import Km from "./SidebarFilters/Km";
import Preco from "./SidebarFilters/Preco";

export default function Main() {
  return (
    <main>
      <sidebar>
        <Marca />
        <Modelo />
        <Cor />
        <Ano />
        <Combustivel />
        <Km />
        <Preco />
      </sidebar>
      <div></div>
    </main>
  );
}
