import Badge, {BadgeProps} from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import {FC} from "react";


type Props = {
    totalPrice: number
}

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 50,
        top: 12,
        border: `1px solid ${theme.palette.background.paper}`,
        padding: '0 5px',
    },
}));

export const CustomBadge:FC<Props> = ({totalPrice}) => {
    return (
        <StyledBadge badgeContent={totalPrice} max={100000} color="primary">
            <ShoppingCartIcon  color="inherit"/>
        </StyledBadge>
    );
}