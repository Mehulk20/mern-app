import ContentCard from './ContentCard'

function CastAndCrew({ title }) {
    return (
        <section className="overflow-hidden bg-slate-100 py-3">
            <h3 className="px-3 py-2 text-3xl font-bold">{title}</h3>
            <div className="no-scrollbar flex gap-3 overflow-x-scroll px-3">
                <ContentCard />
                <ContentCard />
                <ContentCard />
                <ContentCard />
                <ContentCard />
                <ContentCard />
                <ContentCard />
                <ContentCard />
                <ContentCard />
                <ContentCard />
                <ContentCard />
            </div>
        </section>
    )
}

export default CastAndCrew
