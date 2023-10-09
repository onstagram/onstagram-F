import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import ProFilePage from './pages/ProfilePage'
import QuestPage from './pages/QuestPage'
import ReelsPage from './pages/ReelsPage'
import MessagePage from './pages/MessagePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="profile" element={<ProFilePage />} />
        <Route path="quest" element={<QuestPage />} />
        <Route path="reels" element={<ReelsPage />} />
        <Route path="message" element={<MessagePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
