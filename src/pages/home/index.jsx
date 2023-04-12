import Header from "../../components/Header";
import NavBar from "../../components/Navbar";
import Main from "../../components/Main";

export default function HomePage() {
  return (
    <body>
      <NavBar />
      <Header />
      <Main />
      <div className="pagination_class"></div>
    </body>
  );
}
