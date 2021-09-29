import "./styles.css";
import React from "react";
import { useState } from "react";

var booksGenreDB = {
  Javascript: [
    {
      name: "Eloquent Javascript",
      description:
        "This is a book about JavaScript, programming, and the wonders of the digital. Written by Marijn Haverbeke. ",
      rating: "4/5"
    },
    {
      name: "you don't know JS: this & Object",
      description:
        "No matter how much experience you have with JavaScript, odds are you don't fully understand the language. This concise, in-depth guide takes you inside JavaScript's this structure and object prototypes. Written by Kyle Simpson",
      rating: "3.5/5"
    },
    {
      name: "HTML5",
      description:
        "If you don't know about the new features available in HTML5, now's the time to find out by reading this book. Written by Mark Pilgrim",
      rating: "4/5"
    }
  ],
  Farming: [
    {
      name: "Food 5.0: How We Feed the Future",
      description:
        "Food has become the new religion. While denominations such as paleo, vegan, and organic debate which is the way, we're ignoring a truth that affects us all: to support a population nearing 10 billion by 2050, agriculture must become infinitely sustainable. Written by Robert D. Saik",
      rating: "4.5/5"
    },
    {
      name: "A Soil Owner’s Manual",
      description:
        "Restoring and Maintaining Soil Health, is about restoring the capacity of your soil to perform all the functions it was intended to perform. This book is not another fanciful guide on how to continuously manipulate and amend your soil to try and keep it productive. Written by Jon Stika",
      rating: "4/5"
    },
    {
      name: "Dirt to Soil",
      description:
        "Gabe Brown’s Dirt to Soil could not be more timely, as farmers are beginning to see an increase in costs of the fertilizers and many other inputs they rely on. Gabe provides us with his complete story of how he transitioned to a largely self-renewing and self-regulating (regenerative) farming system. Written by Gabe Brown",
      rating: "3.5/5"
    }
  ],
  Business: [
    {
      name: "Never Split the Difference",
      description:
        "Never Split the Difference is a riveting, indispensable handbook of negotiation principles culled and perfected from Chris Voss’s remarkable career as a hostage negotiator and later as an award-winning teacher in the world’s most prestigious business schools. Written by Chris Voss",
      rating: "3.5/5"
    },
    {
      name: "Your Next Five Moves",
      description:
        "From the creator of Valuetainment, the #1 YouTube channel for entrepreneurs, comes a practical and effective guide for thinking more clearly and achieving your most audacious business goals. Written by Patrick Bet-David ",
      rating: "4/5"
    },
    {
      name: "Zero to One",
      description:
        "Crisply written, rational and practical, Zero to One should be read not just by aspiring entrepreneurs but by anyone seeking a thoughtful alternative to the current pervasive gloom about the prospects for the world. Written by Peter Thiel",
      rating: "4.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>📘 Good books</h1>{" "}
      <p style={{ fontSize: "medium" }}>
        Checkout my favorite books. Select a genre to get started{" "}
      </p>
      <div>
        {Object.keys(booksGenreDB).map((genre) => (
          <button
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.7rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
            onClick={() => genreClickHandler(genre)}
          >
            {" "}
            {genre}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInline: "2rem" }}>
          {booksGenreDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.7rem"
              }}
            >
              {" "}
              <div
                style={{
                  margin: "center",
                  backgroundColor: "gray",
                  fontSize: "large"
                }}
              >
                {book.name}
              </div>{" "}
              <div style={{ backgroundColor: "green", fontSize: "large" }}>
                {book.rating}
              </div>{" "}
              <div style={{ fontSize: "medium" }}>{book.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
