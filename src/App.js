import React, { useState, useEffect } from 'react';
import { Box, Container } from '@material-ui/core';
import Logo from './img/logo.png'
import './App.css';
import BasicTable from './Compenent/BasicTable';
import useFullPageLoader from './hooks/usePageLoader';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import filter from "./img/filter.png";

const useStyles = makeStyles({

  filter: {
    position: "absolute",
    paddingLeft: "1056px",
    top: "120px",
  },

  menu: {
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
  }

})


function App() {
  const [launches, setLaunches] = useState([]);
  const [launch_filter, setLaunch_filter] = useState([]);
  const [loader, showloader, hideLoader] = useFullPageLoader()
  const [filters, setFilters] = useState([]);
  const classes = useStyles();
  const [isLoading, setIsLoadaing] = useState(false)



  //Api call
  useEffect(() => {
    const getData = () => {
      setIsLoadaing(true)
      showloader()
      fetch("https://api.spacexdata.com/v3/launches")
        .then(response => response.json())
        .then(data => {
          hideLoader()
          setLaunches(data)
          setLaunch_filter(data)
          setIsLoadaing(false)
        })

    }
    getData()
  }, [])

  const handleChange = (e) => {
    setFilters(e.target.value)
    const filter_data = e.target.value === "" ? launches : e.target.value === "success" ? launches.filter(a => a.launch_success === true) : e.target.value === "failure" ? launches.filter(a => a.launch_success === false) : launches.filter(a => a.upcoming === true)
    setLaunch_filter(filter_data)
  }

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
        <Grid item style={{ paddingTop: "11px" }}>
          <img src={filter} alt="filter" />
        </Grid>
        <Grid item>
          <Select
            value={filters}
            onChange={handleChange}
            displayEmpty
            disableUnderline
          >
            <MenuItem className={classes.menu} value="">All Launches</MenuItem>
            <MenuItem className={classes.menu} value="success">Successful Launches</MenuItem>
            <MenuItem className={classes.menu} value="failure">Failure Launches</MenuItem>
            <MenuItem className={classes.menu} value="upcoming">Upcoming Launches</MenuItem>
          </Select>
        </Grid>
      </Grid>



      <Container style={{ paddingTop: "20px" }}>

        <BasicTable launch={launch_filter} loader={loader} Loading={isLoading} />

      </Container>


    </div >
  );
}

export default App;
