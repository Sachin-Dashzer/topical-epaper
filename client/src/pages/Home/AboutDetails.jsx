import React from 'react'
import About1 from '../../assets/about-1.webp'
import About2 from '../../assets/about-2.webp'
import About3 from '../../assets/about-3.webp'


const AboutDetails = () => {
  return (
    <>

      <section className='bg-light pt-md-5 AboutContainer'>
        <div className="containerFull overflow-hidden">
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
                <a href="/contact" className='btnTheme py-2 mt-3'><span>Contact us</span></a>
              </div>

            </div>


            <div className="col-lg-6 mt-3 mt-md-0">

              <div className=" aboutImg w-100 h-100">
                <div>
                  <figure>
                    <img
                      src={About1}
                      loading="lazy"
                      alt="events"
                      className="img-fluid rounded-3 shadow"
                    />
                  </figure>
                  <figure className='pt-md-0'>
                    <img
                      src={About3}
                      loading="lazy"
                      alt="events"
                      className="img-fluid rounded-3 shadow"
                    />
                  </figure>
                </div>
                <div>
                  <figure className='h-100 py-0'>
                    <img
                      src={About2}
                      loading="lazy"
                      alt="events"
                      className="img-fluid rounded-3 shadow"
                    />
                  </figure>
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






