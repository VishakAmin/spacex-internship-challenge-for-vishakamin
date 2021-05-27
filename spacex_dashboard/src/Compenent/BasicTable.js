import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Box from '@material-ui/core/Box';
import TableBody from '@material-ui/core/TableBody';
//import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import MuiTableCell from "@material-ui/core/TableCell";

const TableCell = withStyles({
    root: {
        borderBottom: "none"
    }
})(MuiTableCell);

const useStyles = makeStyles({

    box: {
        width: "952px",
        height: "676px"
    },

    table: {
        maxWidth: 952,
        maxHeight: 676
    },
});

const BasicTable = ({ launch }) => {
    const classes = useStyles();


    return (

        <Box className={classes.box} pt="112px" pl="245px" pr="245px" pb="164px">
            <TableContainer component={Paper} className={classes.table} >
                <Table className={classes.table} aria-label="simple table" >
                    <TableHead style={{ backgroundColor: "#F4F5F7" }}>
                        <TableRow>
                            <TableCell align="center">No:</TableCell>
                            <TableCell align="left">Location</TableCell>
                            <TableCell align="left">Launched(UTC)</TableCell>
                            <TableCell align="left">Mission</TableCell>
                            <TableCell align="left">Orbit</TableCell>
                            <TableCell align="left">Launch Status</TableCell>
                            <TableCell align="left">Rocket</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {launch.map((row, index) => (
                            <TableRow key={row.flight_number}>
                                <TableCell component="th" scope="row" align="center">
                                    {index + 1}
                                </TableCell>
                                <TableCell align="left">{row.launch_date_utc}</TableCell>
                                <TableCell align="left">{row.launch_site.site_name}</TableCell>
                                <TableCell align="left">{row.mission_name}</TableCell>
                                <TableCell align="left">{row.rocket.second_stage.payloads[0].orbit}</TableCell>
                                <TableCell align="left">{row.launch_success ? "Success" : "Failed"}</TableCell>
                                <TableCell align="left">{row.rocket.rocket_name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
export default BasicTable;