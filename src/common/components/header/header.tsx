import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {CustomBadge} from "./Baddge.tsx";
import {useAppSelector} from "../../../app/hooks/hooks.ts";
import {getTotalPrice} from "../../../features/cart/model/cart-selectors.ts";

export const Header = () => {
    const totalPrice = useAppSelector(getTotalPrice);
    console.log(totalPrice)
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Cart
                    </Typography>
                    <CustomBadge totalPrice={totalPrice}/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}