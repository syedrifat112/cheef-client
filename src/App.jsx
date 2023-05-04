import { Toaster } from "react-hot-toast"
import Banner from "./components/Pages/Home/Banner"
import Chefs from "./components/Pages/Home/Chefs/Chefs"
import Team from "./components/Pages/Home/Team/Team"
import Contact from "./components/Pages/Home/Contact/Contact"



function App() {

  return (
    <>
      <Banner></Banner>
      <Chefs></Chefs>
      <Team></Team>
      <Contact></Contact>
      <Toaster />
    </>
  )
}

export default App
