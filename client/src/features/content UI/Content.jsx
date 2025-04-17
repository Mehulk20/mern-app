import { useLoaderData } from 'react-router-dom'
import { getMovieById } from '../../services/dataCenter'
import ContentDisplay from './ContentDisplay'
import ContentSlide from './ContentSlide'
import ContentSummary from './ContentSummary'

function Content() {
    const item = useLoaderData()

    return (
        <div className="grid w-full auto-rows-auto gap-5 lg:px-0">
            <ContentDisplay />
            <ContentSlide title="Cast and Crew" />
            <ContentSummary />
            <ContentSlide title="More like this" />
        </div>
    )
}

export async function loader({ params }) {
    const { id } = params
    const items = await getMovieById(id)
    return items
}

export default Content
