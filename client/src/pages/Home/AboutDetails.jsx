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
                "It all began when my brother and I noticed our sister, an MPPSC aspirant, spending her hard-earned money on newspapers. When we suggested switching to online newspapers, she, being less tech-savvy, found it difficult to access everything in one place. That’s when we decided to create a Telegram community to help students like her find newspapers easily.
                </p>
                <p className='title fontWeight300 mt-2'>
                As the community grew, we started sharing magazines, books, and other valuable resources. Eventually, with the little earnings we made, we decided to build a website to make things even more convenient. And here we are today!"
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






