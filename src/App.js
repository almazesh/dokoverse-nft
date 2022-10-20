import {Route, Routes} from 'react-router-dom'
import * as MainLayout from './apps/Layout/index'
import Header from "./apps/Layout/components/Header";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MainLayout.pages.Main/>}/>
      </Routes>
    </>
  )
}

export default App
