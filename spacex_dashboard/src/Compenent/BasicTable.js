import { React, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Box from '@material-ui/core/Box';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';
import MuiTableCell from "@material-ui/core/TableCell";
import moment from 'moment'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MyModal from './MyModal'


const TableCell = withStyles({
    root: {
        borderBottom: "none"
    }
})(MuiTableCell);


const useStyles = makeStyles({


    box: {
        width: "952px",
        height: "676px",

    },

    table: {
        maxWidth: 952,
        maxHeight: 676
    },

    success: {
        padding: "4px 12px",
        borderRadius: "20px",
        width: "58px",
        height: "21px",
        fontFamily: "Helvetica Neue",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "13px",
        textAlign: "center",
        color: "#03543F",
        background: "#DEF7EC",
        textTransform: "none"
    },
    failed: {
        padding: "4px 12px",
        borderRadius: "20px",
        width: "58px",
        height: "21px",
        fontStyle: "normal",
        fontFamily: "Helvetica Neue",
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "13px",
        textAlign: "center",
        color: "#981B1C",
        background: "#FDE2E1",
        textTransform: "none"
    },
    upcoming: {
        padding: "4px 12px",
        borderRadius: "20px",
        width: "58px",
        height: "21px",
        fontStyle: "normal",
        fontFamily: "Helvetica Neue",
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "13px",
        textAlign: "center",
        color: "#92400F",
        background: "#FEF3C7",
        textTransform: "none"

    }
});


const BasicTable = ({ launch, loader }) => {
    const classes = useStyles();

    const [page, setPage] = useState(1);
    const [openDialog, setOpenDialog] = useState(false);
    const [rowToUpdate, setRowToUpdate] = useState([]);


    const rowsPerPage = 12;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, launch.length - (page - 1) * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        console.log(page)


    };
    const handleOpenDialog = () => {
        setOpenDialog(true);

    };
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const updateDetails = (e, row) => {
        setOpenDialog(true);
        setRowToUpdate(row);
    };


    console.log(rowToUpdate)
    return (

        <Box className={classes.box} pt="112px" pl="245px" pr="245px" pb="164px">
            <MyModal
                open_d={openDialog}
                handleOpenDialog={handleOpenDialog}
                handleCloseDialog={handleCloseDialog}
                row={rowToUpdate} />
            <TableContainer component={Paper} className={classes.box} >
                <Table className={classes.table} aria-label="simple table" >
                    <TableHead style={{ backgroundColor: "#F4F5F7" }}>
                        <TableRow>
                            <TableCell align="center">No:</TableCell>
                            <TableCell align="left">Launched(UTC)</TableCell>
                            <TableCell align="left">Location</TableCell>
                            <TableCell align="left">Mission</TableCell>
                            <TableCell align="left">Orbit</TableCell>
                            <TableCell align="left">Launch Status</TableCell>
                            <TableCell align="left">Rocket</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>

                        {/* https://codesandbox.io/s/jzbml?file=/src/MyDialog.js */}
                        {launch
                            .slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row" align="center">
                                        {row.flight_number}
                                    </TableCell>
                                    <TableCell align="left">{moment(row.launch_date_utc).format('DD  MMMM YYYY HH:mm')}</TableCell>
                                    <TableCell align="left">{row.launch_site.site_name}</TableCell>
                                    <TableCell align="left">{row.mission_name}</TableCell>
                                    <TableCell align="left">{row.rocket.second_stage.payloads[0].orbit}</TableCell>
                                    <TableCell align="left">
                                        {row.launch_success ? <Button
                                            className={classes.success}
                                            variant="outlined"

                                            onClick={(e) => updateDetails(e, row)}
                                        >
                                            Success
                                        </Button>

                                            : row.upcoming === false ?
                                                <Button
                                                    className={classes.failed}
                                                    variant="outlined"
                                                    onClick={(e) => updateDetails(e, row)}
                                                >
                                                    Failed
                               </Button>
                                                :

                                                <Button
                                                    className={classes.upcoming}
                                                    variant="outlined"

                                                    onClick={(e) => updateDetails(e, row)}
                                                >
                                                    Upcomimg
                                </Button>





                                        }

                                    </TableCell>
                                    <TableCell align="left">{row.rocket.rocket_name}</TableCell>
                                </TableRow>



                            ))}

                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>


                </Table>
            </TableContainer>
            <TableFooter >
                <Pagination
                    // count={10}
                    siblingCount={0}
                    boundaryCount={1}
                    variant="outlined"
                    shape="rounded"
                    component="div"
                    count={10}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    defaultPage={1}
                    onChange={handleChangePage}
                />
            </TableFooter>
        </Box>
    );
}
export default BasicTable;