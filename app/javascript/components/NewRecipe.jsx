import React, { useState } from "react";
import axios from "axios";

const NewRecipe = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = async () => {
    let body = { name, content };
    const token = document.querySelector('meta[name="csrf-token"]').content;
    let config = {
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
    };
    try {
      axios.post("/api/v1/recipes/create", JSON.stringify(body), config);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      NewRecipe
      <div>
        <input
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <input
          type="textarea"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button onClick={onSubmit}> submit</button>
      </div>
    </div>
  );
};
export default NewRecipe;
