import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { getFiles } from '../../store/fileStore';



const LatestUploads = () => {

    const [newspaper, setNewspaper] = useState([]);

    const dispatch = useDispatch()



    const getdata = async () => {

        dispatch(getFiles()).then((res) => {
            setNewspaper(res?.payload?.data)
        })
    }


    useEffect(() => {
        getdata()
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
                            {newspaper.filter((data) => data.category === 'newspaper')
                            .slice(0, 12)
                            .map((item, index) => {
                                    return (

                                        <div key={index} className="w-100 px-3 pb-md-4 pb-3" data-aos="flip-right">
                                            <div className="sliderItems shadow">
                                                <div className="uploadsBox">
                                                    <div className="uploadImg">
                                                        <img src={item.imgUrl} loading="lazy" alt="" />
                                                    </div>
                                                    <div className="uploadsDate">
                                                        <h3 className="title fontWeight700 text-capital text-center">{item.title}</h3>
                                                        <p className="mt-1 text-secondary fontWeight700 text-center">( {item.date} )</p>
                                                        {/* <a href={`/news/${item._id}`}
                                                            className="mt-md-3 mt-2 text-white">
                                                            View &nbsp; <span><i className="fa-solid fa-eye"></i></span>
                                                        </a> */}
                                                        <a href={`/download/${item._id}`} className="mt-md-3 mt-2 text-white">
                                                            Download <span><i className="fa-solid fa-download"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                        </Slider>
                    </div>






                </div>

                <div className="container text-center activeLinkBox">

                    <h3 className="heading fontWeight700">6th january 2025</h3>

                    <button className='py-2 w-100 bg-blue my-md-4 mt-4'>The Hindu</button>
                    <button className='py-2 w-100 bg-blue mt-md-2 mt-3'>Indian Express</button>

                </div>

            </section>


        </>
    )
}

export default LatestUploads