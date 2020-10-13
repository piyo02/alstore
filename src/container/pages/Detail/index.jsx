import React from 'react';
import { Button, Grid, IconButton, Link } from '@material-ui/core';
import { KeyboardArrowLeft, WhatsApp } from '@material-ui/icons';

const DetailPage = () => {
    return (
        <Grid container direction="column">
            <Grid item container>
                <Grid item>
                    <IconButton>
                        <KeyboardArrowLeft />
                    </IconButton>
                </Grid>
                <Grid item>
                    <p>
                        <span style={{color: "#AF0404"}}>A</span>
                        <span >S</span>
                        <span style={{color: "#414141"}}>K</span>
                    </p>
                </Grid>
            </Grid>
            <Grid item>
                <p>Carousel</p>
            </Grid>
            <Grid item>
                <p>Card</p>
            </Grid>
            <Grid item container>
                <Grid item>
                    <p>Rp. 10.000.000</p>
                </Grid>
                <Grid>
                    <Link href={`https://wa.me/082287974030`}>
                        <Button
                            variant="contained"
                            color="default"
                            size="small"
                            startIcon={<WhatsApp />}
                        >
                            Pesan Sekarang
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default DetailPage;