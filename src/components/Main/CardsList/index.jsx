import { Card } from "../../Card";
import { data } from "../../../mockeData";
import { CardListStyle } from "./style";

export default function CardsList() {
  return (
    <CardListStyle>
      {data ? (
        data.map((dataIten) => <Card iten={dataIten} key={dataIten.id} />)
      ) : (
        <></>
      )}
    </CardListStyle>
  );
}
