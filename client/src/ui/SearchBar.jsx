function SearchBar() {
    return (
        <div className="relative px-1">
            <i className="bx bx-search absolute left-2 top-[0.20rem] text-xl font-semibold text-gray-500"></i>
            <input
                type="search"
                name="search"
                placeholder="type..."
                className="rounded-[5px] border-[1px] border-black py-[.20rem] pl-7 outline-none"
            />
        </div>
    )
}

export default SearchBar
