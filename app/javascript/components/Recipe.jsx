import React, { useState, useEffect } from "react";
import axios from "axios";
const Recipe = (props) => {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    async function getRecipes() {
      const {
        match: {
          params: { id },
        },
      } = props;

      try {
        let { data } = await axios.get(`/api/v1/show/${id}`);
        console.log("data: ", data);
        setRecipe(data);
      } catch (e) {
        console.log(e);
      }
    }
    getRecipes();
  }, []);
  const deleteRecipe = () => {
    const token = document.querySelector('meta[name="csrf-token"]').content;
    let config = {
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
    };

    const {
      match: {
        params: { id },
      },
    } = props;
    try {
      axios.delete(`/api/v1/destroy/${id}`, config);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      Recipe
      <div>
        {recipe.name} <div>{recipe.content}</div>
      </div>
      <button onClick={deleteRecipe}>delete Recipe</button>
    </div>
  );
};
export default Recipe;
