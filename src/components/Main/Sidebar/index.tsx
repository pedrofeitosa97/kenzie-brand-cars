import Marca from "./SidebarFilters/Marca";
import Modelo from "./SidebarFilters/Modelo";
import Cor from "./SidebarFilters/Cor";
import Ano from "./SidebarFilters/Ano";
import Combustivel from "./SidebarFilters/Combustivel";
import Km from "./SidebarFilters/Km";
import Preco from "./SidebarFilters/Preco";
import { CleanFiltterButtonStyle } from "../../../styles/buttons";
import { SidebarStyle } from "./style";

export default function Sidebar() {
  return (
    <SidebarStyle>
      <Marca />
      <Modelo />
      <Cor />
      <Ano />
      <Combustivel />
      <Km />
      <Preco />
      <CleanFiltterButtonStyle>Limpar Filtros</CleanFiltterButtonStyle>
    </SidebarStyle>
  );
}
