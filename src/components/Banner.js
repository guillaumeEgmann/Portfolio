import React from 'react'
import { useState, useEffect } from 'react'
//import headerImg from '../assets/bg.png'
import { Container, Row, Col } from 'react-bootstrap'
//import { ArrowRightCircle } from 'react-bootstrap-icons'
import './Banner.css'

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0); //à quoi ca sert ?
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['n Engineer', 'n Entrepreneur', ' Product designer']
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    const tick = React.useCallback(() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }, [isDeleting, loopNum, text, period, toRotate]);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [text, delta, tick]);

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        {/*<span className='tagline'>Bienvenue sur mon portfolio</span>*/}
                        <h1>{`Hello, I'm Guillaume,`}<br/>{'a'}<span className="wrap">{text}</span></h1>
                        <p>I create ecodesign-driven solutions that elevate sustainable experiences.</p>
                        {/*<button onClick={() => console.log('A vu mes projets')}>Voir mes projets <ArrowRightCircle size={25} /></button>*/}
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        {/*<img src={headerImg} alt='Header Img' />*/}
                    </Col>
                </Row>
            </Container>

        </section>
  )
}

export default Banner
