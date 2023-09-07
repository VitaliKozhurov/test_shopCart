import '../App.css'
import {Routes,Route} from "react-router-dom";
import {Products} from "../features/product/ui/products.tsx";


function App() {

    return (
        <Routes>
            <Route path={''} element={<Products/>}/>
        </Routes>
    )
}

export default App
