import {
    alpha,
    AppBar,
    Avatar,
    Badge,
    InputBase,
    makeStyles,
    Toolbar,
    Typography,
} from "@material-ui/core";

import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    logoLg: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        }

    },
    logoSm: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    }
}))

const Navbar = () => {
    const classes = useStyles()
    return (
        <AppBar>
            <Toolbar>
                <Typography variant='h6' className={classes.logoLg}>
                    Jack
                </Typography>
                <Typography variant='h6' className={classes.logoSm}>
                    SOREN
                </Typography>
                <div className={classes.search}>
                    <Search />
                    <InputBase placeholder="Search.." />
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
