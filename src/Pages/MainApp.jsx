import { Navbar } from '../UI/components';
import { Outlet } from "react-router-dom";

export const MainApp = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}
