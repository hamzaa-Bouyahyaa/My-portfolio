import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Container from "@material-ui/core/Container";
import Typography from "./Typography";
import TextField from "./TextField";
import Snackbar from "./Snackbar";
import Button from "./Button";
import emailjs from "emailjs-com";
import { useFormik } from "formik";
import * as yup from "yup";

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
  const handleClose = () => {
    setOpen(false);
  };

  const validationSchema = yup.object({
    name: yup.string("Enter your name").required("Name is required"),
    from_name: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    message: yup
      .string("Enter your Description")
      .required("Description is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      from_name: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("hello");
      emailjs.send(
        "service_5rvxued",
        "template_e6mrf7m",
        {
          from_name: values.from_name,
          to_name: "Bouyahya",
          message: values.message,
        },
        "user_XHrdsHBGm5KVEpiZFxgXn"
      );
      setOpen(true);
    },
  });

  return (
    <Container className={classes.root} component="section" id="contact">
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <form
              className={classes.cardContent}
              onSubmit={formik.handleSubmit}
            >
              <Typography variant="h2" component="h2" gutterBottom>
                Contact Me
              </Typography>
              <Typography variant="h5">
                Just fill up the form with any question you need and I'll be
                here to find you
              </Typography>
              <TextField
                noBorder
                className={classes.textField}
                placeholder="Name"
                name="name"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />

              <TextField
                noBorder
                className={classes.textField}
                placeholder="Email"
                name="from_name"
                id="from_name"
                onChange={formik.handleChange}
                value={formik.values.from_name}
                onChange={formik.handleChange}
                error={
                  formik.touched.from_name && Boolean(formik.errors.from_name)
                }
                helperText={formik.touched.from_name && formik.errors.from_name}
              />
              <TextField
                noBorder
                className={classes.textField}
                placeholder="Description"
                multiline
                rows="6"
                name="message"
                id="message"
                onChange={formik.handleChange}
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
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
                Send
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
        message="Your message has been sent successfully, i will reach you soon !"
      />
    </Container>
  );
}

ProductCTA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCTA);
