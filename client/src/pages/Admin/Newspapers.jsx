import { useDispatch } from 'react-redux';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button,  Container } from "react-bootstrap";
// import { set } from 'mongoose';
import {deleteFile} from "../../store/fileStore/index.js"



function Newspapers() {
  const [newspaper, setNewspaper] = useState([]);
  const dispatch = useDispatch()


  const getdata = async ()=>{

    try{

      const response = await axios.get('http://localhost:9000/admin/get-products', { withCredentials: true });
      setNewspaper(response?.data?.data)
    }
    catch(error){
      console.log("erroe")
    }

  }

  useEffect(() => {
    
    getdata()
  
   
  }, [])
  
  const removeNewspaper = (id)=>{
    dispatch(deleteFile(id)).then((res)=>{

      getdata();
    })

  }


  return (
    <Container className="mt-2">



      <div className="">
        <div className="d-flex justify-content-between align-items-center my-5 mb-4">
          <h3 className="sub_heading fontWeight800 text-primary font-heading" style={{ textDecoration: "underline" }}>Newspapers Table</h3>
          <Button variant="dark" className="py-2">+ Add Newspaper</Button>
        </div>
        <Table responsive bordered hover >
          <thead>
            <tr >
              <th className="bg-primary py-3 text-white">S.No</th>
              <th className="bg-primary py-3 text-white">Name</th>
              <th className="bg-primary py-3 text-white">File No.</th>
              <th className="bg-primary py-3 text-white">FIle url</th>
              <th className="bg-primary py-3 text-white">Date</th>
              <th className="bg-primary py-3 text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {newspaper.map((newspaper , index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{newspaper.title}</td>
                <td>{newspaper._id}</td>
                <td><a href={newspaper.fileUrl} target='_blank'>{newspaper.fileUrl}</a></td>
                
                <td>{newspaper.date}</td>
                <td>
                  <Button variant="outline-dark" size="sm" className="me-2">
                    Update
                  </Button>
                  <Button variant="outline-dark" size="sm" onClick={() => removeNewspaper(newspaper._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default Newspapers;
