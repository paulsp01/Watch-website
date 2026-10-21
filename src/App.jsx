import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import PageContainer from './components/PageContainer.jsx'

import HighJwellery from './pages/HighJwellery'
import Complications from './pages/Complications'
import Heritage from './pages/Heritage'
import Atelier from './pages/Atelier'
import Salons from './pages/Salons'
const App = () => {
  const { pathname } = useLocation()
  const pageClassName = {
    '/': 'overflow-hidden bg-[#0d0d0e] text-[#eee9df]',
    '/complications': 'min-h-screen bg-[#101011] text-[#d8d4cd]',
    '/heritage': 'min-h-screen bg-[#101011] text-[#d8d3cc]',
    '/salons': 'min-h-screen overflow-hidden bg-[#101011] text-[#e8e2d8]',
  }[pathname] ?? ''

  return (
    <PageContainer className={pageClassName}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Atelier />} />
          <Route path="/complications" element={<Complications />} />
          <Route path="/heritage" element={<Heritage />} />

          <Route path="/high-jwellery" element={<HighJwellery />} />
          <Route path="/salons" element={<Salons />} />
        </Route>
      </Routes>
    </PageContainer>
  )
}

export default App