import React, { useState } from "react";
import axios from "axios";

export default function LoginForm({isLoggedIn, setIsLoggedIn}) {
  const [message, setMessage] = useState('')

  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setUserInput((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = userInput ;
    axios.post("http://localhost:5000/user/login", data)
      .then((response) => {
        setMessage(response.data)
        // setIsLoggedIn(!isLoggedIn)
        // console.log(response)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
     <form onSubmit={submitHandler}>
        <label>Email:</label>
        <input type="email" name="email" onChange={onChangeHandler} />
        <label>Password:</label>
        <input type="password" name="password" onChange={onChangeHandler} />
        <button type="submit">Log in</button>
      </form>
      <h4>{message}</h4>
    </div>
  );
}