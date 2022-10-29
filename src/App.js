import {Route, Routes} from 'react-router-dom'

import * as MainLayout from './apps/Layout/index'
import Header from "./apps/Layout/components/Header"

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MainLayout.Pages.Main/>}/>
        <Route path='dokovision' element={<MainLayout.Pages.Roadmap/>}/>
        <Route path='dokovision/:category' element={<MainLayout.Pages.RoadmapDetailed/>}/>
        <Route path='dokostory' element={<MainLayout.Pages.DokoStory/>}/>
        <Route path='dokostory/album' element={<MainLayout.Pages.DokoStoryAlbum/>}/>
        <Route path="dokoverse" element={<MainLayout.Pages.NavigatorPage/>}/>
        <Route path='*' element={<MainLayout.Pages.NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
