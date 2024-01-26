import { RouterProvider, createBrowserRouter } from 'react-router-dom'; 
import { AboutPage, ContactPage, ErrorPage, Homepage, MainApp } from '../Pages';

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
