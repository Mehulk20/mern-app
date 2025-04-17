import { Outlet } from 'react-router-dom'
import Header from '../ui/Header'
import Footer from '../ui/Footer'
function AppLayout() {
    return (
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">
            <Header />
            <div>
                <main className="mt-1 w-full md:mx-auto md:max-w-5xl">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default AppLayout
