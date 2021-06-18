import "./App.css";
import Row from "./Row";
import Requests from "./requests";
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
      <Banner fetchUrl={Requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={Requests.fetchTrending} />
      <Row
        title="Netflix Originals"
        fetchUrl={Requests.fetchNetflixOriginals}
      />
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
