import React, { useState , useEffect } from 'react'
import ShortBanner from '../../components/ShortBanner'
import UpdateImg from '../../assets/newspapers.jpg'
import axios from 'axios'

const Updates = () => {


    const [newspaper, setNewspaper] = useState([])


    const getdata = async () => {

        try {

            const response = await axios.get('http://localhost:9000/admin/get-products', { withCredentials: true });
            setNewspaper(response?.data?.data)
        }
        catch (error) {
            console.log("erroe")
        }

    }

    useEffect(() => {
        getdata()
    }, [])









    return (
        <>

            <ShortBanner name="New Updates" />


            <section className="updates">
                <div className="containerFull">

                    {newspaper.filter((data) => data.category === 'others')
                        .map((item, index) => {
                            return (


                                <div key={index} className="updateBox mb-5">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="updateImg">
                                                <img src={item.imgUrl} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="updateContent mt-3 mt-md-0">
                                                <h3 className="large_heading text-capital fontWeight700">{item.title}</h3>
                                                <p className='text text-center mt-3 fontWeight400'>{item.description}</p>
                                                <a href='#' className='btnTheme text-white py-2 px-4 text px-1 mt-4 mx-auto'><span>Download Now</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            )
                        })
                    }


                </div>
            </section>



        </>
    )
}

export default Updates