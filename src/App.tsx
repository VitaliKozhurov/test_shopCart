import './App.css'
import {db} from "./firebase.ts";
import {collection, addDoc, getDocs} from "firebase/firestore";

function App() {

    const add = async () =>{
        const docRef = await addDoc(collection(db,'test'), {
            name:"Test name",
            secondName:'test second name'
        })
        console.log(docRef)
    }
    const read = async ()=>{
        const querySnapshot = await getDocs(collection(db, "test"));
        const data = []
        querySnapshot.forEach((doc) => {
            data.push({id:doc.id, ...doc.data()})
        });
        console.log(data)
    }
    return (
        <>
            <h1>Hello</h1>
            <button onClick={add}>
                add info in db
            </button>
            <button onClick={read}>
                Read data
            </button>
        </>
    )
}

export default App
