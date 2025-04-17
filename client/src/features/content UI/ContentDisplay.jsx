function ContentDisplay() {
    return (
        <section className="grid grid-cols-3 grid-rows-[1fr_auto] gap-2 px-3">
            <div className="col-span-3">
                <img
                    src="https://dippedindoodles.in/cdn/shop/collections/1_21d28446-d93c-4a6b-b047-ed649eee7a75.jpg?v=1711350488"
                    alt=""
                />
            </div>
            <div className="col-span-3 flex items-center justify-between">
                <div className="">
                    <h1 className="text-3xl font-bold">Harry Potter</h1>
                    <ul className="flex gap-3 font-semibold">
                        <li>2010</li>
                        <li>PG</li>
                        <li>1h 30m</li>
                    </ul>
                </div>
                <div className="4">
                    <ul className="flex gap-3 text-3xl font-semibold">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-heart"></i>
                    </ul>
                </div>
                <div className="">
                    <ul className="list-content my-1">
                        <li>Fantasy</li>
                        <li>Sci-fi</li>
                        <li>Thriller</li>
                        <li>List</li>
                        <li>List</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ContentDisplay
