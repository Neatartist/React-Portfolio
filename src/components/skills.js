import Html from '../assets/img//html5-logo-31813-min.png';
import Java from '../assets/img/javascript-39397-min.png';
import React from "../assets/img/React-min.png";
import Css from '../assets/img/css2-min.png';
import Mong from '../assets/img/mongo-min.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Node from '../assets/img/Node-min.png';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import SQL from '../assets/img/SQLlogo-min.png';
import npm from '../assets/img/npm-min.png';
import jQuery from '../assets/img/jQuerylogo-min.png';
import Bootstrap from '../assets/img/Bootstrap-min.png';
import colorSharp from "../assets/img/color-sharp-min.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Skills = (props) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      autoPlay: props.deviceType !== "mobile" ? 2500 : undefined,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      autoPlay: props.deviceType !== "mobile" ? 2500 : undefined,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      autoPlay: props.deviceType !== "mobile" ? 2500 : undefined,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      autoPlay: props.deviceType !== "mobile" ? 2500 : undefined,
    }
  };


  return (
    <div>
      <section className={`skill ${props.isVisible ? 'visible' : 'hidden'}`} id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={`item ${isVisible ? 'animate__animated animate__fadeIn animate__fast' : 'animate__animated animate__fadeOutLeft animate__fast'}`}>
                    <h2>Skills</h2>
                    <Carousel responsive={responsive} infinite={true} autoPlay={props.deviceType !== "mobile" ? true : false} swipeable={props.deviceType === "mobile" ? true : false} className="owl-carousel owl-theme skill-slider">
                      <div className="item">
                        <img src={SQL} alt="Image" />
                        <h5>MySQL</h5>
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
                        <img src={Node} alt="Image" />
                        <h5>Node.js</h5>  
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
                      <div className="item">
                        <img src={npm} alt="Image" />
                        <h5>NPM </h5>
                      </div>
                      <div className="item">
                        <img src={Bootstrap} alt="Image" />
                        <h5>Bootstrap </h5>
                      </div>
                      <div className="item">
                        <img src={jQuery} alt="Image" />
                        <h5>jQuery </h5>
                      </div>
                      </Carousel>
                  </div>
                )}
              </TrackVisibility>
            </div>
          </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
        </div>
      </section>
    </div>
  );
}