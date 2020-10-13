import React from 'react';
import {
    Grid
} from '@material-ui/core';
import SearchBar from "material-ui-search-bar";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    headerName: { flex: 1 },
    typName: { 
        fontSize: '40px',
        fontWeight: 'bolder'
    }
})

const Header = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item className={classes.headerName}>
                <p className={classes.typName}>
                    <span style={{color: "#AF0404"}}>A</span>
                    <span >S</span>
                    <span style={{color: "#414141"}}>K</span>
                </p>
            </Grid>
            <Grid item>
                <SearchBar
                    placeholder="search..."
                />
            </Grid>
        </Grid>
    )
}

export default Header;