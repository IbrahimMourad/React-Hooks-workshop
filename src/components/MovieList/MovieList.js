import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";

let movies = [
  {
    id: 1,
    name: "movie1",
    desc: "movie 1 title",
    img: "https://via.placeholder.com/300.png/09f/fff",
  },
  {
    id: "2",
    name: "movie2",
    desc: "movie 2 title",
    img: "https://via.placeholder.com/300.png/09f/fff",
  },
  {
    id: "3",
    name: "movie3",
    desc: "movie 3 title",
    img: "https://via.placeholder.com/300.png/09f/fff",
  },
];
const MovieList = () => {
  const [form, setForm] = useState({
    name: "",
    img: "",
    desc: "",
    id: "",
  });

  const renderList = () =>
    movies.map((el) => (
      <div key={el.id} className="col-md-4">
        <MovieCard name={el.name} img={el.img} desc={el.desc} />
      </div>
    ));

  const handleSubmit = () => {
    movies.push(form);
    setForm({
      name: "",
      img: "",
      desc: "",
      id: "",
    });
  };

  return (
    <div className="container">
      <div className="row">{renderList()}</div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="my-3">
          <label> id:</label>
          <input
            type="number"
            value={+form.id}
            onChange={(e) => setForm({ ...form, id: e.target.value })}
          />
        </div>
        <div className="my-3">
          <label> Name:</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="my-3">
          <label> Description:</label>
          <input
            type="text"
            value={form.desc}
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
          />
        </div>
        <div className="my-3">
          <label> Img:</label>
          <input
            type="text"
            value={form.img}
            onChange={(e) => setForm({ ...form, img: e.target.value })}
          />
        </div>
        <button onClick={handleSubmit}>Submits</button>
      </form>
    </div>
  );
};

export default MovieList;
