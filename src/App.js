import React from "react";
import { Provider } from "react-redux";

import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PostsAPIService from "./service";
import { PostsAPIProvider } from "./contexts";

import store from "./store";

import Panel from "./components/panel";
import Box from '@material-ui/core/Box';
import { HomePage, SinglePostPage, NotFoundPage } from "./pages";

import "./App.scss";

const postsAPIService = new PostsAPIService();

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: blue[500],
        }
    }
});

const useStyles = makeStyles((theme) => ({
    box: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        paddingTop: `calc(64px + ${theme.spacing(3)}px)`,
        paddingBottom: `${theme.spacing(3)}px`,
        boxSizing: "border-box"
    }
}));

const App = () => {
    const classes = useStyles();

    return (
        <Provider store={ store }>
            <PostsAPIProvider value={ postsAPIService }>
                <ThemeProvider theme={ theme }>
                    <Router>
                        <Panel />
                        <Box className={ classes.box }>
                            <Switch>
                                <Route path="/" exact render={ () => <HomePage searchBy={"Marvel"} currentPage={1} /> }/>
                                <Route path="/:id" exact component={ SinglePostPage } />
                                <Route component={ NotFoundPage } />
                            </Switch>
                        </Box>
                    </Router>   
                </ThemeProvider>
            </PostsAPIProvider>
        </Provider>
    );
};

export default App; 