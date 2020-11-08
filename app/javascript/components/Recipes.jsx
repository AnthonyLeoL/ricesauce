import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      try {
        let { data } = await axios.get(`/api/v1/recipes/index`);
        console.log("data: ", data);
        setRecipes(data);
      } catch (e) {
        console.log(e);
      }
    }
    getRecipes();
  }, []);

  return (
    <div>
      recipes
      <div>
        {recipes.map((item, i) => {
          return (
            <div key={i}>
              {item.name}{" "}
              <NavLink to={`/recipe/${item.id}`}> Full recipe</NavLink>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
