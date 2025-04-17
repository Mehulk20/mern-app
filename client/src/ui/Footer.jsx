import FooterCopyRight from './FooterCopyRight'
import FooterNav from './FooterNav'

function Footer() {
    return (
        <footer className="my-2 grid w-full grid-rows-[1fr_auto]">
            <div className="bg-slate-950">
                <FooterNav />
            </div>
            <div>
                <FooterCopyRight />
            </div>
        </footer>
    )
}

export default Footer
