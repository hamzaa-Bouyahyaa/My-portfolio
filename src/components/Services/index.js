import React from 'react'
import Icon1 from '../../images/cardiogram (3).png'
import Icon2 from '../../images/cardiogram (2).png'
import Icon4 from '../../images/weather.png';
import Icon5 from '../../images/alan.gif'
import Icon6 from '../../images/videoconference.png';
import Icon7 from '../../images/uploader.svg';


import {
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper,
} from './ServicesElements'
import { Grid } from '@material-ui/core';


const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Projects</ServicesH1>

                <ServicesWrapper>

                    <a href="https://tunicare.netlify.app/" target='_blank' style={{
                        textDecoration: "none",
                        color: "#000"
                    }}>
                        <ServicesCard>
                            <ServicesIcon src={Icon1} />
                            <ServicesH2>Tunicare</ServicesH2>
                            <ServicesP>Web platform primarily intended for patients to make an appointment online.</ServicesP>
                        </ServicesCard>

                    </a>
                    <a href="https://tunicare-pro.netlify.app/" target='_blank' style={{
                        textDecoration: "none",
                        color: "#000"
                    }}>
                        <ServicesCard>
                            <ServicesIcon src={Icon2} />
                            <ServicesH2>Tunicare Pro</ServicesH2>
                            <ServicesP>Web platform primarily intended for doctors to have a connected medical practice.</ServicesP>
                        </ServicesCard>
                    </a>
                    
                    <a href="https://weather-app-bh.netlify.app/" target='_blank' style={{ textDecoration:'none',color:"#000" }}>
                    <ServicesCard>
                    <ServicesIcon src={Icon4} />
                    <ServicesH2>Weather App</ServicesH2>
                    <ServicesP>This web application can help you prepare for what Mother Nature has in store.</ServicesP>
                    </ServicesCard>
                    </a>
                    <a href="https://github.com/hamzaa-Bouyahyaa/Alan-Ai-Voice-Assistant-with-ReactJs" target='_blank' style={{ textDecoration:'none',color:"#000" }}>
                    <ServicesCard>
                    <ServicesIcon src={Icon5} />
                    <ServicesH2>Alan-Ai Voice Assistant</ServicesH2>
                    <ServicesP>Conversational voice controlled react news app using Alan-Ai</ServicesP>
                    </ServicesCard>
                    </a>
                    <a href="https://video-meeting-by-bouyahya-hamza.netlify.app/" target='_blank' style={{ textDecoration:'none',color:"#000" }}>
                    <ServicesCard>
                    <ServicesIcon src={Icon6} />
                    <ServicesH2>Agora App</ServicesH2>
                    <ServicesP>Scalable video chat application including Poll concept</ServicesP>
                    </ServicesCard>
                    </a>
                    <a href="https://uploader-app-by-bouyahya-hamza.netlify.app/" target='_blank' style={{ textDecoration:'none',color:"#000" }}>
                    <ServicesCard>
                    <ServicesIcon src={Icon7} />
                    <ServicesH2>Uploader app</ServicesH2>
                    <ServicesP>This web application is for fun. it can help you to upload your files, starring them, etc.</ServicesP>
                    </ServicesCard>
                    </a>
                </ServicesWrapper>
            <ServicesH1 style={{
                marginTop: "50px"
            }}>Tools</ServicesH1>
            <Grid container justify="space-around" style={{
                marginBottom: '100px'
            }}>
                <img src="https://img.icons8.com/color/96/000000/react-native.png" alt="react" />
                <img src="https://img.icons8.com/color/96/000000/nodejs.png" alt="node" />
                <img src="https://img.icons8.com/color/96/000000/mongodb.png" alt="mongo" />
                <img src="https://img.icons8.com/color/96/000000/html-5--v1.png" alt="html5" />
            </Grid>

            <Grid container justify="space-around" style={{
                marginBottom: '100px'
            }}>
                <img src="https://img.icons8.com/color/96/000000/css3.png" alt="css3" />
                <img src="https://img.icons8.com/color/96/000000/bootstrap.png" alt="bootstrap" />
                <img src="https://img.icons8.com/color/96/000000/javascript.png" alt="js" />
                <img src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png" alt='java' />

            </Grid>



        </ServicesContainer>
    )
}

export default Services