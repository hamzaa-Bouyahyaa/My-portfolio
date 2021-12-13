import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react'
import {
    FooterContainer, FooterWrap, FooterLinksContainer,
    FooterLinksWrapper, FooterLinkItems,
    //  FooterLinkTitle,
    // FooterLink
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
            <Typography variant='h5' style={{
                                marginBottom: "20px",
                                color:"#fff"
                            }}>Social Media</Typography>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                  
                        <FooterLinkItems>
                         
                            {/* <FooterLinkTitle>Social Media</FooterLinkTitle> */}
                            <Grid container justify="space-between">
                                <a href="https://www.instagram.com/hamza.bouyahya" style={{
                                    textDecoration: "none"
                                }} target="_blank">
                                    <img src="/Images/instagram (1).png" alt="instagram" />
                                </a>
                                <a href="https://www.facebook.com/hamza.bouyahya.5" style={{
                                    textDecoration: "none"
                                }} target="_blank">
                                    <img src="/Images/facebook.png" alt="facebook" />

                                </a>
                                <a href="https://www.linkedin.com/in/hamza-bouyahya" style={{
                                    textDecoration: "none"
                                }} target="_blank">
                                    <img src="/Images/linkedin (1).png" alt="linkedin" />

                                </a>
                                <a href="https://github.com/hamzaa-Bouyahyaa" target="_blank" style={{
                                    textDecoration: "none"
                                }}>
                                    <img src="/Images/github.png" alt="github" />

                                </a>



                            </Grid>
                            {/* <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink> */}
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    {/* <FooterLinkItems>
                            <FooterLinkTitle> About us</FooterLinkTitle>
                            <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems> */}
                    {/* <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About us</FooterLinkTitle>
                            <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> About us</FooterLinkTitle>
                            <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper> */}
                </FooterLinksContainer>
                {/* <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Dolla
                        </SocialLogo>
                        <WebsiteRights>Dolla © {new Date().getFullYear()}
                        Todos Los Derechos Reservados</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink><SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia> */}
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
