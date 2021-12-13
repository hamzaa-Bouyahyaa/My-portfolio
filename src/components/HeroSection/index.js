import React, { useState } from 'react';
// import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import {
    HeroContainer,
    // HeroBg,
    // VideoBg,
    HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowFoward, ArrowRight
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
            <img src="./images/hero.jpg" alt="hero" style={{
                height: "100%",
                width: "130%"
            }} />
            {/* <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg> */}
            <HeroContent>
                <HeroH1>I'm Hamza Bouyahya</HeroH1>
                <HeroP>
                    Web Developer
                </HeroP>
                <HeroP>
                    By experience ، we discover a short path by a long wandering.
                </HeroP>
              
                <HeroBtnWrapper>
                    <Button to="about"
                        smooth={true}
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        See me with new Vision {hover ? <ArrowFoward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>


    )
}

export default HeroSection
