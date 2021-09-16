import React, { useState } from "react";
import { Link } from "react-router-dom";
import pic from "../photo.jpg";

function Signup() {
  const [name, setname] = useState("");
  const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errors, seterrors] = useState({
    name: "",
    mobile: "",
    email: "",
    pass: "",
    err: false,
  });

  const submitHandler = (e) => {
    e.preventDefault();

    console.log({ name, mobile, email, password });
    if (!/^[A-Za-z ]+$/.test(name))
      seterrors({
        ...errors,
        err: true,
        name: "Name can contain only alphabets and space.",
      });

    if (!/^[1-9][0-9]{9}$/.test(mobile))
      seterrors({ ...errors, err: true, mobile: "Invalid mobile number" });

    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    )
      seterrors({ ...errors, err: true, email: "Invalid email" });

    if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(password))
      seterrors({
        ...errors,
        err: true,
        pass: "Password must contain a alphabet,a number , a character and must be min. length 8",
      });

    if (!errors.err) {
      if (localStorage.getItem(email)) {
        alert("User already exists");
      } else {
        const userData = JSON.stringify({ name, password, email, mobile });
        localStorage.setItem(email, userData);
        alert("Registered Successfully");
      }
    }
  };

  return (
    <div>
      <section className="myform-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="form-area login-form">
                <div className="form-content">
                  <img src={pic} alt="scene" />
                </div>
                <div className="form-input">
                  <h2>Signup Form</h2>
                  <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        required
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                      ></input>
                      <span style={{ color: "red" }}>{errors.name}</span>
                      <label>User Name</label>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="mobile"
                        required
                        value={mobile}
                        onChange={(e) => setmobile(e.target.value)}
                      ></input>
                      <span style={{ color: "red" }}>{errors.mobile}</span>

                      <label>Mobile</label>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                      ></input>
                      <span style={{ color: "red" }}>{errors.email}</span>

                      <label>Email</label>
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                      ></input>
                      <span style={{ color: "red" }}>{errors.password}</span>

                      <label>password</label>
                    </div>
                    <div className="myform-button">
                      <button className="myform-btn">Signup</button>
                    </div>
                    <div className="linkdiv">
                      <Link className="innerlink" to="/login">
                        Already have account
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

export default Signup;
