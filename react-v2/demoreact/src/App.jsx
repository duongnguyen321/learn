import Main from "./Pages/main";
import GlobalState from "./Service/Context/GlobalState";
function App() {
    return (
      <GlobalState>
        <Main />
      </GlobalState>
    );
}

export default App;
