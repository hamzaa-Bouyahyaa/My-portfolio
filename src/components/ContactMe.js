import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Container from "@material-ui/core/Container";
import Typography from "./Typography";
import TextField from "./TextField";
import Snackbar from "./Snackbar";
import Button from "./Button";
import emailjs from 'emailjs-com';

// import "./MiddleSection.css";
// import { useDispatch } from "react-redux";
// import { reclamer } from "../../../actions/reclamations";

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: 20,
    display: "flex",
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#FFEBCD",
    padding: theme.spacing(8, 3),
  },
  cardContent: {
    maxWidth: 400,
  },
  textField: {
    width: "100%",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  // button: {
  //   width: "100%",
  //   backgroundColor: "#001c2f",
  //   // background: "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)"
  // },
  imagesWrapper: {
    position: "relative",
  },
  imageDots: {
    position: "absolute",
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: "100%",
  },
  image: {
    position: "absolute",
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: "100%",
    maxWidth: 600,
  },
});

function ProductCTA(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  const [send, setSend] = useState({
    from_name: '',
    to_name: 'Bouyahya',
    message: '',
  });

  const handleChange = (e) => {
    setSend({ ...send, [e.target.name]: e.target.value });
  };
 

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send("service_5rvxued", "template_e6mrf7m", {
      from_name: send.from_name,
      to_name: send.to_name,
      message: send.message
    }, "user_XHrdsHBGm5KVEpiZFxgXn")
  }

  //   const handleChange = (e) => {
  //     setReclamation({ ...reclamation, [e.target.name]: e.target.value });
  //   };

  return (
    <Container className={classes.root} component="section" id="contact">
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <form className={classes.cardContent} onSubmit={handleSubmit}>
              <Typography variant="h2" component="h2" gutterBottom>
                Contact Me
              </Typography>
              <Typography variant="h5">
                Just fill up the form with any question you need and I'll be here to find you
              </Typography>
              <TextField
                noBorder
                className={classes.textField}
                placeholder="Nom"
                name="nom"
              //onChange={handleChange}
              />

              <TextField
                noBorder
                className={classes.textField}
                placeholder="Email"
                name="from_name"
                onChange={handleChange}
              />
              <TextField
                noBorder
                className={classes.textField}
                placeholder="Description"
                multiline
                rows="6"
                name="message"
                onChange={handleChange}
              />

              <Button
                type="submit"
                color="primary"
                variant="contained"
                className="button-contact"
                style={{
                  width: "100%",
                  backgroundColor: "#001c2f",
                }}
              >
                Envoyer
              </Button>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden smDown>
            <div className={classes.imageDots} />
            <img
              src="/Images/hamza.jpeg"
              alt="call to action"
              className={classes.image}
            />
          </Hidden>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        onClose={handleClose}
        message="votre réclamation a été envoyée avec succès."
      />
    </Container>
  );
}

ProductCTA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCTA);
