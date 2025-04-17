function FooterNav() {
    return (
        <div className="gird fluid-lg mx-3 w-auto grid-rows-1 text-white lg:mx-auto lg:max-w-5xl">
            <footer className="flex gap-2 py-6">
                <nav className="w-36">
                    <h3 className="font-semibold">FantasyZone</h3>
                    <ul className="footer-list">
                        <li>ABOUT</li>
                        <li>TEAM</li>
                        <li>CONTACT US</li>
                    </ul>
                </nav>
                <nav className="w-36 border-l-[1px] border-gray-600 px-3">
                    <h3 className="font-semibold">Follow Us</h3>
                    <ul className="footer-list uppercase">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>YouTube</li>
                        <li>X</li>
                    </ul>
                </nav>
            </footer>
            <footer className="flex justify-between gap-2 border-t-[1px] border-gray-600 py-4">
                <div>
                    <h3>NewsLetter Sign Up</h3>
                </div>
                <div>
                    <h3>Have a Tip?</h3>
                </div>
            </footer>
        </div>
    )
}

export default FooterNav
