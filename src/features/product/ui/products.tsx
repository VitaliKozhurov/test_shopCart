import {useAppDispatch} from "../../../app/hooks/hooks.ts";
import {useEffect} from "react";
import {productsThunk} from "../model/products-slice.ts";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/store.ts";
import {ProductType} from "../api/api.ts";
import {Product} from "./product/product.tsx";

export const Products = () => {
    const dispatch = useAppDispatch();
    const products = useSelector<AppRootStateType, ProductType[]>(state => state.products)
    useEffect(()=>{
        dispatch(productsThunk.getProducts())
    },[])

    return (
      <div>
          {
              products.map(prod=>(
                  <Product key={prod.id} {...prod}/>
              ))
          }
      </div>
    );
}