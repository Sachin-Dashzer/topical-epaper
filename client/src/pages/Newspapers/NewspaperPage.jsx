

import React, { useState, useEffect } from 'react'
import ShortBanner from '../../components/ShortBanner'
import CallToAction from '../../assets/call-to-aciton.jpg'
import axios from 'axios'

const NewspaperPage = () => {

    const [newspaper, setNewspaper] = useState([])


    const getdata = async () => {

        try {

            const response = await axios.get('http://localhost:9000/admin/get-products', { withCredentials: true });
            setNewspaper(response?.data?.data)
            console.log(newspaper)
        }
        catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getdata()
    }, [])











    return (
        <>

            <ShortBanner name="Latest Newspaper" />


            <div className='w-100  px-3'>
                <div className="newspaperBox">
                    <div className="row">
                        <div className="col-lg-8 px-5 pt-4">


                            <div className="newspaperDetails p-4">
                                <h1 className="large_heading fontWeight800 text-primary">Topical Epaper</h1>

                                <div className="d-flex gap-5">
                                    <p className='mt-3 '><span className='fontWeight700 text-primary'>Published on : </span> &nbsp; 25-12-2024 </p>
                                    <p className='mt-3 '><span className='fontWeight700 text-primary'>Published by : </span> &nbsp; Admin</p>
                                </div>

                                <div className="newsImgBox shadow w-100 mt-4">
                                    <img src={CallToAction} alt="" className='w-100 h-100 object-fit-cover' />
                                </div>

                                <h3 className="small_heading fontWeight700 mt-5">
                                    Short Discription
                                </h3>

                                <p className='mt-3 text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti officia quos debitis consequatur iusto optio quia quo itaque porro dolorem nemo ab velit, vitae cupiditate tempore neque praesentium eos cum voluptate ea quas asperiores! Esse voluptatibus id rem velit eius accusantium voluptatem autem. Enim eius corporis aut dicta soluta recusandae earum veniam asperiores facere nihil blanditiis repellat, error amet doloremque? Quod temporibus natus placeat nulla unde repellat earum officiis?</p>
                                <p className='mt-3 text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti officia quos debitis consequatur iusto optio quia quo itaque porro dolorem nemo ab velit, vitae cupiditate tempore neque praesentium eos cum voluptate ea quas asperiores! Esse voluptatibus id rem velit eius accusantium voluptatem autem. Enim eius corporis aut dicta soluta recusandae earum veniam asperiores facere nihil blanditiis repellat, error amet doloremque? Quod temporibus natus placeat nulla unde repellat earum officiis?</p>

                                <a href="#" className="btnTheme mt-4"><span>Download Now</span></a>




                            </div>



                        </div>
                        <div className="col-lg-4 h-full p-5">

                            <div className='blockContainer w-full h-full'>
                                <h4 className="sub_heading text-center fontWeight700 mb-4" style={{ textDecoration: 'underline' }}>Related Uplaods</h4>

                                {
                                    newspaper.map((data, index) => {

                                        return (


                                            <a key={index} className='d-block' href="">

                                                <div className="smallBlock bg-light w-100 p-2 mt-4 shadow">
                                                    <div className="row">
                                                        <div className="col-lg-5 smallImgBlock">
                                                            <img src={data.fileUrl} alt="" className='object-fit-cover' />
                                                        </div>
                                                        <div className="col-lg-7 py-2 ">

                                                            <h3 className="title text-dark fontWeight700">
                                                                {data.title}
                                                            </h3>
                                                            <div>
                                                                <p className='mt-2 '><span className='fontWeight700 text-primary'>Published on : </span> &nbsp; {data.date} </p>
                                                                <p className=''><span className='fontWeight700 text-primary'>Published by : </span> &nbsp; Admin</p>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        )
                                    })

                                }



                            </div>

                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default NewspaperPage