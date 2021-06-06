import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import Logo from './img/logo.png'
import './App.css';
import BasicTable from './Compenent/BasicTable';
import useFullPageLoader from './hooks/usePageLoader';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import filter from "./img/filter.png";
import down from "./img/down.png";

const useStyles = makeStyles({

  filter: {
    position: "absolute",
    // width: "150px",
    // height: "16px",
    left: "1056px",
    top: "120px",
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "16px",
    textTransform: "none"
  },
  menu: {

  }

})


function App() {
  const [launches, setLaunches] = useState([]);
  const [loader, showloader, hideLoader] = useFullPageLoader()

  const [anchorEl, setAnchorEl] = useState(null);
  const [filters, setFilters] = useState("");

  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };
  const handleClose = (event) => {
    setFilters(event.target.value)
    setAnchorEl(null);
  };


  const handleChange = (e) => {
    setFilters(e.target.value)
  }
  console.log("select", filters)
  useEffect(() => {


    const getData = () => {
      showloader()
      fetch("https://api.spacexdata.com/v3/launches")
        .then(response => response.json())
        .then(data => {
          hideLoader()
          setLaunches(data)
        })

    }
    getData()
  }, [])

  console.log(filters);
  return (
    <div className="App">
      <Box
        width={1440}
        height={72}
        className="logo" display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img src={Logo} alt="logo" />
      </Box>


      <Grid container direction="row" spacing={1} className={classes.filter}  >
        <Grid item style={{ paddingTop: "12px" }}>
          <img src={filter} alt="filter" />
        </Grid>
        <Grid item>
          <Select
            value={filters}
            onChange={handleChange}
            displayEmpty
            disableUnderline
          >
            <MenuItem value="">All Launches</MenuItem>
            <MenuItem value="success">Successful Launches</MenuItem>
            <MenuItem value="failure">Failure Launches</MenuItem>
            <MenuItem value="upcoming">Upcoming Launches</MenuItem>
          </Select>
        </Grid>
      </Grid>



      <Container style={{ paddingTop: "20px" }}>

        <BasicTable launch={launches} loader={loader} />

      </Container>


    </div >
  );
}

export default App;
