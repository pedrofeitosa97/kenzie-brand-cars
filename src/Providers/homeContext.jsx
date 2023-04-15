import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { data } from "../mockeData";

export const HomeContext = createContext({});

export default function HomeProvider({ children }) {
  const notifySucess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  const [pagesItemsList, setPagesItemsList] = useState([]);

  const [cardsList, setCardsList] = useState([]);
  const [filterData, setFilterData] = useState({
    mark: null,
    model: null,
    fuel: null,
    color: null,
    year: null,
    price: null,
    km: null,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(cardsList.length / itemsPerPage);

  const handlePageClick = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPagesItemsList(cardsList.slice(startIndex, endIndex));
  };

  function handleFilterValueSelect(key, value) {
    if (filterData[key] === value) {
      setFilterData((filterData) => ({
        ...filterData,
        [key]: null,
      }));
    } else {
      setFilterData((filterData) => ({
        ...filterData,
        [key]: value,
      }));
    }
    axiosFilterRequest({ ...filterData, [key]: value });
  }

  useEffect(() => {
    axiosFilterRequest();
  }, [filterData]);

  function axiosFilterRequest() {
    const filteredParams = Object.entries(filterData)
      .filter(
        ([key, value]) => value !== null && value !== undefined && value !== ""
      )
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");
    const url = "http://localhost:3001/" + filteredParams;
    console.log(url);
    console.log("chamar o axios");
    setCardsList(data);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPagesItemsList(data.slice(1, endIndex));
  }

  return (
    <HomeContext.Provider
      value={{
        notifySucess,
        notifyError,
        handleFilterValueSelect,
        setCardsList,
        cardsList,
        currentPage,
        totalPages,
        currentPage,
        handlePageClick,
        pagesItemsList,
        setPagesItemsList,
        axiosFilterRequest,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
