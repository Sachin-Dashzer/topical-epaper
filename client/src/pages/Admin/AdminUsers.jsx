import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../store/authStore/index.js";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [Active, setActive] = useState(false);

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





  // const [activeUser , setActiveUser] = useState('');


  const removeUser = (id) => {

    dispatch(deleteUser(id)).then(() => {
      getdata()
    })
  }




  return (

    <div className="containerFull">
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
                      <p className="card-text mb-1 "><span className="fontWeight700">Password : </span><span className={`${(Active) ? 'd-none' : "d-inline-block"}`}><input type="text" /></span><span className={`${(Active) ? 'd-inline-block' : "d-none"}`}>*********</span></p>
                      <Button onClick={() => changePassword(user._id)} className="me-3 mt-2">Update</Button>
                      <Button onClick={() => removeUser(user._id)} className="me-2 mt-2">Remove</Button>
                    </div>
                  </div>
                </div>
              )
            })
          }
          <div className="col-lg-4 p-3">
            <div className="card shadow">
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
