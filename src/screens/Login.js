import React, { useState } from "react";
import { Link } from "react-router-dom";
import pic from "../photo.jpg";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem(username));
    if (!user) alert("No such user exists");
    else {
      if (password === user.password) window.location.assign("/list");
      else alert("Invalid Credentials");
    }
  };

  return (
    <div>
      <section className="myform-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="form-area login-form">
                <div className="form-content ">
                  <img src={pic} alt="scene" />
                </div>
                <div className="form-input">
                  <h2 className="lh2">Welcome back!</h2>
                  <h4 className="lh4">Please login to your account</h4>
                  <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <input
                        type="text"
                        id="username"
                        name="name"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      ></input>
                      <label>User Name</label>
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      ></input>
                      <label>password</label>
                    </div>
                    <div className="myform-button">
                      <button className="myform-btn">Login</button>
                    </div>
                    <div className="linkdiv">
                      <Link className="innerlink" to="/">
                        Register Now
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
