import React, { useState } from "react";
import Search from "./Search";
import Icons from "./Icons";
import Suggestions from "./Suggestions";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [query, setQuery] = useState("");

  const fetchResults = query => {
    if (query.length > 1) {
      setQuery(query);
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(response => response.json())
        .then(data => {
          if (data.meals) {
            setMeals(data.meals);
          } else {
            setMeals([]);
          }
        });
    } else {
      setQuery("");
      setMeals([]);
    }
  };

  return (
    <div>
      <div class="box">
        <div class="display">
          <div class="title">So, what do you want to eat?</div>
          <div class="subtitle">Start by selecting your ingredients!</div>
        </div>
        <div class="scroll">
          Scroll down
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>

      <Search fetchResults={fetchResults} />
      <Icons />
      <Suggestions strCategory={query} meals={meals} alert={alert} />
    </div>
  );
};

export default Home;
