import '../App.css'
import {Routes,Route} from "react-router-dom";
import {Products} from "../features/product/ui/products.tsx";
import {Header} from "../common/components/header/header.tsx";
import {Cart} from "../features/cart/ui/cart.tsx";


function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path={''} element={<Products/>}/>
                <Route path={'/cart'} element={<Cart/>}/>
            </Routes>
        </>

    )
}

export default App
