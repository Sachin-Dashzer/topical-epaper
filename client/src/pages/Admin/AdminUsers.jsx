import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../../store/authStore/index.js";
import { useNavigate } from "react-router-dom";

function AdminUsers() {


  const password = {
    id: '',
    password: ''
  }


  const [users, setUsers] = useState([]);
  const [Active, setActive] = useState('');
  const [pass, setPass] = useState(password);
  const navigate = useNavigate()

  const dispatch = useDispatch();


  const getdata = async () => {

    try {

      const response = await axios.get('http://localhost:9000/auth/all-users', { withCredentials: true });
      setUsers(response.data.data)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    getdata()


  }, [])


  const removeUser = (id) => {

    dispatch(deleteUser(id)).then(() => {
      getdata()
    })
  }

  const navigateUser = () => {
    navigate(`/admin/add-adminusers`)
  }

  const handleChange = (event) => {

    event.preventDefault()


    setPass({
      id: Active,
      password: event.target.value
    })


  }

  const changePassword = (event) => {
    event.preventDefault()
    dispatch(updateUser(pass)).then((res) => {
      if (res.payload.success === true) {
        setActive('')
        setPass({
          id: '',
          password: '',
        });

      }
      console.log(res)
    })

  }


  return (

    <div className="containerFull">

      <div className="container d-flex align-items-center justify-content-between">
        <h3 className="large_heading fontWeight700 mb-4 mt-5 font-heading text-primary" style={{ textDecoration: "underline" }}>Admin users</h3>
        <Button onClick={navigateUser} className="bg-dark py-2 px-3 mt-5">+ Add Users</Button>
      </div>

      <div className="adminBox">
        <div className="row">
          {
            users.map((user, index) => {
              return (
                <div className="col-lg-4 p-3 " key={index}>
                  <div className="card shadow">
                    <div className="card-body">
                      <h5 className="card-title fontWeight700 small_heading">{user.userName}</h5>
                      <p className="card-text"><span className="fontWeight700">Email : </span>{user.email}</p>
                      <div className={`${(Active != user._id) ? "d-block" : "d-none"}`}>
                        <p className="card-text mb-1 mt-2"><span className="fontWeight700">Password : </span>*********</p>
                        <Button onClick={(Active) => setActive(user._id)} className="me-3 mt-2">Update Password</Button>
                        <Button onClick={() => removeUser(user._id)} className="me-2 mt-2">Remove</Button>
                      </div>
                      <form onSubmit={changePassword} className={`${(Active == user._id) ? "d-block" : "d-none"}`}>
                        <p className="card-text mb-1 mt-2"><span className="fontWeight700">Password : </span><input type="text" name="password" value={pass.password} onChange={handleChange} /></p>
                        <Button type="submit" onClick={() => setActive(user._id)} className="me-3 mt-2" >Submit Password</Button>
                        <Button onClick={() => removeUser(user._id)} className="me-2 mt-2">Remove</Button>

                      </form>


                    </div>
                  </div>
                </div>
              )
            })
          }
          <div className="col-lg-4 p-3">
            <div className="card shadow" onClick={navigateUser}>
              <div className="card-body d-flex align-items-center addCard">
                <h1>+</h1>
                <h2 className="title fontWeigh300">Add User</h2>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

export default AdminUsers;
