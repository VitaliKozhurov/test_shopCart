import s from './cart.module.css';
import {useAppSelector} from "../../../app/hooks/hooks.ts";
import {ProductForCart} from "./product/product-for-cart.tsx";
import {getProductsInCart} from "../model/cart-selectors.ts";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import {OrderForm} from "./order-form/order-form.tsx";

export const Cart = () => {
    const products = useAppSelector(getProductsInCart)
    return (
        <>
            <Link to={'/'}>
                <Typography sx={{margin: '30px'}} variant="overline" color="text.secondary">
                    Go to main page
                </Typography>
            </Link>
            <div className={s.cartContainer}>
                <div className={s.cartList}>
                    <h2>Ordered List</h2>
                    <div>
                        {
                            Object.values(products).map(prod => (
                                <ProductForCart key={prod.product.id} {...prod} />
                            ))
                        }
                    </div>
                </div>
                <div className={s.orderField}>
                    <h2>Order Form</h2>
                    <OrderForm/>
                </div>
            </div>
        </>
    );
}