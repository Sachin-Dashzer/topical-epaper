import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const Dashboard = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const newsData =
  {
    title: '',
    description: '',
    fileUrl: '',
    type: '',
  }

  const [fileData, setfileData] = useState(newsData)

  const handleChange = (event) => {

    event.preventDefault()

    setfileData({
      ...fileData,
      [event.target.name]: event.target.value
    })

  }
  console.log(fileData)


  const handleFile = (selectedFile) => {
    setFile(selectedFile);
    uploadImageToBackend(selectedFile);
  };


  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      handleFile(droppedFile);
    }
  };


  const handleBrowse = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      handleFile(selectedFile);
    }
  };


  async function uploadImageToBackend(selectedFile) {
    if (!selectedFile) return;
    setLoading(true);
    const data = new FormData();
    data.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:9000/admin/upload",
        data
      );
      console.log(response, "response");

      if (response?.data?.fileUrl) {
        setfileData({
          ...fileData,
          fileUrl: response.data.fileUrl
        })
        console.log(response.data.fileUrl, "response.data.fileUrl");
      } else {
        setError("Upload failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred during the upload.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>

      <div className="newspaperForm w-100 h-100 bg-light mt-4">


        <div className="container row">



          <div className=" col-lg-10 mx-auto  bg-white p-5 pt-4 shadow rounded-3">
            <h2 className="sub_heading font-heading text-primary text-center mb-5">Add Newpaper</h2>

            <form>


              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" value={fileData.title} onChange={handleChange} required />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" id="description" name="description" value={fileData.description} onChange={handleChange} required />
              </div>




              <p className="text mt-3 mb-2">Upload File</p>

              <div
                style={{
                  width: "100%",
                  border: "2px dashed #ccc",
                  borderRadius: "10px",
                  padding: "60px",
                  textAlign: "center",
                  cursor: "pointer",
                  backgroundColor: "#ffffff",
                }}
                onDragOver={(event) => event.preventDefault()}
                onDrop={handleDrop}
              >
                <h4 className=" small_heading fontWeight700">Drag & Drop Your File Here</h4>
                <p className="py-2 pt-1 title">or</p>
                <label
                  style={{
                    display: "inline-block",
                    padding: "8px 30px",
                    backgroundColor: "black",
                    color: "#fff",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "15px",
                    textAlign : "center"
                  }}
                >
                  Browse
                  <input
                    type="file"
                    name = "file"
                    style={{ opacity : "0" , width : "10px" }}
                    onChange={handleBrowse}
                    required
                  />
                </label>


                {loading && <p>Uploading...</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}

                {fileData.fileUrl && (
                  <div style={{ marginTop: "20px" }}>
                    <p>File uploaded successfully! ({file ? (
                      <span className="fontWeight700"> {file.name} </span>
                    ) : (
                      <p>No file selected</p>
                    )})</p>

                  </div>
                )}
              </div>
              <Button type="submit" className="bg-dark px-3 py-2 mt-4 ">Submit file</Button>

            </form>

          </div>
        </div>


      </div>

    </>
  );
};

export default Dashboard;
