import { Link } from 'react-router-dom'

function ItemCard({ movie }) {
    const { _id, name, coverImage, rating, releaseDate } = movie

    return (
        <div className="mb-2 w-full max-w-sm overflow-hidden rounded-lg bg-[#252422] pb-2 shadow-md">
            <div>
                <Link to={`/films/${_id}`}>
                    <img
                        src={coverImage}
                        alt=""
                        className="h-56 w-full object-center"
                    />
                </Link>
            </div>
            <div className="grid h-full grid-rows-[8rem_3rem] flex-col gap-1 p-3">
                <div className="grid h-full grid-rows-4 gap-3 object-contain">
                    <p className="fluid-sm text-gray-400">{releaseDate}</p>
                    <div className="flex justify-between">
                        <span className="fluid-md font-bold text-yellow-500">
                            <i className="bx bxs-star text-xl">
                                <p className="ml-[2px] inline-block text-white">
                                    {rating}
                                </p>
                            </i>
                        </span>
                        <span className="fluid-md font-bold text-yellow-500">
                            <i className="bx bxs-heart text-xl text-red-800"></i>
                        </span>
                    </div>
                    <h2 className="fluid-lg md:text-md row-span-2 font-bold text-white">
                        {name}
                    </h2>
                </div>
                <div>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fluid-md mt-4 inline-block w-full rounded-lg bg-blue-500 px-4 py-2 text-center text-white hover:bg-blue-600"
                    >
                        Watch Trailer
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
