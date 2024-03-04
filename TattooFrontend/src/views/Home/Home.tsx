import { Link } from "react-router-dom"
import NavBarTattoo from "../../components/NavBar/NavBar"
import BodyHome from "./BodyHome/BodyHome"
import HeaderHome from "./HeaderHome/HeaderHome"

function Home() {
    return(
        <div>
            <NavBarTattoo/>
            <HeaderHome/>
            <BodyHome/>
            
            <div><Link to={"/login"}> Login here</Link></div>
            <Link to={"/register"}> Register here</Link>
        </div>
    )
}

export default Home