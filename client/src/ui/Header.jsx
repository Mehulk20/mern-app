import { Link } from 'react-router-dom'
import NavBar from './NavBar'

function Header() {
    return (
        <header className="mx-1 my-2 flex flex-row-reverse items-start border-y-[1px] border-slate-500 transition-all md:block md:border-0">
            <div className="flex w-full items-center justify-center pb-1 text-center">
                <div className="flex-grow pl-10 text-4xl">
                    <Link to="/">
                        Fantasy
                        <span className="font-extrabold">Zone</span>
                    </Link>
                </div>
                <div className="mr-2 self-center rounded-sm px-1 py-1 text-center font-semibold hover:cursor-pointer hover:bg-black hover:text-white">
                    Log in
                </div>
            </div>
            <div className="self-start">
                <NavBar />
            </div>
        </header>
    )
}

export default Header
