import React from "react";

const testimonials = [
  {
    text: "Success is not Final , Failure is not Fatal ,  It is the Courage to ,Continue that counts",
    author: "John Doe",
  },
  {
    text: "Success is not Final , Failure is not Fatal ,  It is the Courage to ,Continue that counts",
    author: "Mike Johnson",
  },
  {
    text: "Success is not Final , Failure is not Fatal ,  It is the Courage to ,Continue that counts",
    author: "Jane Smith",
  },
  {
    text: "Success is not Final , Failure is not Fatal ,  It is the Courage to ,Continue that counts",
    author: "Emily Brown",
  },

];

const Textslider = () => {
  return (
    <section className="bg-light">
      <div className="container">
        <h1 className="text-center mb-md-4 mb-4 font-heading fontWeight700 text-primary ">Testimonials</h1>
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
