import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { getFiles } from '../../store/fileStore';
import axios from 'axios';



const LatestUploads = () => {

    const [newspaper, setNewspaper] = useState([]);
    const [link, setLink] = useState([]);

    const dispatch = useDispatch()


    const getLink = async () => {



        try {

            const response = await axios.get('https://api.pscupdates.com/admin/get-link', { withCredentials: true });
            // const response = await axios.get('http://localhost:9000/admin/get-link', { withCredentials: true });
            setLink(response.data.data[0])
        }
        catch (error) {
            console.log(error)
        }
    }



    const getdata = async () => {

        dispatch(getFiles()).then((res) => {
            setNewspaper(res?.payload?.data)
        })
    }


    useEffect(() => {
        getdata()
        getLink()
    }, [])




    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };





    return (
        <>

            <section className='overflow-hidden'>

                <div className="containerFull">
                    <h1 style={{ textDecoration: "underline" }} className="heading font-heading text-primary ms-3 fontWeight700">Recently uploaded</h1>
                    <div className="slider-container mt-4 mt-md-5">
                        <Slider {...settings}>
                            {newspaper.length > 0 ? (
                                newspaper
                                    .filter((data) => data.category === "newspaper")
                                    .slice(0, 12)
                                    .map((item, index) => (
                                        <div key={index} className="w-100 px-3 pb-md-4 pb-3" data-aos="flip-right">
                                            <div className="sliderItems shadow">
                                                <div className="uploadsBox">
                                                    <div className="uploadImg">
                                                        <img src={item.imgUrl} loading="lazy" alt={item.title} />
                                                    </div>
                                                    <div className="uploadsDate">
                                                        <h3 className="title fontWeight700 text-capital text-center">{item.title}</h3>
                                                        <p className="mt-1 text-secondary fontWeight700 text-center">( {item.date} )</p>
                                                        <a href={`/download/${item._id}`} className="mt-md-3 mt-2 text-white">
                                                            Download <span><i className="fa-solid fa-download"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                            ) : (

                                <>
                                    <div className="w-100 px-3 pb-md-4 pb-3" data-aos="flip-right">
                                        <div className="sliderItems shadow">
                                            <div className="uploadsBox">
                                                <div className="uploadImg">
                                                    <img src="/path-to-placeholder-image.webp" loading="lazy" alt="No Newspaper Available" />
                                                </div>
                                                <div className="uploadsDate">
                                                    <h3 className="title fontWeight700 text-capital text-center">No Newspaper Available</h3>
                                                    <p className="mt-1 text-secondary fontWeight700 text-center">(N/A)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-100 px-3 pb-md-4 pb-3" data-aos="flip-right">
                                        <div className="sliderItems shadow">
                                            <div className="uploadsBox">
                                                <div className="uploadImg">
                                                    <img src="/path-to-placeholder-image.webp" loading="lazy" alt="No Newspaper Available" />
                                                </div>
                                                <div className="uploadsDate">
                                                    <h3 className="title fontWeight700 text-capital text-center">No Newspaper Available</h3>
                                                    <p className="mt-1 text-secondary fontWeight700 text-center">(N/A)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            )}
                        </Slider>
                    </div>






                </div >

                <div className="container text-center activeLinkBox">

                    <h3 className="heading fontWeight700">{link?.date || "01 Jan 2025"}</h3>

                    <a href={link?.firstLink} className='text-white py-3 w-100 bg-blue my-md-4 mt-4'>{link?.firstBtn || "The Hindu"}</a>
                    <a href={link?.secondLink} className='text-white py-3 w-100 bg-blue mt-md-2 mt-3'>{link?.secondBtn || "Indian Express"}</a>

                </div>

            </section >


        </>
    )
}

export default LatestUploads