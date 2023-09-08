import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {CustomBadge} from "./Baddge.tsx";
import {useAppSelector} from "../../../app/hooks/hooks.ts";
import {getTotalPrice} from "../../../features/cart/model/cart-selectors.ts";
import {Link} from "react-router-dom";

export const Header = () => {
    const totalPrice = useAppSelector(getTotalPrice);
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Online Shop
                    </Typography>
                    <Link to={'/cart'} style={{color: '#fff'}}>
                        <CustomBadge totalPrice={totalPrice}/>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}