import {collection, getDocs, query} from "firebase/firestore";
import {db} from "../../../firebase.ts";

export type ProductType = {
    id: string
    price: number
    description: string
    photo: string
}
export const fetchToProducts = async (): Promise<ProductType[]> => {
    try {
        const goodsCollection = collection(db, 'goods');
        const goodsQuery = query(goodsCollection);
        const querySnapshot = await getDocs(goodsQuery);
        return querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})) as ProductType[]
    } catch (e) {
        console.log(e)
        return []
    }
}