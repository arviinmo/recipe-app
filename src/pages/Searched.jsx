import React, {useState, useEffect} from "react";

function Searched() {
  const [searchedRecipes, setSearchedRacipes] = useState([]);

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  return <div>Searched</div>;
}

export default Searched;
