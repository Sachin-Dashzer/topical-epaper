import React from 'react'
import secondnews from "../../assets/secondnews.jpg";
import ThirdIMG from "../../assets/ThirdIMG.jpg";
import ShortBanner from '../../components/ShortBanner';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';






const LinkGenerate = () => {

    const [Active, setActive] = useState(false)

    const location = useLocation();
    // const navigate = useNavigate();

    const id = location.state?.id || null;



    console.log(id)







    return (
        <>

            <ShortBanner name="Topical Epaper" />


            <section>
                <div className='containerFull'>

                    <div className='downloadBox text-center pb-4'>

                        <p className='small_heading fontWeight400'>Click here to generate Link</p>

                        <Button className='py-2 px-5 mt-2'>{(Active) ? "Generate Link" : "Scroll down and get link"}</Button>
                    </div>



                    <div className="row mt-5">

                        <div className="col-sm-6">
                            <h5 className=' heading fontWeight700 p-2 mb-1'>What is Topical E-paper</h5>
                            <p className='text p-2'>Topical E-paper signifies a type of electronic paper (E-paper) technology tailored for uses where displays convey information pertinent to specific topics or contexts, including news, ads, signage, or interactive displays. In contrast to conventional paper, E-paper simulates the look of standard ink on a sheet, providing excellent readability in different lighting situations, even in strong sunlight. This technology requires little energy as it only uses power when the display content alters, resulting in high efficiency for devices such as e-readers, price labels, or outdoor signs. Topical E-paper solutions frequently connect with real-time data systems, allowing for immediate and smooth updates that reflect current information. Its adaptability, resilience, and minimal energy demands render it a sustainable option compared to printed materials and various digital displays, fulfilling the preferences of environmentally aware consumers and entities.
                                providing excellent readability in different lighting situations, even in strong sunlight.</p>
                        </div>

                        <div className="col-sm-6 ps-md-5 mt-4 mt-md-0 ">
                            <div className="shadow rounded-3 overflow-hidden">
                                <img className='w-100 h-100' src={secondnews} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <div style={{ backgroundColor: "#b2d94c" }}>
                <div className="containerFull">
                    <div className="row p-5 ">

                        <div className="col-md-6 mb-4 mb-md-0">
                            <h1 className="">Get Our Latest Offers & News</h1>
                            <h1 className="title mt-2">Join us for a better approach</h1>
                        </div>
                        <div className='col-md-6  px-md-5 text-center'>


                            <p className="fs-5">Subscribe to our newsletter.</p>
                            <div className=" mt-3 d-flex flex-row align-items-end " style={{ justifyContent: "flex-end" }}>
                                <input
                                    className="form-control border rounded-start py-2 mb-md-0 w-md-50"
                                    type="email"
                                    placeholder="Email here"
                                />
                                <button className="btn text btn-white text-dark bg-primary border rounded-end px-md-4">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="containerFull">
                    <h2 style={{ textDecoration: "underline" }} className="heading fontWeight700 text-primary text-center">What makes us different...</h2>
                    <div className="row mt-5 mb-4">

                        <div className="col-lg-6 px-4">
                            <div className="p-5 rounded-3 bg-light">
                                <h6 className="fw-bold title mb-3">Topical E-Paper: Revolutionizing Display Technology</h6>
                                <p className='text'>
                                    Topical E-paper signifies a type of electronic paper (E-paper) technology tailored
                                    for uses where displays convey information pertinent to specific topics or
                                    contexts, including news, ads, signage, or interactive displays. In contrast to
                                    conventional paper, E-paper simulates the look of standard ink on a sheet,
                                    providing excellent readability in different lighting situations, even in strong
                                    sunlight. This technology requires little energy as it only uses power when the
                                    display content alters, resulting in high efficiency for devices such as e-readers,
                                    price labels, or outdoor signs. Topical E-paper.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 px-4">
                            <div className="p-5 rounded-3 bg-light">
                                <h6 className="fw-bold title mb-3">What is Topical E-paper</h6>
                                <p className='text'>
                                    Topical E-paper signifies a type of electronic paper (E-paper) technology tailored
                                    for uses where displays convey information pertinent to specific topics or
                                    contexts, including news, ads, signage, or interactive displays. In contrast to
                                    conventional paper, E-paper simulates the look of standard ink on a sheet,
                                    providing excellent readability in different lighting situations, even in strong
                                    sunlight. This technology requires little energy as it only uses power when the
                                    display content alters, resulting in high efficiency for devices such as e-readers,
                                    price labels, or outdoor signs. Topical E-paper.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className=' bg-light'>
                <div className="containerFull">
                    <div className="row">


                        <div className="col-sm-6 pe-5 ">
                            <div className="shadow rounded-3 overflow-hidden">
                                <img className='w-100 h-100' src={ThirdIMG} alt="" />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <h5 className='heading mb-1'>What is Topical E-paper</h5>
                            <p className='text mt-3'>Topical E-paper signifies a type of electronic paper (E-paper) technology tailored for uses where displays convey information pertinent to specific topics or contexts, including news, ads, signage, or interactive displays. In contrast to conventional paper, E-paper simulates the look of standard ink on a sheet, providing excellent readability in different lighting situations, even in strong sunlight. This technology requires little energy as it only uses power when the display content alters, resulting in high efficiency for devices such as e-readers, price labels, or outdoor signs. </p>
                            <p className='mt-2 text'> Topical E-paper solutions frequently connect with real-time data systems, allowing for immediate and smooth updates that reflect current information.only uses power when the display content alters, resulting in high efficiency for devices such as e-readers, price labels, or outdoor signs. Topical E-paper solutions frequently connect with real-time data systems, allowing for immediate and smooth updates that reflect current information. Its adaptability.</p>
                        </div>

                    </div>

                </div>
            </section>




        </>
    )
}

export default LinkGenerate