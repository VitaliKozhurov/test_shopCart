import {ChangeEvent, FC, useState} from "react";
import {ProductType} from "../../api/api.ts";
import {Button, Card, CardActions, CardContent, CardMedia, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useAppDispatch} from "../../../../app/hooks/hooks.ts";
import {cartActions} from "../../../cart/model/cart-slice.ts";

export const Product: FC<ProductType> = (props) => {
    const {photo, description, price} = props
    const [count, setCount] = useState(1);
    const setProductCount = (e: ChangeEvent<HTMLInputElement>) => {
        const count = Number(e.currentTarget.value);
        if (Number(count) < 1) return
        setCount(Number(count))
    };
    const dispatch = useAppDispatch();
    const onOrderProductHandler = () => {
        dispatch(cartActions.addProduct({product: props, count: count}))
        setCount(1)
    }
    console.log(count)

    const style = {
        width: '320px',
        height: '350px',
        padding: '15px'
    }
    return (
        <div style={style}>
            <Card sx={{maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column'}}>
                <CardMedia
                    sx={{height: 200}}
                    image={photo}
                    title="green iguana"
                />
                <CardContent sx={{padding: '20px'}}>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Price: {price} byn
                    </Typography>
                </CardContent>
                <CardActions sx={{padding: '20px'}}>
                    <Button
                        onClick={onOrderProductHandler}
                        sx={{marginRight: '50px'}}
                        size="small"
                        variant={"contained"}
                    >
                        Order
                    </Button>
                    <TextField
                        size={"small"}
                        id="outlined-number"
                        label="Count of products"
                        type="number"
                        value={count}
                        onChange={setProductCount}
                    />
                </CardActions>
            </Card>
        </div>

    );
}