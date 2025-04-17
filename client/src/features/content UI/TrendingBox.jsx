function TrendingBox({ direction }) {
    return (
        <div
            className={`flex w-full flex-col overflow-hidden px-2 py-2 ${direction}`}
        >
            <div className="h-[18rem] w-full border-2 border-red-500">
                <img src="" alt="" />
            </div>
            <div className="text-center">
                <h3 className="text-heading font-semibold uppercase">
                    Interview
                </h3>
                <h2 className="text-[1.2rem] font-bold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Illum, perspiciatis.
                </h2>
                <p className="text-[1rem]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nihil fugiat aut vitae facilis quis aperiam adipisci, ut
                    doloribus incidunt suscipit!
                </p>
                <p className="text-[.8rem] font-semibold">Auther</p>
            </div>
        </div>
    )
}

export default TrendingBox
