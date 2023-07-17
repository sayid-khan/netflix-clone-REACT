import React from "react";
import "./App.css";
import requests from "./requests";
import Row from "./components/Row";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default App;
