import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home  from './pages';
import SigninPage from './pages/signin';
import ScrollToTop from './ScrollToTop';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Box from "@material-ui/core/Box";
import { createMemoryHistory } from "history";



const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fab: {
    color: "#fff",
    backgroundColor: "#A7001E",

    "&:hover": {
      color: "#1E0F1C",
      backgroundColor: "#fff",
      transition: "0.5s",
    },
  },
}));


function ScrollTop(props) {
  const { children, window } = props;

  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

function App(props) {
  const classes = useStyles();
  const history = createMemoryHistory();
  


  return (
    <Router forceRefresh='true' history={history}>
        <ScrollToTop/>
        <Box id="back-to-top-anchor" />


      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />

      </Switch>
      <ScrollTop {...props}>
          <Fab
            className={classes.fab}
            size="small"
            aria-label="scroll back to top"
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
    </Router>
  );
}

export default App;
