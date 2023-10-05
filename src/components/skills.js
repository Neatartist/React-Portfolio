import Html from '../assets/img/html5-logo-31813.png'
import Java from '../assets/img/javascript-39397.png'
import React from "../assets/img/logo192.png"
import Css from '../assets/img/css2.png'
import Mong from '../assets/img/mongo.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp-min.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={Java} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={Java} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={React} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={Java} alt="Image" />
                                <h5>Object-Oriented Programming </h5>
                            </div>
                            <div className="item">
                                <img src={Html} alt="Image" />
                                <h5>HTML </h5>
                            </div>
                            <div className="item">
                                <img src={Mong} alt="Image" />
                                <h5>Mongodb </h5>
                            </div>
                            <div className="item">
                                <img src={Css} alt="Image" />
                                <h5>CSS </h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
