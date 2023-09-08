import '../App.css'
import {Routes,Route} from "react-router-dom";
import {Products} from "../features/product/ui/products.tsx";
import {Header} from "../common/components/header/header.tsx";


function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path={''} element={<Products/>}/>
            </Routes>
        </>

    )
}

export default App
