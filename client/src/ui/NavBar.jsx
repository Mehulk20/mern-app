import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { useState } from 'react'

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className="relative border-slate-500 py-1 md:static md:border-y-[1px]">
            <i
                className="bx bx-menu inline text-4xl md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            ></i>
            <nav
                className={`absolute ${isMenuOpen ? 'flex flex-col-reverse gap-2' : 'hidden'} rounded-sm bg-slate-200 px-1 py-4 md:static md:flex md:flex-row md:items-center md:justify-end md:bg-white md:py-0`}
            >
                <ul className="list grow text-xl font-semibold lg:ml-[13.5rem] lg:flex lg:place-content-center">
                    <li className="list-items">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="list-items">
                        <Link to="/films">Films</Link>
                    </li>
                    <li className="list-items">
                        <Link to="/tv">Tv</Link>
                    </li>
                    <li className="list-items">
                        <Link to="/media">Videos</Link>
                    </li>
                </ul>
                <SearchBar />
            </nav>
        </div>
    )
}

export default NavBar
