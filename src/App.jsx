import NavBar from "./components/navbar/NavBar";
import Home from "./components/pages/home/Home";
import "./index.css"


function App() {
    return (
        <div>
            <NavBar/>
            <div className="parallax"></div>
            <Home/>

            <div className="parallax1"></div>

        </div>
    );
}

export default App;
