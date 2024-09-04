// import Home from "./Components/Home";
import moviedata from "./assets/movieData.json";
import { Netflixcard } from "./Components/Netflixcard";
import "./App.css";
export const App = () => {
  return (
    <>
      <div className="heading">
        <h1 className="main_heading">Best Netflix Series</h1>
      </div>
      <ul className="grid grid-three--cols">
        {moviedata.map((movie) => (
          <Netflixcard key={movie.id} data={movie} />
        ))}
      </ul>
    </>
  );
};
