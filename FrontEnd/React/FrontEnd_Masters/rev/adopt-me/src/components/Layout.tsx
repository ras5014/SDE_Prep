import { Outlet, Link } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <header>
                <Link to="/">Adopt Me!</Link>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
