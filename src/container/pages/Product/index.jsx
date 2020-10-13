import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CardProduct from '../../../components/CardProduct';
import Header from '../../../components/Header';

import productList from '../../../assets/data/products.js';
import accesoriceList from '../../../assets/data/accesorices.js';
import Template from '../../template';



const useStyles = makeStyles({
    root: { padding: "3rem 2rem 0" },
    type: { margin: "1rem 0" },
    navbar: {
        position: 'fixed',
        bottom: 0,
        width: '100%'
    }

})

const Product = (props) => {
    const data = props.data;
    const classes = useStyles();
    const datas = (data.data === 'product') ? productList : accesoriceList;
    return (
        <Template children={
            <Grid item container direction="column" className={classes.root}>
                <Grid item>
                    <Header />
                </Grid>
                <Grid item className={classes.type}>
                    <h3>{data.title}</h3>
                </Grid>
                <Grid item container spacing={2}>
                    {
                        datas && datas.map(data => {
                            return (
                                <Grid item md={2} sm={3} xs={6} key={data.id}>
                                    <CardProduct data={data} />
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </Grid>
        } menu={data.data} />
    )
}

export default Product;
