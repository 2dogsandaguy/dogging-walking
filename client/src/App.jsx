import { Outlet } from 'react-router-dom';

/* import Header from "../componet/header"
import Footer from "../componet/footer"  */

function App() {


  return (
    <div>
      {/* <Header/> */}
      <Outlet/>
      {/* <Footer/> */}
    </div>
  )
}

export default App