import { Routes, Route, BrowserRouter } from "react-router-dom"
import "./App.css"
import MainPage from "./pages/MainPage"
import ProFilePage from "./pages/ProfilePage"
import QuestPage from "./pages/QuestPage"
import ReelsPage from "./pages/ReelsPage"
import MessagePage from "./pages/MessagePage"
import ProfileSavedPage from "./pages/ProfileSavedPage"
import ProfileTaggedPage from "./pages/ProfileTaggedPage"
import SaveStory from "./components/Profile/SaveStory"
import ChattingPage from "./pages/ChattingPage"
import UserPage from "./pages/UserPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProFilePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/quest" element={<QuestPage />} />
        <Route path="/reels" element={<ReelsPage />} />
        <Route path="/message" element={<MessagePage />} />
        <Route path="/message/chat" element={<ChattingPage />} />
        <Route path="/profile/saved" element={<ProfileSavedPage />} />
        <Route path="/profile/tagged" element={<ProfileTaggedPage />} />
        <Route path="/profile/savestory" element={<SaveStory />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
