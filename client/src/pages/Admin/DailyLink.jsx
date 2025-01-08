import React, { useState } from 'react'
import axios from 'axios';
import Toaster from "../../components/ToasterMassage";


const DailyLink = () => {

    const [fileData, setFileData] = useState({

        date: '',
        firstName: "The Hindu",
        firstLink: "",
        secondLink: "",
        secondName: "Indian Express"
    })


    const [toasterData, setToasterData] = useState({
        show: false,
        success: false,
        message: "",
    });


    const showToaster = (success, message) => {
        setToasterData({ show: true, success, message });
        setTimeout(() => {
            setToasterData({ success, message, show: false });
        }, 2000);
    };







    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            // const response = await axios.post("https://pscupdates.com/admin/update-link", fileData);
            const response = await axios.post("http://localhost:9000/admin/update-link", fileData);

            console.log(response.data)

            if (response.data.success) {

                showToaster(true, response.data.message);
            }

        } catch (error) {
            console.error('Error uploading file:', error.message);
        }
    };



    const handleChange = (e) => {

        setFileData({
            ...fileData,
            [e.target.name]: e.target.value
        })
    }


    return (
        <>
            <Toaster
                success={toasterData.success}
                message={toasterData.message}
                show={toasterData.show}
                onClose={() => setToasterData({ ...toasterData, show: false })}
            />


            <section className='bg-light'>

                <div className="containerFull">
                    <div className="formbox mx-auto p-md-5 p-4 shadow">
                        <form onSubmit={handleSubmit}>

                            <h3 style={{ textDecoration: "underline" }} className="heading text-primary mb-4 mb-md-5 font-heading text-center ">Daily Newspapers</h3>

                            <div className="row">

                                <div className="mb-md-4 mb-3 col-lg-12">
                                    <label htmlFor="title" className="form-label ps-1 fontWeight700">Upload date</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="date"
                                        name="date"
                                        value={fileData.date}
                                        onChange={handleChange}
                                        required
                                        placeholder="Add date..."
                                    />
                                </div>
                                <label htmlFor="title" className="form-label px-3 fontWeight700">Button 1</label>
                                <div className="mb-md-4 mb-3 col-lg-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        name="firstName"
                                        value={fileData.firstName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Add Name..."
                                    />
                                </div>
                                <div className="mb-md-4 mb-3 col-lg-8">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstLink"
                                        name="firstLink"
                                        value={fileData.firstLink}
                                        onChange={handleChange}
                                        required
                                        placeholder="Add link..."
                                    />
                                </div>


                                <label htmlFor="title" className="form-label px-3 fontWeight700">Button 2 </label>

                                <div className="mb-md-4 mb-3 col-lg-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="secondName"
                                        name="secondName"
                                        value={fileData.secondName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Add Name..."
                                    />
                                </div>
                                <div className="mb-md-4 mb-3 col-lg-8">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="secondLink"
                                        name="secondLink"
                                        value={fileData.secondLink}
                                        onChange={handleChange}
                                        required
                                        placeholder="Add link..."
                                    />
                                </div>


                                <div className="px-md-3">
                                    <button type="submit" className="btn btn-primary  text mt-md-2">Submit</button>
                                </div>


                            </div>


                        </form>
                    </div>
                </div>
            </section>


        </>
    )
}

export default DailyLink