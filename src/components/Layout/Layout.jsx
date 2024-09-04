import Home from "../home"
import Footer from "../MainLayouts/footer"
import { Header } from "../MainLayouts/header"

function Layout() {
    return (<><div className="mt-5">
        <Header />
        <Home/>
        <Footer/>
    </div></>)
}

export default Layout