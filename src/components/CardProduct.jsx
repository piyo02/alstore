import React from 'react';
import { Button, Card, CardContent, CardMedia, Link } from '@material-ui/core';
import { InfoOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    button: { marginTop: '1rem' },
    card: {
        borderRadius: 20,
        boxShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                    0 12.5px 10px rgba(0, 0, 0, 0.06),
                    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                    0 100px 80px rgba(0, 0, 0, 0.12)`,
    },
    cardContent: { textAlign: 'center', margin: '0.8rem 0 0.4rem' },
    cardMedia: { margin: 'auto' },
    title: {color: '#FF0000', fontSize: '20px'}
})
const CardProduct = (props) => {
    const classes = useStyles();
    const data = props.data;
    return (
        <Card className={classes.card}>
            <CardMedia 
                className={classes.cardMedia}
                image={data.images[0]}
                style={{ height: '200px' }}
            />
            <CardContent className={classes.cardContent} >
                <h4 className={classes.title}>{data.title}</h4>
                <h5>Rp. {new Intl.NumberFormat().format(data.price)}</h5>
                <Link href={`/detail`}>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="default"
                        size="small"
                        startIcon={<InfoOutlined />}
                    >
                        Detail
                    </Button>
                </Link>
            </CardContent>
        </Card>
    )
}

export default CardProduct;