import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Spiner from "../components/spiner";
import Empty from "../components/empty";

import { useGetPostById } from "../hooks";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
        minHeight: `calc(100vh - (64px + ${theme.spacing(6)}px))`,
    },
    cover: {
        display: "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: fade(theme.palette.common.black, 0.85),
        zIndex: -1,
        [theme.breakpoints.down("xs")]: {
            display: "block"
        }
    },
    background: {
        display: "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        objectFit: "cover",
        objectPosition: "top center",
        zIndex: -2,
        [theme.breakpoints.down("xs")]: {
            display: "block"
        }
    },
    posterItem: {
        [theme.breakpoints.down("xs")]: {
            display: "none"
        }
    },
    poster: {
        width: "100%",
        height: "auto",
        maxWidth: "100%",
        maxHeight: "100%",   
        borderRadius: theme.shape.borderRadius,
    },
    h1: {
        [theme.breakpoints.down("xs")]: {
            fontSize: "3rem",
            color: theme.palette.common.white
        }
    },
    cell: {
        [theme.breakpoints.down("xs")]: {
            color: theme.palette.common.white
        }
    },
    rating: {
        width: "100px"
    }
}));

const PostView = ({ data }) => {
    const classes = useStyles();
    const { Title, Poster, Country, Director, Actors, Genre, Language, Plot, Writer, Year, imdbRating } = data;

    const rows = [
        { label: "Rating", value: imdbRating },
        { label: "Year", value: Year },
        { label: "Genre", value: Genre },
        { label: "Country", value: Country },
        { label: "Language", value: Language },
        { label: "Director", value: Director },
        { label: "Actors", value: Actors },
        { label: "Plot", value: Plot },
        { label: "Writer", value: Writer },
    ];

    return(
        <Box className={ classes.root }>
            <div className={ classes.cover }></div>
            <img src={ Poster } className={ classes.background } />
            <Container>
                <Grid container spacing={3} >
                    <Grid item xs={12} >
                        <Typography variant="h2" component="h2" className={ classes.h1 } >
                            { Title }
                        </Typography>
                    </Grid>
                    <Grid item sm={4} className={ classes.posterItem } >
                        <img src={ Poster } className={ classes.poster } />
                    </Grid>
                    <Grid item sm={8} >
                        <Table>
                            <TableBody>
                                { rows.map(({ label, value }, i) => (
                                    <TableRow key={ i }>
                                        <TableCell component="td" scope="row" className={ classes.cell } >
                                            <strong>{ label }:</strong> { value }
                                            { label === "Rating" && <LinearProgress className={ classes.rating } variant="determinate" value={ value * 10 } /> }
                                        </TableCell>
                                    </TableRow>
                                )) }
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

const SinglePostPage = () => {
    const { id } = useParams();
    const { loading, data, error } = useGetPostById(id);

    const hasData = (!loading && !error);
    
    const errorComponent = error ? <Empty /> : null;
    const loadingComponent = loading ? <Spiner /> : null;
    const emptyComponent = hasData && !data ? <Empty /> : null;
    const dataComponent = hasData && data ? <PostView data={ data } /> : null;
    
    return(
        <Fragment>
            { errorComponent }
            { loadingComponent }
            { emptyComponent }
            { dataComponent }
        </Fragment>
    );
};

export default React.memo(SinglePostPage);