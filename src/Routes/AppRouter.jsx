import { RouterProvider, createBrowserRouter } from 'react-router-dom'; 
import { AboutPage, ContactPage, ErrorPage, Homepage, MainApp, MenPage, ProductView, WomenPage } from '../Pages';

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
