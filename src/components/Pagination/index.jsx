import { useContext, useState } from "react";
import { HomeContext } from "../../Providers/homeContext";
import { PaginationDivStyle } from "./style";

export default function Pagination() {
  const { handlePageClick, currentPage, totalPages } = useContext(HomeContext);

  return (
    <PaginationDivStyle>
      <button
        onClick={(event) => handlePageClick(event, currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <span>
        {currentPage} de {totalPages}
      </span>
      <button
        onClick={(event) => handlePageClick(event, currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Seguinte
      </button>
    </PaginationDivStyle>
  );
}
