import { RouterProvider, createBrowserRouter } from 'react-router-dom'; 
import { AboutPage, AccesoriesPage, ContactPage, ErrorPage, Homepage, MainApp, MenPage, NewCollectionPage, ProductView, SearchPage, StorePage, WomenPage } from '../Pages';

const routesConfig = createBrowserRouter([
    {
        path: "/",
        element: <MainApp/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path: '/',
                element: <Homepage/>
            },
            {
                path: 'store',
                element: <StorePage/>
            },
            {
                path:"about",
                element: <AboutPage/>
            },
            {
                path: "contact",
                element: <ContactPage/>
            },
            {
                path: "product/:productNumber",
                element: <ProductView/>
            },
            {
                path: "women",
                element: <WomenPage/>
            },
            {
                path: "men",
                element: <MenPage/>
            },
            {
                path: "search",
                element: <SearchPage/>
            },
            {
                path: 'accesories', 
                element: <AccesoriesPage/>
            }, 
            {
                path: 'new-collection',
                element: <NewCollectionPage/>
            }
        ]
    }
]);



export const AppRouter = () => {
  return (
    <>
        <RouterProvider router={ routesConfig }/>
    </>
    )
}
