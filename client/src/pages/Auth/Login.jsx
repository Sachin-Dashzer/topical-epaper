import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from 'react-redux'
import { loginUser } from '../../store/authStore/index.js'


const SignIn = () => {

  const initialState = {
    email: "",
    password: ""
  }

  const [formdata, setFormdata] = useState(initialState)
  const dispatch = useDispatch();

  const onsubmit = (event) => {

    event.preventDefault()

    dispatch(loginUser(formdata)).then((data) => {
      console.log(data)
    })
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value
    });
  };


  return (
    <div
      className="d-flex justify-content-center pt-5 vh-100"
      style={{
        backgroundColor: "#121212",
        color: "#ffffff",
      }}
    >
      <div className="w-100 pt-5" style={{ maxWidth: "380px" }}>

        <div className="text-center mb-4">
          <div
            className="rounded-circle bg-secondary d-flex align-items-center justify-content-center"
            style={{ width: "60px", height: "60px", margin: "0 auto" }}
          >
            <i
              className="fas fa-circle-notch"
              style={{ fontSize: "30px", color: "#ffffff" }}
            ></i>
          </div>
        </div>


        <h2 className="text-center fw-bold mb-2">Yooo, welcome back!</h2>

        <p className="text-center text-secondary mb-4">
          Took you long enough champ
        </p>


        <form className="loginForm" onSubmit={onsubmit}>
          <div className="mb-3">
            <input
              name="email"
              type="email"
              className="form-control border-0"
              placeholder="Your email"
              required
              value={formdata.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              name="password"
              type="password"
              className="form-control border-0"
              placeholder="Enter Password..."
              required
              value={formdata.password}
              onChange={handleChange}
            />
          </div>


          <div className="d-grid mb-3">
            <button
              type="submit"
              className="btn btn-light fw-bold bg-secondary"
              style={{ borderRadius: "8px" }}
            >
              Sign in
            </button>
          </div>



        </form>


        <p className="text-center text-secondary mt-4" style={{ fontSize: "12px" }}>
          You acknowledge that you read, and agree to our{" "}
          <a href="#" className="text-white text-decoration-none">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-white text-decoration-none">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default SignIn;
