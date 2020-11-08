import React, { useState } from "react";
import axios from "axios";

const NewUser = () => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    const token = document.querySelector('meta[name="csrf-token"]').content;
    let config = {
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
    };
    let body = { name, login, password };
    try {
      axios.post("/api/v1/users/create", JSON.stringify(body), config);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={submit}>Sumbit</button>
    </div>
  );
};
export default NewUser;
