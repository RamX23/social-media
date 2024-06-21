import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const[username, setusername] = useState("");
  const [password, setpassword] = useState("");
//   const [email, setemail] = useState("");

const navigate = useNavigate();

  
const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(`${window.location.origin}/login`, {
      username,
      password,
    });
    localStorage.setItem('token', response.data.token);
    alert('Login successful');
    navigate("/home");
    setusername('');
    setpassword('');
    // alert("navigated");
   
  } catch (error) {
    console.error(error);
    alert('Login failed');
  }
};

  return (
    <div>
      <main
        class="form-signin m-auto w-100 d-flex flex-column justify-content-center align-items-center "
        style={{ height: "100vh" }}
      >
        <form
          className="d-flex flex-wrap flex-column gap-2"
          style={{ width: "20rem" }}
          onSubmit={handleLogin}
        >
          {/* <img class="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> */}
          <h1 class="h3 mb-3 fw-normal ">Sign in</h1>

          <div class="form-floating">
            <input
              type="Text"
              class="form-control"
              id="floatingInput"
              placeholder="Enter Username"
              onChange={(e)=>{setusername(e.target.value)}}
            />
            <label for="floatingInput">User Name</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e)=>{setpassword(e.target.value)}}
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div class="form-check text-start my-3">
            <input
              class="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button class="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
          <p style={{ marginTop: "1rem" }}>
            If You'r new user <Link to="/">Sign up</Link>
          </p>
          <p style={{ marginTop: "1rem" }}>
            If You dont remember password <Link to="/forgot">Forgot password</Link>
          </p>
        </form>
      </main>
    </div>
  );
};

export default Login;
