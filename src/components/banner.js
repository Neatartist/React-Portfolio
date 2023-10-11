import { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/computerbanner.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const memoizedValue = useMemo(() => { return [ "Full Stack", "Front-end", "Back-end" ] }, []);
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      const tick = () => {
        let i = loopNum % memoizedValue.length;
        let fullText = memoizedValue[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [delta, isDeleting, loopNum, memoizedValue, text]);

  const scrollToContacts = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeInLeft animate_fast" : "animate__animated animate__fadeOutLeft"}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`I'm Daniel Van Kirk, a Junior`} <span className="txt-rotate" data-period='500' data-rotate='[ "Full Stack", "Front-end ", "Back-end " ]'><span className="wrap">{text}</span></span> {`Developer`}</h1>
                  <p>Hello, this portfolio includes my projects, work experience, and a resume.<br></br> </p>
                  {/* <button onClick={scrollToContacts}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInRight animate_fast" : "animate_animated animate_fadeOutLeft animate_fast"}>
                  <img style={{width: '300px'}}src={headerImg}/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}