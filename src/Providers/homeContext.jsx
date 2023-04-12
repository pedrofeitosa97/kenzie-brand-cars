import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const HomeContext = createContext({});

export default function HomeProvider({ children }) {
  const notifySucess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

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
  }

  return (
    <HomeContext.Provider
      value={{
        notifySucess,
        notifyError,
        handleFilterValueSelect,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
