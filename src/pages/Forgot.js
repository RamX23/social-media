import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Forgot = () => {
    const navigate=useNavigate();
    const [username,setusername]=useState();
    const [email,setemail]=useState();
  
    const handlereset=async(e)=>{
        alert("Check you'r email for link to reset passsword.")
        navigate('/login');
      try {
        const response = await axios.post(`${window.location.origin}/forgotpassword`, { email });
       
      } catch (error) {
        console.error('Error sending reset email:', error);
  
      }
    }
  return (
    <div>
       <main
        class="form-signin m-auto w-100 d-flex flex-column justify-content-center align-items-center "
        style={{ height: "100vh" }}
      >
        <form
          className="d-flex flex-wrap flex-column gap-2"
          style={{ width: "20rem" }}
          onSubmit={handlereset}
        >
          {/* <img class="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> */}
          <h1 class="h3 mb-3 fw-normal ">Reset Password</h1>

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
              onChange={(e)=>{setusername(e.target.value)}}
            />
            <label for="floatingInput">Email</label>
          </div>
        

       
          <button class="btn btn-primary w-100 py-2" type="submit">
           Reset Password
          </button>
          <p style={{ marginTop: "1rem" }}>
            If You'r new user <Link to="/">Sign up</Link>
          </p>
        </form>
      </main>
    </div>
  )
}

export default Forgot
