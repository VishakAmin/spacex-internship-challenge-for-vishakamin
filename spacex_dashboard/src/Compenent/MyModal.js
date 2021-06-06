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
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import moment from 'moment';
import nasa from '../img/nasa.png'
import wiki from '../img/wiki.png'
import youtube from '../img/youtube.png'

const Transition = React.forwardRef(function Transition(props, ref) {


    return <Slide direction="up" ref={ref} {...props} />;
});


const useStyles = makeStyles({
    paper: {
        minWidth: "544px"
    },

    avatar: {
        width: "72px",
        height: "72px",
    },

    heading: {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "18px"

    },
    deatils: {
        position: "static",
        top: "120px",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "24px",
        alignItems: "center",
        color: "#1F2937",

    },
    success: {
        borderRadius: "20px",
        width: "72px",
        height: "21px",
        fontFamily: "Helvetica Neue",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "13px",
        textAlign: "center",
        color: "#03543F",
        background: "#DEF7EC",
        textTransform: "none",
        marginLeft: "16px",
        cursor: "default"
    },
    failed: {
        borderRadius: "20px",
        width: "72px",
        height: "21px",
        fontStyle: "normal",
        fontFamily: "Helvetica Neue",
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "13px",
        textAlign: "center",
        color: "#981B1C",
        background: "#FDE2E1",
        textTransform: "none",
        marginLeft: "16px",
        cursor: "default"
    },
    upcoming: {
        borderRadius: "20px",
        width: "72px",
        height: "21px",
        fontStyle: "normal",
        fontFamily: "Helvetica Neue",
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "13px",
        textAlign: "center",
        color: "#92400F",
        background: "#FEF3C7",
        textTransform: "none",
        marginLeft: "16px",
        cursor: "default"
    },

    key: {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "14px",
        color: "#4B5563"
    },
    value: {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "14px",
        color: "#1F2937"
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
                    repositionOnUpdate={false}
                    style={{ padding: '32px' }}
                    open={open_d}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleCloseDialog}
                    aria-labelledby="alert-dialog-slide-title"
                    //className={classes.paper}
                    maxWidth="xs"
                    fullWidth


                >
                    <Grid container direction="row" spacing={1} >
                        <Grid item style={{ flex: 1, alignItems: "flex-end" }}>
                            <Avatar variant="square" src={row.links.mission_patch_small} className={classes.avatar} />
                        </Grid>

                        <Grid item style={{ flex: 4 }} container direction="column" spacing={1}>
                            <Grid item style={{ display: "flex" }}  >
                                <Typography className={classes.heading}> {row.mission_name}</Typography>

                                {row.launch_success ? <Button
                                    className={classes.success}
                                    variant="outlined"

                                >
                                    Success
                                        </Button>

                                    : row.upcoming === false ?
                                        <Button
                                            className={classes.failed}
                                            variant="outlined"

                                        >
                                            Failed
                               </Button>
                                        :

                                        <Button
                                            className={classes.upcoming}
                                            variant="outlined"

                                        >
                                            Upcomimg
                                </Button>

                                }
                            </Grid>


                            <Grid item >

                                <Typography style={{ fontFamily: "Inter", fontSize: "12px" }}> {row.rocket.rocket_name}</Typography>
                            </Grid>


                            <Grid item container direction="row"  >
                                <Grid style={{ paddingRight: "8px" }}>
                                    <a href={row.links.article_link}>
                                        <img src={nasa} alt="nasa" />
                                    </a>
                                </Grid>
                                <Grid style={{ paddingRight: "8px" }}>
                                    <a href={row.links.wikipedia}>
                                        <img src={wiki} alt="wiki" />
                                    </a>
                                </Grid>
                                <Grid style={{ paddingRight: "8px" }}>
                                    <a href={row.links.video_link}>
                                        <img src={youtube} alt="youtube" />
                                    </a>
                                </Grid>
                            </Grid>

                        </Grid>

                        <Grid item style={{ flex: 0.1 }} >
                            <IconButton
                                style={{ padding: "0px" }}
                                onClick={handleCloseDialog}
                            // className={classes.close}
                            >
                                <CloseIcon />
                            </IconButton>
                        </Grid>

                    </Grid>

                    <Grid container style={{ paddingTop: "16px" }}>
                        <Typography className={classes.deatils}>
                            {row.details} <a href={row.links.wikipedia} target="_blank" rel="noreferrer"> Wikipedia</a>
                        </Typography>
                    </Grid>

                    <Grid container >

                    </Grid>

                    <Grid container direction="column" spacing={4} style={{ paddingTop: "32px" }}>
                        <Grid container direction="row" item spacing={2}>
                            <Grid item md={5}>
                                <Typography className={classes.key}>
                                    Flight Number
                            </Typography>
                            </Grid>
                            <Grid item >
                                <Typography className={classes.value}>
                                    {row.flight_number}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider />

                        <Grid container direction="row" item spacing={2}>
                            <Grid item md={5}>
                                <Typography className={classes.key}>
                                    Mission Name
                            </Typography>
                            </Grid>
                            <Grid item >
                                <Typography className={classes.value}>
                                    {row.mission_name}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider />

                        <Grid container direction="row" item spacing={2}>
                            <Grid item md={5}>
                                <Typography className={classes.key}>
                                    Rocket Type
                            </Typography>
                            </Grid>
                            <Grid item >
                                <Typography className={classes.value}>
                                    {row.rocket.rocket_type}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider />


                        <Grid container direction="row" item spacing={2}>
                            <Grid item md={5}>
                                <Typography className={classes.key}>
                                    Manufacturer
                            </Typography>
                            </Grid>
                            <Grid item >
                                <Typography className={classes.value}>
                                    {row.rocket.second_stage.payloads[0].manufacturer}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider />


                        <Grid container direction="row" item spacing={2}>
                            <Grid item md={5}>
                                <Typography className={classes.key}>
                                    Nationality
                            </Typography>
                            </Grid>
                            <Grid item >
                                <Typography className={classes.value}>
                                    {row.rocket.second_stage.payloads[0].nationality}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider />


                        <Grid container direction="row" item spacing={2}>
                            <Grid item md={5}>
                                <Typography className={classes.key}>
                                    Launch Date
                            </Typography>
                            </Grid>
                            <Grid item >
                                <Typography className={classes.value}>
                                    {moment(row.launch_date_utc).format('DD  MMMM YYYY HH:mm')}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider />


                        <Grid container direction="row" item spacing={2}>
                            <Grid item md={5}>
                                <Typography className={classes.key}>
                                    Payload Type
                            </Typography>
                            </Grid>
                            <Grid item >
                                <Typography className={classes.value}>
                                    {row.rocket.second_stage.payloads[0].payload_type}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider />


                        <Grid container direction="row" item spacing={2}>
                            <Grid item md={5}>
                                <Typography className={classes.key}>
                                    Orbit
                            </Typography>
                            </Grid>
                            <Grid item >
                                <Typography className={classes.value}>
                                    {row.rocket.second_stage.payloads[0].orbit}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container direction="row" item spacing={2}>
                            <Grid item md={5}>
                                <Typography className={classes.key}>
                                    Launch Site
                            </Typography>
                            </Grid>
                            <Grid item >
                                <Typography className={classes.value}>
                                    {row.launch_site.site_name}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>


                </Dialog>
                : <div>

                </div>}
        </div >
    );
}

export default MyModal
