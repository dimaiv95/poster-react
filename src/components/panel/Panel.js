import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistorySetQuery } from "../../hooks";

import { fade, makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    panelLeft: {
        display: "flex",
        alignItems: "center"
    },
    link: {
        textDecoration: "none",
        color: theme.palette.common.white
    },
    panelRight: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    search: {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.2),
    },
    input: {
        padding: theme.spacing(0, 2),
        backgroundColor: "transparent",
        fontWeight: 300,
        color: theme.palette.common.white
    },
}));

function HideOnScroll({ children, window }) {
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
    
    return (
        <Slide appear={ false } direction="down" in={ !trigger }>
            { children }
        </Slide>
    );
};

const Panel = () => {
    const classes = useStyles();
    const [ value, setValue ] = useState("");
    const historySetQuery = useHistorySetQuery();

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleKeyPressEnter = ({ repeat, key }) => {
        if(repeat || key !== "Enter"){
            return true;
        }
        value && historySetQuery(value, 1);
    };

    const handleClick = (e) => {
        value && historySetQuery(value, 1);
    };

    return(
        <HideOnScroll>
            <AppBar>
                <Toolbar>
                    <Container>
                        <Grid container >
                            <Grid item xs={6} className={ classes.panelLeft } >
                                <Typography variant="h4" component="h1"><Link to="/" className={ classes.link } >Poster</Link></Typography>
                            </Grid>
                            <Grid item xs={6} className={ classes.panelRight } >
                            <div className={ classes.search } >
                                <InputBase
                                    onInput={ handleInput }
                                    onKeyPress={ handleKeyPressEnter }
                                    className={ classes.input }
                                    name="search"
                                    value={ value }
                                    placeholder="Search…" 
                                />
                            </div>
                            <IconButton onClick={ handleClick } color="inherit">
                                <SearchIcon />
                            </IconButton>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
};

export default Panel;