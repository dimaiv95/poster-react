import React from "react";
import {  makeStyles } from '@material-ui/core/styles';

import emptyImage from "./empty.gif";

const useStyles = makeStyles(() => ({
    root: {
        display: "block",
        margin: "0 auto",
        width: "100%",
        maxWidth: "500px"
    }
}));

const Empty = () => {
    const classes = useStyles();

    return(
        <img src={ emptyImage } className={ classes.root } />
    );
};

export default Empty;