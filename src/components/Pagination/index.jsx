import { useContext, useState } from "react";
import { HomeContext } from "../../Providers/homeContext";
import { PaginationDivStyle } from "./style";

export default function Pagination() {
  const { currentPage, totalPages } = useContext(HomeContext);
  // const [buttonClass1, setButtonClass1] = useState()
  // const [buttonClass2, setButtonClass2] = useState()

  // function handleButtonClass(){
  //   currentPage === totalPages
  //   setButtonClass2()
  // }

  return (
    <PaginationDivStyle>
      {currentPage !== 1 ? <ButtonBackward /> : <></>}
      <span>
        {currentPage} de {totalPages}
      </span>
      {currentPage !== totalPages ? <ButtonForward /> : <></>}
    </PaginationDivStyle>
  );
}

function ButtonBackward() {
  const { handlePageClick, currentPage } = useContext(HomeContext);
  return (
    <button
      onClick={(event) => {
        handlePageClick(event, currentPage - 1);
      }}
      disabled={currentPage === 1}
    >
      Anterior
    </button>
  );
}

function ButtonForward() {
  const { handlePageClick, currentPage, totalPages } = useContext(HomeContext);
  return (
    <button
      onClick={(event) => {
        handlePageClick(event, currentPage + 1);
      }}
      disabled={currentPage === totalPages}
    >
      Seguinte
    </button>
  );
}
