import {collection, getDocs, query} from "firebase/firestore";
import {db} from "../../firebase.ts";

type GoodType = {
    id: string
    price: number
    description: string
    photo: string
}
export const fetchToGoods = async (): Promise<GoodType[]> => {
    try {
        const goodsCollection = collection(db, 'goods');
        const goodsQuery = query(goodsCollection);
        const querySnapshot = await getDocs(goodsQuery);
        console.log(querySnapshot)
        return querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})) as GoodType[]
    } catch (e) {
        console.log(e)
        return []
    }
}