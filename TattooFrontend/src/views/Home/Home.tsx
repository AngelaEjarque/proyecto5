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
            
            <Link to={"/test"}> return to test</Link>
        </div>
    )
}

export default Home