import { Card } from "../../Card";
import { data } from "../../../mockeData";
import { CardListStyle, CardsSection } from "./style";
import { useContext, useEffect } from "react";
import { HomeContext } from "../../../Providers/homeContext";
import Pagination from "../../Pagination";

export default function CardsList() {
  const { pagesItemsList, axiosFilterRequest } = useContext(HomeContext);
  useEffect(() => {
    axiosFilterRequest();
  }, []);
  return (
    <CardsSection>
      <CardListStyle id="footer-anchor">
        {pagesItemsList ? (
          pagesItemsList.map((dataIten) => (
            <Card iten={dataIten} key={dataIten.id} />
          ))
        ) : (
          <></>
        )}
      </CardListStyle>
      <Pagination />
    </CardsSection>
  );
}
