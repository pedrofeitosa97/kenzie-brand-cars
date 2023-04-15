import { useContext, useState } from "react";
import { HomeContext } from "../../Providers/homeContext";

export default function Pagination() {
  const { handlePageClick, currentPage, totalPages } = useContext(HomeContext);

  return (
    <div>
      <button
        onClick={(event) => handlePageClick(event, currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <button
        onClick={(event) => handlePageClick(event, currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Próxima
      </button>
    </div>
  );
}
