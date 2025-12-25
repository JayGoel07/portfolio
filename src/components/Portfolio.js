import React, { Component } from 'react';
import Slider from "react-slick"; // Import Slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;

    // Carousel Settings
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3, // Shows 3 images at a time
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: { slidesToShow: 1 } // Shows 1 image on mobile
        }
      ]
    };

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            
            {/* Replace the wrapper div with the Slider component */}
            <Slider {...settings}>
              {
                resumeData.portfolio && resumeData.portfolio.map((item, index) => {
                  return (
                    <div key={index} className="portfolio-item">
                      <div className="item-wrap" style={{ margin: "0 10px" }}> 
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          <img src={`${item.imgurl}`} className="item-img" alt={item.name} />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  )
                })
              }
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}