import Sidebar from "./Sidebar";
import CardsList from "./CardsList";
import { MainStyle } from "./style";

export default function Main() {
  return (
    <MainStyle>
      <Sidebar />
      <CardsList />
    </MainStyle>
  );
}
