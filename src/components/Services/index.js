import React from 'react'
import Icon1 from '../../images/cardiogram (3).png'
import Icon2 from '../../images/cardiogram (2).png'
// import Icon3 from '../../images/svg-3.svg'
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
            <Grid container justify="space-around">

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


                    {/* <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
                </ServicesCard> */}
                </ServicesWrapper>
            </Grid>
            <ServicesH1 style={{
                marginTop: "50px"
            }}>Tools</ServicesH1>
            <Grid container justify="space-around" style={{
                marginBottom: '50px'
            }}>
                <img src="https://img.icons8.com/color/96/000000/react-native.png" alt="react" />
                <img src="https://img.icons8.com/color/96/000000/nodejs.png" alt="node" />
                <img src="https://img.icons8.com/color/96/000000/mongodb.png" alt="mongo" />
                <img src="https://img.icons8.com/color/96/000000/html-5--v1.png" alt="html5" />
            </Grid>

            <Grid container justify="space-around">
                <img src="https://img.icons8.com/color/96/000000/css3.png" alt="css3" />
                <img src="https://img.icons8.com/color/96/000000/bootstrap.png" alt="bootstrap" />
                <img src="https://img.icons8.com/color/96/000000/javascript.png" alt="js" />
                <img src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png" alt='java' />

            </Grid>



        </ServicesContainer>
    )
}

export default Services