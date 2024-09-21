import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../hooks/hooks"
import { isloggedIn } from "../slices/loggedInUserSlice"
import Header from "./Header"
import Sidebar from "./Sidebar"
import PageHeader from "./PageHeader"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { selectSidebarStatus } from "../slices/uiSettingSlice"

const MainLayout = () => {
  const sidebasrStatus = useAppSelector(selectSidebarStatus)
  const isUserLoggedIn = useAppSelector(isloggedIn)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/")
    }
  }, [isUserLoggedIn])

  return (
    <>
      <div className={sidebasrStatus ? '': 'toggle-sidebar'}>
        <Header />
        <Sidebar />

        <main
          id="main"
          className={main}
        >
         
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default MainLayout