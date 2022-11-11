import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../assets/css/styles.css";
import "../assets/js/scripts";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-svg-core";
import { dom } from "@fortawesome/fontawesome-svg-core";
import Router from "../Router/Router";
dom.watch();
function Main() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default Main;
