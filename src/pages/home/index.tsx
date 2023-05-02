import Header from "./components/Header";
import NavBar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useContext, useEffect } from "react";
import { HomeContext } from "../../providers/homeContext";
import FiltterModal from "./components/FiltterModal";
import { useMediaQuery } from "react-responsive";

export default function HomePage() {
  const { modalFiltter, setModalFiltter } = useContext(HomeContext);
  const mobileResoluction = useMediaQuery({ minWidth: 760 });
  function resetMobile() {
    if (mobileResoluction) {
      setModalFiltter(false);
    }
  }
  useEffect(() => {
    resetMobile();
  }, [mobileResoluction]);

  return (
    <>
      <NavBar />
      {modalFiltter ? (
        <FiltterModal />
      ) : (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </>
  );
}
