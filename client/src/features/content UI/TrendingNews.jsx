import Button from '../../ui/Button'
import LatestUpdates from './LatestUpdates'
import TrendingBox from './TrendingBox'

function TrendingNews() {
    return (
        <section className="grid-row-2 grid w-full grid-flow-row px-2 py-6 md:grid md:grid-flow-col md:auto-rows-auto md:grid-cols-3 md:gap-1">
            <div className="border-trending sm:col-span-2 sm:grid sm:grid-cols-2 lg:inline-block">
                <TrendingBox direction="sm:col-span-2" />
                <TrendingBox />
                <TrendingBox />
            </div>
            <div className="flex flex-col border-y-4 border-[#283618] sm:col-span-2 md:ml-6 md:mr-1 md:border-none">
                <LatestUpdates />
                <LatestUpdates />
                <LatestUpdates />
                <LatestUpdates />
                <LatestUpdates />
                <Button mode="button-primary" />
            </div>
        </section>
    )
}

export default TrendingNews
