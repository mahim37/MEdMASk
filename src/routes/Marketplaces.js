import Navbar from "../components/Navbar";
import MarketplacesCards from "./MarketplacesCards";
import "../components/NavbarStyles.css";
import Footer from "../components/Footer";
function Marketplaces() {
  return (
    <>
      <Navbar />
      <MarketplacesCards />
      <Footer></Footer>
    </>
  );
}
export default Marketplaces;
