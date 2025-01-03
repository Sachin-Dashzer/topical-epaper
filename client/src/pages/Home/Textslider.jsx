import React from "react";

const testimonials = [
  {
    text: "This website has become my go-to for downloading daily newspapers. It's fast, reliable, and incredibly user-friendly. Highly recommend it to all newspaper enthusiasts!",
    author: "John Doe",
  },
  {
    text: "Five stars for amazing service and easy access to all the newspapers I need. The variety and regular updates are impressive, and the downloading process is seamless.",
    author: "Mike Johnson",
  },
  {
    text: "As someone who loves staying updated, this website has been a lifesaver! The interface is intuitive, and I can download my favorite newspapers in just a few clicks.",
    author: "Jane Smith",
  },
  {
    text: "The best platform for daily newspapers! I love the wide range of publications available and how quickly they are updated. A must-use for anyone who loves to stay informed.",
    author: "Emily Brown",
  },
  
];

const Textslider = () => {
  return (
    <section className="bg-light">
      <div className="container">
        <h1 className="text-center mb-md-5 mb-4 font-heading fontWeight700 text-primary ">Testimonials</h1>
        <h4 className="text-center mb-4  text-decoration-underline">Google</h4>

        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="d-flex justify-content-center">
                  <div className="w-75 text-center">
                    <p className="fs-5 fst-italic">"{testimonial.text}"</p>
                    <h5 className="mt-3 title font-heading fontWeight700">- {testimonial.author}</h5>
                  </div>
                </div>
              </div>
            ))}



            <button
              className="btnTheme me-2"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
            >
              <span><i className="fa-solid fa-angle-left"></i></span>
            </button>
            <button
              className="btnTheme ms-2"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              <span><i className="fa-solid fa-angle-right"></i></span>
            </button>



          </div>

          {/* <div className="testimonial-btns position-relative mt-4">

          {testimonials.map((index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}

        </div> */}


        </div>
      </div></section>
  );
};

export default Textslider;
