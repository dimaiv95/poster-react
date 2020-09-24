import React from "react";
import {  makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
    root: {
        display: "block",
        margin: "0 auto",
        width: "40px",
        height: "40px"
    }
}));

const Spiner = () => {
    const classes = useStyles();

    return(
        <div className={ classes.root } >
            <CircularProgress />
        </div>
    );
};

export default Spiner;