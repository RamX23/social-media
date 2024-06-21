import React from "react";
import { useState } from "react";
import axios from "axios";
import Login from "./Login";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";


const Signup = () => {
  
    const[username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const navigate=useNavigate();

    const handleRegister = async (e) => {
      e.preventDefault();
      // if (!username || !email || !password) {
      //   alert('Please fill in all fields.');
      //   return;
      // }
      try {
        setusername('');
        setemail('');
        setpassword('');
        await axios.post(`${window.location.origin}/signup`, {
          email,
          username,
          password,
        } 

      );
        console.log("registeration successfull");
        alert('Registration successful');
        navigate('/login')
      } catch (error) {
        console.error(error);
        alert('Registration failed');
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
          onSubmit={handleRegister}
        >
     
          <h1 class="h3 mb-3 fw-normal ">Sign up</h1>

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
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="Enter Email"
              onChange={(e)=>{setemail(e.target.value)}}
            />
            <label for="floatingInput">Email</label>
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
            Sign up
          </button>
          <p style={{ marginTop: "1rem" }}>
            You'r already an user <Link to='/login'>Sign in</Link>
          </p>
        </form>
      </main>
    </div>
  );
};

export default Signup;
