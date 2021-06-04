import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Grid from '@material-ui/core/Grid';

import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';


const Transition = React.forwardRef(function Transition(props, ref) {


    return <Slide direction="up" ref={ref} {...props} />;
});


const useStyles = makeStyles({

    avatar: {
        width: "72px",
        height: "72px",
        paddingTop: "32px",
        paddingLeft: "32px",
        paddingRight: "24px",
    },
    close: {
        padding: "24.7px 24.7px"
    },
    box: {
        width: "544px",
        height: "740.64px",
    },
    heading: {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "18px",
        width: "54px",
        height: "18px",
        paddingRight: "362px"
    },
    deatils: {
        position: "static",
        top: "120px",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "24px",
        display: "flex",
        alignItems: "center",
        color: "#1F2937",
        paddingTop: "16px",
        padding: "32px",
    }

})


const MyModal = (
    {
        open_d,
        handleOpenDialog,
        handleCloseDialog,
        row
    }) => {

    const classes = useStyles()


    const handleClickOpen = () => {
        handleOpenDialog();
        // handleOpenDialog(true)
        // setOpen(true);
    };


    console.log(row)
    return (
        <div>
            {row.links ?
                <Dialog
                    open={open_d}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleCloseDialog}
                    aria-labelledby="alert-dialog-slide-title"
                >
                    <Grid container direction="row" alignItems="center">
                        <Grid item>
                            <Avatar variant="square" src={row.links.mission_patch_small} className={classes.avatar} />
                        </Grid>

                        {/* <IconButton

                        color="inherit"
                        onClick={handleCloseDialog}
                        className={classes.close}
                    >
                        <CloseIcon />
                    </IconButton> */}
                        <Grid item>
                            <Typography className={classes.heading}> {row.mission_name}</Typography>

                            <Button>
                                Success
                            </Button>
                            <Grid>
                                Flacon 9
                            </Grid>

                            <Grid container direction="row">
                                <Grid>
                                    1
                                </Grid>
                                <Grid>
                                    2
                                </Grid>
                                <Grid>
                                    3
                                </Grid>
                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid>
                        <Typography className={classes.deatils}>
                            {row.details}
                            <a href={row.links.wikipedia}>Wikipedia</a>
                        </Typography>
                    </Grid>

                </Dialog>
                : <div>

                </div>}
        </div >
    );
}

export default MyModal
