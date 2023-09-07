import '../App.css'
import {fetchToGoods} from "../features/api/api.ts";


function App() {

    const send = () => {
        const res = fetchToGoods();
        res.then(data => console.log(data))
    }

    return (
        <>
            <h1>Hello</h1>
            <button>
                add info in db
            </button>
            <button onClick={send}>
                Read data
            </button>
        </>
    )
}

export default App
