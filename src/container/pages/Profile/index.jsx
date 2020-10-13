import React from 'react';
import { Card, CardContent, CardMedia, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { CreditCardOutlined, Instagram, PhoneOutlined } from '@material-ui/icons';

import Template from '../../template';
import background from './../../../assets/images/store.png';

const useStyles = makeStyles({
    card: {
        borderRadius: 20,
        boxShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                    0 12.5px 10px rgba(0, 0, 0, 0.06),
                    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                    0 100px 80px rgba(0, 0, 0, 0.12)`,
        position: 'fixed',
        bottom: 120,
        left: '50%',
        transform: 'translate(-50%, 0)',
        padding: '0 20px',
        minWidth: 360
    },
    cardContent: { textAlign: 'center', margin: '0.8rem 0 0.4rem' },
    cardMedia: { margin: 'auto' },
})

const ProfilePage = () => {
    const classes = useStyles();
    return (
        <Template children={
            <Grid item container direction="column">
                <Grid item>
                    <Card>
                        <CardMedia
                            className={classes.cardMedia}
                            image={background}
                            style={{ height: '70vh', backgroundPosition: 'center' }}
                        />
                    </Card>
                </Grid>
                <Grid item>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent} >
                            <p className="grey bolder" style={{ fontSize: 36 }}>AL Store Kendari</p>
                            <p className="dark-red bold">Hp Seken, Berkualitas & Murah</p>
                            <p className="bold" style={{ margin: '30px 0 10px' }}>Jl. Saranani, Korumba, Kec. Mandonga, Kendari, Sulawesi Tenggara</p>

                            <Grid container direction="column">
                                <Grid item container justify="center">
                                    <Grid item style={{ marginRight: 40 }}>
                                        <Instagram />
                                    </Grid>
                                    <Grid item>
                                        <Link href="https://www.instagram.com/alstorekendari/" color="textPrimary" >AL Store Kendari</Link>
                                    </Grid>
                                </Grid>
                                <Grid item container justify="center" alignItems="center">
                                    <Grid item style={{ marginRight: 40 }}>
                                        <CreditCardOutlined />
                                    </Grid>
                                    <Grid item>
                                        <p>BCA 7245077009 <br /> (Muhajid AlGhifari)</p>
                                    </Grid>
                                </Grid>
                                <Grid item container justify="center" style={{marginTop: 5}}>
                                    <Grid item style={{ marginRight: 40 }}>
                                        <PhoneOutlined />
                                    </Grid>
                                    <Grid item>
                                        <Link href="tel: 082287974030" color="textPrimary" >082287974030</Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        } />
    )
}

export default ProfilePage;