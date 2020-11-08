import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home page
      <NavLink to="/recipes">recipes</NavLink>
    </div>
  );
};

export default Home;
