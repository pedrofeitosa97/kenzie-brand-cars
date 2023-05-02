import Header from "../../components2/Header";
import NavBar from "../../components2/Navbar";
import Main from "../../components2/Main";
import Footer from "../../components2/Footer";
import { useContext, useEffect } from "react";
import { HomeContext } from "../../Providers/homeContext";
import FiltterModal from "../../components2/FiltterModal";
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
