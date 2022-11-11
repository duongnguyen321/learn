import Header from "./components/Header";
import Routers from "./Routers/Routers";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <Routers />
        </div>
      </div>
    </>
  );
}
export default App;
