import React from "react";
import { useSelector } from "react-redux";
import { useHistorySetQuery } from "../../hooks";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import NavigateNext from "@material-ui/icons/NavigateNext";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    controls: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: theme.spacing(3)
    }
}));

const PostsControls = () => {
    const classes = useStyles();
    const { searchBy, allPages, currentPage } = useSelector(({ searchBy, allPages, currentPage }) => ({ searchBy, allPages, currentPage }) );
    const historySetQuery = useHistorySetQuery();

    const disablePrev = currentPage <= 1;
    const disableNext = currentPage >= allPages;
      
    const handleClick = (type) => {
        const nextPage = type === "prev" ? currentPage + -1 : type === "next" && currentPage + 1;
        historySetQuery(searchBy, nextPage);
    };
    
    return(
        <Box className={ classes.controls } >
            <Button
                onClick={ () => handleClick("prev") }
                disabled={ disablePrev }
                variant="contained"
                color="primary"
            >
                <NavigateBefore/>
            </Button>


            <Button
                onClick={ () => handleClick("next") }
                disabled={ disableNext }
                variant="contained"
                color="primary"
                >
                    <NavigateNext/>
                </Button>
        </Box>
    );
};

export default PostsControls;