import {Route, Routes} from 'react-router-dom'

import * as MainLayout from './apps/Layout/index'
import Header from "./apps/Layout/components/Header"

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MainLayout.pages.Main/>}/>
        <Route path='dokovision' element={<MainLayout.pages.Roadmap/>}/>
        <Route path='dokovision/:category' element={<MainLayout.pages.RoadmapDetailed/>}/>
        <Route path='dokostory' element={<MainLayout.pages.DokoStory/>}/>
        <Route path='dokostory/album' element={<MainLayout.pages.DokoStoryAlbum/>}/>
        <Route path="dokoverse" element={<MainLayout.pages.NavigatorPage/>}/>
        <Route path='*' element={<MainLayout.pages.NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
