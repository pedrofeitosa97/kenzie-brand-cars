import Header from "../../components/Header";
import NavBar from "../../components/Navbar";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <Header />
      <Main />
      <div className="pagination_class"></div>
      <Footer />
    </div>
  );
}
