import ItemCard from '../ui/ItemCard'
import { getMovies } from '../services/dataCenter'
import { useLoaderData } from 'react-router-dom'

function FilmsPage() {
    const movies = useLoaderData()

    return (
        <div className="grid grid-cols-2 grid-rows-[auto] gap-3 px-2 md:grid md:grid-cols-5 md:grid-rows-[auto] md:gap-3 lg:px-0 xl:grid xl:grid-cols-6 xl:grid-rows-[auto] xl:gap-3">
            {movies.map((movie) => (
                <ItemCard movie={movie} key={movie._id} />
            ))}
        </div>
    )
}

export async function loader() {
    const items = await getMovies()
    return items
}

export default FilmsPage
