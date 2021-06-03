import React, { useState, useEffect } from 'react';
import { Box, Container } from '@material-ui/core';
import Logo from './img/logo.png'
import './App.css';
import BasicTable from './Compenent/BasicTable';
import { usePagination } from '@material-ui/lab/Pagination';
import useFullPageLoader from './hooks/usePageLoader';


function App() {
  const [launches, setLaunches] = useState([]);
  const [loader, showloader, hideLoader] = useFullPageLoader()

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

  //console.log(launches);
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


      <Container style={{ paddingTop: "20px" }}>

        <BasicTable launch={launches} loader={loader} />

      </Container>


    </div>
  );
}

export default App;
