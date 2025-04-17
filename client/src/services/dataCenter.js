import config from '../services/config'

export async function getMovies() {
    const { apiUrl } = config
    const res = await fetch(`${apiUrl}/movies`)

    if (!res.ok) throw Error('Failed to fetch data')

    const { data } = await res.json()

    return data
}

export async function getMovieById(id) {
    const { apiUrl } = config
    const res = await fetch(`${apiUrl}/movies/${id}`)

    if (!res.ok) throw Error('Failed to fetch data')

    const { data } = await res.json()

    return data
}
