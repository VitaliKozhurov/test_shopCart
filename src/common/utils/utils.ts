import {FormStateType} from "../../features/cart/ui/order-form/order-form.tsx";
import {ProductType} from "../../features/product/api/api.ts";

type LocalStorageData = { products: { product: ProductType, count: number }[], userData: FormStateType }

export const setToLocalStorage = (lsData: LocalStorageData) => {
    localStorage.setItem("cartState", JSON.stringify(lsData));
};

// // Функция выгрузки значения из LocalStorage
// export const getFromLocalStorage = () => {
//     const values = localStorage.getItem("state");
//     if (values) {
//         return JSON.parse(values);
//     }
// };