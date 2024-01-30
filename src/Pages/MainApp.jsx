import { Footer, Navbar } from '../UI/components';
import { Outlet } from "react-router-dom";

export const MainApp = () => {
  return (
    <>
        <div className="page-container">
            <Navbar/>
              <main>
                <Outlet/>
              </main>
            <Footer/>
        </div>
    </>
  )
}
