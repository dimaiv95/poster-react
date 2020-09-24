import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    media: {
        backgroundPosition: "center top",
        minHeight: 200,
    },
    link: {
        textDecoration: "none"
    },
    title: {
        textDecoration: "none",
        color: theme.palette.common.black
    }
}));

const Post = ({ imdbID, Title, Poster }) => {
    const classes = useStyles();

    return(
        <Grid item xs={12} sm={6} md={4} lg={3} >
            <Card className={classes.root}>
                <CardActionArea>
                    <Link to={`${imdbID}`} className={classes.link}>
                        <CardMedia
                            className={classes.media}
                            image={ Poster }
                            title={ Title }
                        />
                        <CardContent>
                            <Typography gutterBottom className={classes.title} variant="h5" component="h2">
                                { Title }
                            </Typography>
                        </CardContent>
                    </Link>
                </CardActionArea>
                <CardActions>
                    <Link to={`${imdbID}`} className={classes.link} ><Button size="small" color="primary">Read More</Button></Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default React.memo(Post);