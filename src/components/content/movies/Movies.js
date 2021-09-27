import React from "react";
import MovieCard from "./movieCard/MovieCard";
import "./movies.css";

import pulpFiction from "../../../assets/pulp-fiction.png";
import bohemian from "../../../assets/bohemian.png";
import killBill from "../../../assets/kill-bill.png";
import avengers from "../../../assets/avengers.png";
import inception from "../../../assets/inception.png";
import reserviordogs from "../../../assets/reservior-dogs.png";

let items = [
    {
        id: 1,
        title: "Pulp Fiction",
        description: "Action, Criminal",
        image: pulpFiction
    },
    {
        id: 2,
        title: "Bohemian Rhapsody",
        description: "Drama, Music",
        image: bohemian
    },
    {
        id: 3,
        title: "Kill Bill",
        description: "Action",
        image: killBill
    },
    {
        id: 4,
        title: "Avengers",
        description: "Action, Adventure",
        image: avengers
    },
    {
        id: 5,
        title: "Inception",
        description: "Action, Adventure",
        image: inception
    },
    {
        id: 6,
        title: "Reserviordogs",
        description: "Action Criminal",
        image: reserviordogs
    }
]

let Movies = () => {
  return (    
    <div className="movies">
        {items.map((movie) => (
            <MovieCard
                title={movie.title}
                description={movie.description}
                image={movie.image}
                key={movie.id}
            />
        ))}
    </div>
  );
};

export default Movies;
