import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { registerFile } from '../../store/fileStore/index.js';
import { useNavigate } from "react-router-dom";
import Toaster from "../../components/ToasterMassage";

const Dashboard = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const initialNewsData = {
    title: '',
    description: 'Our daily newspaper is your reliable source for staying informed about the latest happenings from around the world. Every edition is thoughtfully curated to bring you important headlines, in-depth stories, and detailed insights into current events, politics, business, sports, entertainment, and more. With a focus on accuracy and relevance, we strive to provide readers with a comprehensive view of the news that matters most. Whether you are catching up on global developments, exploring local stories, or diving into special features, our newspaper is designed to keep you updated, engaged, and inspired every single day.',
    author: 'Admin',
    category: 'newspaper',
    imgUrl: 'https://api.pscupdates.com/files/1735555895528.jpg',
    fileUrl: '',
    date: '',
  };

  const [fileData, setfileData] = useState(initialNewsData);
  const [toasterData, setToasterData] = useState({
    show: false,
    success: false,
    message: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showToaster = (success, message) => {
    setToasterData({ show: true, success, message });
    setTimeout(() => {
      setToasterData({ success, message, show: false });
    }, 2000);
  };

  const handleChange = (event) => {
    setfileData({
      ...fileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageUpload = async (selectedFile) => {
    if (!selectedFile) return;
    setLoading(true);
    const data = new FormData();
    data.append("file", selectedFile);

    try {
      const response = await axios.post("https://api.pscupdates.com/admin/upload", data);
      // const response = await axios.post("http://localhost:9000/admin/upload", data);

      if (response?.data?.fileUrl) {
        setfileData((prevData) => ({
          ...prevData,
          imgUrl: response.data.fileUrl,
        }));
        showToaster(true, "Image uploaded successfully!");
      } else {
        setError("Image upload failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred during image upload.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (selectedFile) => {
    if (!selectedFile) return;
    setLoading(true);
    const data = new FormData();
    data.append("file", selectedFile);

    try {
      const response = await axios.post("https://api.pscupdates.com/admin/upload", data);
      // const response = await axios.post("http://localhost:9000/admin/upload", data);

      if (response?.data?.fileUrl) {
        setfileData((prevData) => ({
          ...prevData,
          fileUrl: response.data.fileUrl,
        }));
        showToaster(true, "File uploaded successfully!");
      } else {
        setError("File upload failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred during file upload.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) handleImageUpload(droppedFile);
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) handleFileUpload(droppedFile);
  };

  const handleImageBrowse = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) handleImageUpload(selectedFile);
  };

  const handleFileBrowse = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) handleFileUpload(selectedFile);
  };

  const submitDetails = (event) => {
    event.preventDefault();
    dispatch(registerFile(fileData)).then((res) => {
      if (res.payload.success) {
        showToaster(true, res.payload.massage);
        setTimeout(() => {
          navigate("/admin/newspapers");
        }, 1000);
      } else {
        showToaster(false, res.payload.massage || "Something went wrong");
      }
    });
  };

  return (
    <>
      <Toaster
        success={toasterData.success}
        message={toasterData.message}
        show={toasterData.show}
        onClose={() => setToasterData({ ...toasterData, show: false })}
      />

      <div className="newspaperForm w-100 h-100 bg-light mt-md-5 mt-4">
        <div className="container row">
          <div className="col-lg-10 newspaperNew mx-auto bg-white p-md-5 ps-4 pb-5 pt-4 shadow rounded-3">
            <h2
              className="heading newHeading fontWeight700 font-heading text-primary text-center mb-md-5 mb-4"
              style={{ textDecoration: "underline" }}
            >
              Add Newspaper
            </h2>

            <form onSubmit={submitDetails}>
              <div className="row">
                <div className="mb-md-4 mb-3 col-lg-6">
                  <label htmlFor="title" className="form-label ps-1 fontWeight700">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={fileData.title}
                    onChange={handleChange}
                    required
                    placeholder="Add Title"
                  />
                </div>
                <div className="mb-md-4 mb-3 col-lg-6">
                  <label htmlFor="date" className="form-label ps-1 fontWeight700">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    value={fileData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-md-4 mb-3">
                <label htmlFor="description" className="form-label ps-1 fontWeight700">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={fileData.description}
                  onChange={handleChange}
                  required
                  placeholder="Write the description here..."
                />
              </div>

              <div className="row">
                <div className="mb-3 col-lg-6 position-relative">
                  <label htmlFor="category" className="form-label ps-1 fontWeight700">Category</label>
                  <select
                    className="form-control dropdown-with-icon"
                    id="category"
                    name="category"
                    value={fileData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="newspaper">Newspaper</option>
                    <option value="others">Others</option>
                  </select>
                  <span className="dropdown-icon">
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </div>
                <div className="mb-3 col-lg-6">
                  <label htmlFor="author" className="form-label ps-1 fontWeight700">Author</label>
                  <input
                    type="text"
                    className="form-control"
                    id="author"
                    placeholder="Write the name..."
                    name="author"
                    value={fileData.author}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <p className="text mt-2 mb-2 ps-1 fontWeight700">Upload Img</p>
              <div
               className="uploadImgNew"
                onDragOver={(event) => event.preventDefault()}
                onDrop={handleImageDrop}
              >
                <h4 className="small_heading fontWeight700">Drag & Drop Your Image Here</h4>
                <p className="py-2 pt-1 title">or</p>
                <label>
                  Browse
                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    style={{ opacity: "0", width: "10px" }}
                    onChange={handleImageBrowse}
                  />
                </label>
                {loading && <p>Uploading...</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
                {fileData.imgUrl && <p>Image uploaded successfully! ({fileData.imgUrl})</p>}
              </div>

              <p className="text mt-4 mb-2 ps-1 fontWeight700">Upload File</p>
              <div
               className="uploadImgNew"
               onDragOver={(event) => event.preventDefault()}
                onDrop={handleFileDrop}
              >
                <h4 className="small_heading fontWeight700">Drag & Drop Your File Here</h4>
                <p className="py-2 pt-1 title">or</p>
                <label>
                  Browse
                  <input
                    type="file"
                    name="file"
                    style={{ opacity: "0", width: "10px" }}
                    onChange={handleFileBrowse}
                    required
                  />
                </label>
                {loading && <p>Uploading...</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
                {fileData.fileUrl && <p>File uploaded successfully!

                  ({fileData.fileUrl})</p>} </div>


              <div className="mt-4">
                <Button type="submit" className="btn btn-primary px-4 py-2">Submit Details</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};



export default Dashboard;