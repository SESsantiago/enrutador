import CatalogPage from '../pages/CatalogPage/CatalogPage'
import HomePage from '../pages/HomePage/HomePage'
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage'
import App from '../App'

export const router_app = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "home",
                element: <HomePage />
            },
            {
                path: "catalog",
                element: <CatalogPage />
            },
            {
                path: "product-detail",
                element: <ProductDetailPage />
            }
        ]
    }
]