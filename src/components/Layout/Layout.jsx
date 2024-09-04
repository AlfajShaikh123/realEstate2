import Home from "../home"
import { Header } from "../MainLayouts/header"

function Layout() {
    return (<><div className="mt-5">
        <Header />
        <Home/>
    </div></>)
}

export default Layout