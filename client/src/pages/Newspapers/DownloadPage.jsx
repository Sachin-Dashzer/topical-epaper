import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getFiles } from '../../store/fileStore';
import { Button } from 'react-bootstrap';


const DownloadPage = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [active, setActive] = useState(1)

    const [Url, setUrl] = useState("")



    const Id = location.state?.id || null;

    if(Id === null){
        navigate("/error")
    }



    const handleClick = () => {

        setActive((active) => active +1)

        setTimeout(() => {
            setActive((active) => active +1)
        }, 6000);
    }


    const DownloadClick = () => {
        window.open(Url, '_blank');
        setActive(1)
        navigate("/news")
    }


    const getData = () => {
        dispatch(getFiles()).then((res) => {
            const data = res?.payload?.data;

            data.filter((item) => {
                if (item._id === Id) {

                    setUrl(item.fileUrl)


                }
            })

        })
    }


    useEffect(() => {
        getData();
    }, []);


    return (
        <>


            <section>
                <div className="containerFull pt-4">
                    <div className="m-md-5 pt-md-2">
                        <div className="DownloadNewBox text-center bg-light mx-auto p-5 px-1 px-md-5 rounded-3 shadow">
                            <h1 style={{ color: "blue" }} className='large_heading font-heading fontWeight700'>Thanks for your support and patience</h1>
                            <div className={`${(active != 1) ? "d-none" : "d-block"}`}>
                                <h3 style={{ letterSpacing: "3px" }} className="small_heading fontWeight400 mt-md-5 mt-4">Click here to generate download link.... </h3>
                                <Button className={`my-4 px-4 py-2`} onClick={handleClick}> Download Link</Button>
                            </div>
                            <div className={`${(active != 2) ? "d-none" : "d-block"}`}>
                                <h3 style={{ letterSpacing: "3px" }} className="small_heading fontWeight400 mt-md-5 mt-4">Generating file download link.... </h3>
                                <div className="dot-spinner mx-auto my-5">
                                    <div className="dot-spinner__dot"></div>
                                    <div className="dot-spinner__dot"></div>
                                    <div className="dot-spinner__dot"></div>
                                    <div className="dot-spinner__dot"></div>
                                    <div className="dot-spinner__dot"></div>
                                    <div className="dot-spinner__dot"></div>
                                    <div className="dot-spinner__dot"></div>
                                    <div className="dot-spinner__dot"></div>
                                </div>
                            </div>

                            <div className={`${(active != 3) ? "d-none" : "d-block"}`}>
                                <h3 style={{ letterSpacing: "3px" }} className="small_heading fontWeight400 mt-md-5 mt-4">Click here to download file.... </h3>
                                <Button className={`my-4 px-4 py-2`} onClick={DownloadClick}> Download Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default DownloadPage