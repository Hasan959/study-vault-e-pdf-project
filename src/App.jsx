import { useEffect } from 'react'
import AppRoutes from './routes/AppRoutes'

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  useEffect(() => {

    // // THEME
    // const saveTheme = localStorage.getItem('theme')

    // if (saveTheme == "dark") {
    //   document.documentElement.classList.add("dark")
    // } else {
    //   document.documentElement.classList.remove("dark")
    // }

    // AOS
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    })

  }, [])

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App