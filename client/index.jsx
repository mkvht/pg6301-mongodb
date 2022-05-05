import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function FrontPage() {
  return (
    <div>
      <h1>Movie Database</h1>
      <ul>
        <li>
          <Link to={"/movies"}>List movies</Link>
        </li>
        <li>
          <Link to={"/movies/new"}>Register new movie</Link>
        </li>
      </ul>
    </div>
  );
}

function ListMovies() {
  return (
    <div>
      <h1>Movies in the database</h1>
    </div>
  );
}

function RegisterMovie() {
  return (
    <form>
      <h1>Register new movie</h1>
    </form>
  );
}

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<FrontPage />} />
        <Route path={"/movies"} element={<ListMovies />} />
        <Route path={"/movies/new"} element={<RegisterMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
