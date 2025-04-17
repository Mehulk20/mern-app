import TopBitesItem from './TopBitesItem'

function TopBites() {
    return (
        <section className="md:border-bites md:gird mx-auto grid w-full grid-flow-row bg-gray-100 md:grid-flow-col md:gap-4">
            <TopBitesItem />
            <TopBitesItem />
            <TopBitesItem />
        </section>
    )
}

export default TopBites
