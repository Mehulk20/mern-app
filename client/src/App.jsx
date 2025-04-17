import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FilmsPage from './pages/FilmsPage'
import TvPage from './pages/TvPage'
import MediaPage from './pages/MediaPage'
import AppLayout from './ui/AppLayout'
import Content from './features/content UI/Content'
import { loader as movieLoader } from './pages/FilmsPage'
import { loader as movieLoaderById } from './features/content UI/Content'
function App() {
    const router = createBrowserRouter([
        {
            element: <AppLayout />,
            children: [
                { path: '/', element: <HomePage /> },
                { path: '/films', element: <FilmsPage />, loader: movieLoader },
                { path: '/tv', element: <TvPage /> },
                { path: '/media', element: <MediaPage /> },
                {
                    path: '/films/:id',
                    element: <Content />,
                    loader: movieLoaderById,
                },
            ],
        },
    ])

    return <RouterProvider router={router} />
}

export default App
