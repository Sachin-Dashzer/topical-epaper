import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { ResgisterUser } from '../../store/authStore';
import { useNavigate } from 'react-router-dom';
import Toaster from '../../components/ToasterMassage';

const AddadminUsers = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });


  const [toasterData, setToasterData] = useState({
    show: false,
    success: false,
    message: "",
  });

  const showToaster = (success, message) => {
    setToasterData({ show: true, success, message });

    setTimeout(() => {
      setToasterData({ ...toasterData, show: false });
    }, 2000);
  };


  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(ResgisterUser(formData)).then((res) => {

      if (res.payload.success) {
        showToaster(true, res.payload.massage);
        
        setTimeout(() => {       
          navigate("/admin/adminusers");
        }, 1000);
        
      }
      else {
        showToaster(false, res.payload.massage || "Something went wrong");
        

      }

    })

  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Toaster
        success={toasterData.success}
        message={toasterData.message}
        show={toasterData.show}
        onClose={() => setToasterData({ ...toasterData, show: false })}
      />
      <section className='bg-light'>
        <div className="container d-flex justify-content-center align-items-center pt-4">
          <div className="registrationForm p-5 pt-4 shadow-lg" style={{ width: "500px" }}>
            <h2 className="text-center fontWeight700 font-heading text-primary heading mb-4" style={{ textDecoration: "underline" }}>
              Register User
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fontWeight700 ms-1">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control py-2"
                  id="userName"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fontWeight700 ms-1">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control py-2"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label fontWeight700 ms-1">
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control py-2"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    className="viewBtn px-3 bg-transparent"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                  </button>
                </div>
              </div>
              <Button type="submit" className="btn btn-primary mt-1 py-2 w-100">
                Register
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>

  );
};

export default AddadminUsers;
