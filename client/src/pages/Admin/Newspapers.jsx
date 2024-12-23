import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container } from "react-bootstrap";
import { deleteFile } from "../../store/fileStore/index.js"
import Toaster from "../../components/ToasterMassage.jsx";


function Newspapers() {
  const [newspaper, setNewspaper] = useState([]);
  const dispatch = useDispatch()
  const navigate = useNavigate();



  const [toasterData, setToasterData] = useState({
    show: false,
    success: false,
    message: "",
  });

  const showToaster = (success, message) => {
    setToasterData({ show: true, success, message });

    setTimeout(() => {
      setToasterData({ success: success, message: message, show: false });
    }, 2000);
  };




  const getdata = async () => {

    try {

      const response = await axios.get('http://localhost:9000/admin/get-products', { withCredentials: true });
      setNewspaper(response?.data?.data)

    }
    catch (error) {
      console.log("error")
    }

  }

  useEffect(() => {

    getdata()


  }, [])

  const removeNewspaper = (id) => {
    dispatch(deleteFile(id)).then((res) => {

      if (res.payload.success === true) {
        showToaster(true, res.payload.massage)
        getdata()
      }
      else {
        showToaster(false, res.payload.massage)
      }


    })

  }


  const handleDownload = (url) => {
    const fileUrl = url;
    const fileName = "newspaper-file.pdf"; // Replace with the desired file name

    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.target = "_blank";
    anchor.download = fileName;
    anchor.click();
  };




  const navigateUser = () => {
    navigate(`/admin/add-newspaper`)
  }


  return (

    <>

      <Toaster
        success={toasterData.success}
        message={toasterData.message}
        show={toasterData.show}
        onClose={() => setToasterData({ ...toasterData, show: false })}
      />



      <Container>
        <div className="">
          <div className="d-flex justify-content-between align-items-center my-5 mb-4">
            <h3 className="sub_headingn newHeading fontWeight800 text-primary font-heading" style={{ textDecoration: "underline" }}>Newspapers Table</h3>
            <Button onClick={navigateUser} variant="dark" className="py-2 newBtns">+ Add Newspaper</Button>
          </div>

          <div className="table-responsive">
            <Table responsive bordered hover className="table-sm">
              <thead>
                <tr>
                  <th className="bg-primary py-3 text-white text-center">S.No</th>
                  <th className="bg-primary py-3 text-white">Title</th>
                  <th className="bg-primary py-3 text-white">Category</th>
                  <th className="bg-primary py-3 text-white">Author</th>
                  <th className="bg-primary py-3 text-white">Img Url</th>
                  <th className="bg-primary py-3 text-white">File Url</th>
                  <th className="bg-primary py-3 text-white">Date</th>
                  <th className="bg-primary py-3 text-white text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {newspaper.map((newspaper, index) => (
                  <tr key={index}>
                    <td className="text-center">{index + 1}</td>
                    <td>{newspaper.title}</td>
                    <td>{newspaper.category}</td>
                    <td>{newspaper.author}</td>
                    <td>
                      <a href={newspaper.imgUrl} target="_blank" rel="noopener noreferrer">
                        View
                      </a>
                    </td>
                    <td>
                      <a href={newspaper.fileUrl} target="_blank" rel="noopener noreferrer">
                        Download
                      </a>
                    </td>
                    <td>{newspaper.date}</td>
                    <td className="text-center">
                      <div className="d-flex flex-column flex-sm-row justify-content-center">
                        <Button
                          onClick={() => handleDownload(newspaper.fileUrl)}
                          variant="outline-dark"
                          size="sm"
                          className="mb-2 mb-sm-0 me-sm-2"
                        >
                          View
                        </Button>
                        <Button
                          variant="outline-dark"
                          size="sm"
                          onClick={() => removeNewspaper(newspaper._id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>



        </div>
      </Container>


    </>


  );
}

export default Newspapers;
