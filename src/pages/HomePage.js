import React, { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistorySetQuery } from "../hooks";

import { setQuery } from "../store/actions";

import Posts from './../components/posts';
import Empty from "./../components/empty";

const HomePage = ({ searchBy: defaultSearchBy, currentPage: defaultCurrentPage }) => {
    const { searchBy, currentPage } = useSelector(state => state);
    const dispatch = useDispatch();
    const { search } = useLocation();
    const historySetQuery = useHistorySetQuery();

    useEffect(() => {
        if(!search){
            historySetQuery(defaultSearchBy, defaultCurrentPage, "replace");
        }
        if(search){
            const decodeUrl = decodeURI(search).slice(1).split("&");
            const [ searchByLocation, currentPageLocation ] = search && decodeUrl.map(q => q.split("=")[1]);

            dispatch(setQuery({
                searchBy: searchByLocation,
                currentPage: +currentPageLocation,
            }));           
        }
    }, [search]);

    return( 
        <Fragment>
            { searchBy && <Posts searchBy={ searchBy } currentPage={ currentPage } /> }
            { !searchBy && <Empty /> }
        </Fragment>
    );
};

export default HomePage;