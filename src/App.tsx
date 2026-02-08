import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import ResumePage from './pages/ResumePage'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ResumePage />} />
          {/* Future: <Route path="/projects" element={<ProjectsPage />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
