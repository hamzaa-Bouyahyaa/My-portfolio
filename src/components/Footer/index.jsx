import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <Typography
          variant="h5"
          style={{
            marginBottom: "20px",
            color: "#fff",
          }}
        >
          Social Media
        </Typography>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <Grid container justify="space-evenly">
                <a
                  href="https://www.instagram.com/hamza.bouyahya"
                  style={{
                    textDecoration: "none",
                  }}
                  target="_blank"
                >
                  <img src="/Images/instagram (1).png" alt="instagram" />
                </a>
                <a
                  href="https://www.facebook.com/hamza.bouyahya.5"
                  style={{
                    textDecoration: "none",
                  }}
                  target="_blank"
                >
                  <img src="/Images/facebook.png" alt="facebook" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hamza-bouyahya"
                  style={{
                    textDecoration: "none",
                  }}
                  target="_blank"
                >
                  <img src="/Images/linkedin (1).png" alt="linkedin" />
                </a>
                <a
                  href="https://github.com/hamzaa-Bouyahyaa"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <img src="/Images/github.png" alt="github" />
                </a>
              </Grid>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
