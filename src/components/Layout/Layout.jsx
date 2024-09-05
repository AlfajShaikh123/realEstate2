import { Outlet } from "react-router-dom"
import Home from "../home"
import Footer from "../MainLayouts/footer"
import { Header } from "../MainLayouts/header"

function Layout() {
    return (<><div className="mt-5">
        <Header />
        <Outlet />
        <Footer />
    </div></>)
}

export default Layout