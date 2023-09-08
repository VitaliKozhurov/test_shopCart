import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {FC} from "react";
import {ProductType} from "../../../product/api/api.ts";
import {IconButton} from "@mui/material";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useAppDispatch} from "../../../../app/hooks/hooks.ts";
import {cartActions} from "../../model/cart-slice.ts";


type Props = {
    product: ProductType,
    count: number
}

export const ProductForCart: FC<Props> = (props) => {
    const {product, count} = props;
    const dispatch = useAppDispatch();

    const addProduct = () => {
        dispatch(cartActions.addProduct({product, count: 1}))
    }

    const removeProduct = () => {
        dispatch(cartActions.removeProduct({id: product.id}))
    }
    return (
        <Card sx={{width: '100%', display: 'flex', marginBottom: '20px', justifyContent: 'space-between'}}>
            <CardMedia
                sx={{width: 100, marginRight: '10px'}}
                component="img"
                alt="product"
                height="100"
                image={product.photo}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={removeProduct} size="small"><RemoveCircleIcon color={'primary'}/></IconButton>
                <Typography variant={"h2"} color={"text.secondary"}>{count}</Typography>
                <IconButton onClick={addProduct} size="small"><AddCircleIcon color={'primary'}/></IconButton>
            </CardActions>
        </Card>
    );
}