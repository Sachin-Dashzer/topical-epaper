import React from "react";

const testimonials = [
  {
    text: "This product has changed my life for the better! Highly recommend it.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus laborum suscipit commodi, eum ducimus illum vero cupiditate consequatur similique dolores? Dolor, eaque vero laborum hic expedita quidem at itaque dolore? ",
    author: "John Doe",
  },
  {
    text: "Five stars for amazing customer support and a great experience. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus laborum suscipit commodi, eum ducimus illum vero cupiditate consequatur similique dolores? Dolor, eaque vero laborum hic expedita quidem at itaque dolore?",
    author: "Mike Johnson",
  },

  {
    text: "Excellent service and quality. I will definitely be back! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus laborum suscipit commodi, eum ducimus illum vero cupiditate consequatur similique dolores? Dolor, eaque vero laborum hic expedita quidem at itaque dolore?",
    author: "Jane Smith",
  },
  {
    text: "Five stars for amazing customer support and a great experience. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus laborum suscipit commodi, eum ducimus illum vero cupiditate consequatur similique dolores? Dolor, eaque vero laborum hic expedita quidem at itaque dolore?",
    author: "Mike Johnson",
  },

];

const Textslider = () => {
  return (
    <section className="bg-light">
      <div className="container">
        <h1 className="text-center mb-5 font-heading fontWeight700 text-primary ">Testimonials</h1>
        <h4 className="text-center mb-4 text-decoration-underline">Google</h4>

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
              <span><i class="fa-solid fa-angle-left"></i></span>
            </button>
            <button
              className="btnTheme ms-2"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              <span><i class="fa-solid fa-angle-right"></i></span>
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
