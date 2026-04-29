
import { useEffect } from 'react'
import AppRoutes from './routes/AppRoutes'


const App =() => {

  useEffect(() => {
    const saveTheme = localStorage.getItem('theme')
    if(saveTheme == "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  },[] )
  

  return (
    <>
      <AppRoutes/>
    </>
  )
}

export default App
