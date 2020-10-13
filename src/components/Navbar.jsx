import React, { Component } from 'react';
import { 
    BottomNavigation,
    BottomNavigationAction,
} from '@material-ui/core';
import {
    AccountCircleOutlined,
    HeadsetOutlined,
    PhoneIphoneOutlined,
} from '@material-ui/icons';
import { withStyles } from "@material-ui/styles";
import { Link } from 'react-router-dom';

const styles = {
    root: {
        color: "action",
        "&$selected": {
            color: "black",
            fontWeight: 'bold'
        }
    },
    selected: {},
}

class Navbar extends Component {
    state = {
        value: this.props.menu || 'profile'
    }
    handleChange = (event, menu) => {
        this.setState({
            ...this.state,
            value: menu
        })
    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <BottomNavigation
                value={value}
                onChange={(event, menu) => this.handleChange(event, menu)}
                style={{backgroundColor: '#FF0000'}}
            >
                <BottomNavigationAction classes={ classes } label="Handphone" value="product" icon={<PhoneIphoneOutlined />} component={Link} to={'/'} />
                <BottomNavigationAction classes={ classes } label="Aksesoris" value="accessories" icon={<HeadsetOutlined />} component={Link} to={'/accessories'}/>
                <BottomNavigationAction classes={ classes } label="Toko" value="profile" icon={<AccountCircleOutlined />} component={Link} to={'/profile'}/>
            </BottomNavigation>
        )
    }
}

export default withStyles(styles)(Navbar);