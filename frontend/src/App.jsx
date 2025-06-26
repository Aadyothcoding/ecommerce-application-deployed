import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'; // ✅ ADD THIS
import CreatePage from './pages/createPage'
import HomePage from './pages/HomePage'
import Navbar from './components/navbar'

function App() {
  return (
    <Box minH="100vh">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  )
}

export default App
