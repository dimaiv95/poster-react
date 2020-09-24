import React, { Fragment } from "react";
import { useGetPostsSearchByName } from "../../hooks";
import Post from "../post";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import PostsControls from "../post-controls";
import Spiner from "../spiner";
import Empty from "../empty";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
        minHeight: `calc(100vh - (64px + ${theme.spacing(6)}px))`,
    },
    h3: {
        marginBottom: theme.spacing(2),
    },
    searchBy: {
        color: theme.palette.primary.main
    }
}));

const PostsView = ({ data, searchBy }) => {
    const classes = useStyles();
    const { Search } = data;
    return(
        <Box className={ classes.root }>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                        <Typography
                            variant="h4"
                            component="h3"
                            className={ classes.h3 } >
                                Searching by: <span className={ classes.searchBy } >{ searchBy }</span>
                        </Typography> 
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    {
                        Search.map((data, i) => {
                            return(
                                <Post key={ i } { ...data } />
                            );
                        })
                    }
                </Grid>
                <PostsControls />
            </Container>
        </Box>
    );
};

const Posts = ({ searchBy, currentPage }) => {   
    const { loading, data, error } = useGetPostsSearchByName(searchBy, currentPage);
    const hasData = (!loading && !error);
    
    const errorComponent = error ? <Empty /> : null;
    const loadingComponent = loading ? <Spiner /> : null;
    const emptyComponent = hasData && !data ? <Empty /> : null;
    const dataComponent = hasData && data ? <PostsView data={ data } searchBy={ searchBy } /> : null;
    
    return(
        <Fragment>
            { loadingComponent }
            { errorComponent }
            { emptyComponent }
            { dataComponent }
        </Fragment>
    );
};

export default React.memo(Posts);