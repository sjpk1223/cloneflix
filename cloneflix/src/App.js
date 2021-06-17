import "./App.css";
import Row from "./Row";
import Requests from "./request";

function App() {
  return (
    <div className="App">
      <Row title="Trending Now" fetchUrl={Requests.fetchTrending} />
    </div>
  );
}

export default App;
