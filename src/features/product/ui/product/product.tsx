import {FC} from "react";
import {ProductType} from "../../api/api.ts";

export const Product: FC<ProductType> = ({photo, description, price}) => {
    return (
        <div>
            <div>
                <img src={photo} alt="asd"/>
            </div>
            <p>{description}</p>
            <span>{price}</span>
            <button>Order product</button>
        </div>
    );
}