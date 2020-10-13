import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Navbar from '../../components/Navbar';


const useStyles = makeStyles({
    root: { padding: "3rem 2rem 0" },
    navbar: {
        position: 'fixed',
        bottom: 0,
        width: '100%'
    }
})

const Template = (props) => {
    const classes = useStyles();
    return (
        <Grid container direction="column">
            <Grid item>
                {props.children}
            </Grid>
            <Grid item className={classes.navbar}>
                <Navbar menu={props.menu} />
            </Grid>
        </Grid>
    )
}

export default Template;