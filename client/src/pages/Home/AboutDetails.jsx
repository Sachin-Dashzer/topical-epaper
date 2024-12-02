import React from 'react'
import About1 from '../../assets/about-1.jpg'
import About2 from '../../assets/about-2.jpg'
import About3 from '../../assets/about-3.jpg'

const AboutDetails = () => {
  return (
    <>

      <section className='bg-light pt-md-5 AboutContainer'>
        <div className="containerFull">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <div className="mb-3 py-md-5 pe-md-5">
                <h2 className="mb-2 font-heading heading fontWeight700">
                  Welcome to ,{' '}
                  <span className="text-primary">Topical Newspapers</span> <br /> your one-stop destination for{' '}
                  <span className="text-primary">daily newspapers!</span>
                </h2>
                <p className='title fontWeight300'>
                  We bring you a wide variety of newspapers—local, national, and international—updated daily, so you never miss a headline. Whether you’re passionate about current events or simply enjoy the charm of a good read, our platform offers a seamless and accessible experience.
                </p>
                <p className='title fontWeight300 mt-2'>
                  With a focus on simplicity and diversity, we aim to keep you informed, connected, and inspired—all in one place. Join us and rediscover the joy of reading newspapers, reimagined for the digital age!
                </p>
                <a href="#" className='btnTheme py-2 mt-3'><span>Contact us</span></a>
              </div>

            </div>


            <div className="col-lg-6 mt-3 mt-md-0">

              <div className=" aboutImg w-100 h-100">
                <div>
                  <figure>
                    <img
                      src={About1}
                      alt="events"
                      className="img-fluid rounded-3 shadow"
                    />
                  </figure>
                  <figure className='pt-md-0'>
                    <img
                      src={About3}
                      alt="events"
                      className="img-fluid rounded-3 shadow"
                    />
                  </figure>
                </div>
                <div>
                  <figure className='h-100 py-0'>
                    <img
                      src={About2}
                      alt="events"
                      className="img-fluid rounded-3 shadow"
                    />
                  </figure>
                </div>
              </div>






            </div>
          </div>
        </div>




        <div className='mt-4'>
          <div className="containerFull">
            <div className="row border-top border-bottom border-danger AboutSections">
              <div className="col-md-4 p-md-5 px-4 border-end border-danger">
                <div className="text-center p-4">
                  <div className="mb-md-4 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="currentColor"
                      className="bi bi-people-fill text-primary"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    </svg>
                  </div>
                  <h4><span>3M+</span> Active users</h4>
                  <p className="mb-0 mt-2">Vivamus eget neque lacus. Pellentesque egauris ex.</p>
                </div>
              </div>
              <div className="col-md-4 p-md-5 px-4 border-end border-danger">
                <div className="text-center p-4">
                  <div className="mb-md-4 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="currentColor"
                      className="bi bi-trophy-fill text-primary"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" />
                    </svg>
                  </div>
                  <h4><span>95%</span> User Satisfaction</h4>
                  <p className="mb-0 mt-2">Lorem ipsum, dolor sit amet consectetur elitorceat.</p>
                </div>
              </div>
              <div className="col-md-4 p-md-5 px-4">
                <div className="text-center p-4">
                  <div className="mb-md-4 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="currentColor"
                      className="bi bi-stars text-primary"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.02 2.31l.387-1.162zM10.863.1a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
                    </svg>
                  </div>
                  <h4>10 Year Exp.</h4>
                  <p className="mb-0 mt-2">Pellen tesque eget, mauris lorem iupsum neque lacus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>


  )
}

export default AboutDetails






