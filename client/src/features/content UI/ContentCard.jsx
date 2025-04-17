function ContentCard() {
    return (
        <div className="my-2 min-w-[150px] snap-start overflow-hidden rounded-2xl shadow-md transition-transform hover:scale-105 sm:min-w-[180px] md:min-w-[170px]">
            <img src="#" alt="" className="h-56 w-full object-cover" />
            <div className="bg-[#252422] p-3">
                <h3 className="truncate text-lg font-semibold text-gray-300">
                    name
                </h3>
                <p className="text-gray-4 00 mt-1 truncate text-sm">
                    character
                </p>
            </div>
        </div>
    )
}

export default ContentCard
