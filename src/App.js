import { Routes, Route, BrowserRouter } from "react-router-dom"
import "./App.css"
import MainPage from "./pages/MainPage"
import ProFilePage from "./pages/ProfilePage"
import QuestPage from "./pages/QuestPage"
import ReelsPage from "./pages/ReelsPage"
import MessagePage from "./pages/MessagePage"
import ProfileSavedPage from "./pages/ProfileSavedPage"
import ProfileTaggedPage from "./pages/ProfileTaggedPage"
import SaveStoryPage from "./components/Profile/SaveStoryPage"
import ChattingPage from "./pages/ChattingPage"
import UserPage from "./pages/UserPage"
import UserSavedPage from "./pages/UserSavedPage"
import SettingPage from "./pages/Setting/SettingPage"
import LanguagePage from "./pages/Setting/LanguagePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProFilePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/saved" element={<UserSavedPage />} />
        <Route path="/quest" element={<QuestPage />} />
        <Route path="/reels" element={<ReelsPage />} />
        <Route path="/message" element={<MessagePage />} />
        <Route path="/message/chat" element={<ChattingPage />} />
        <Route path="/profile/saved" element={<ProfileSavedPage />} />
        <Route path="/profile/tagged" element={<ProfileTaggedPage />} />
        <Route path="/profile/savestory" element={<SaveStoryPage />} />
        <Route path="/setting/edit" element={<SettingPage />} />
        <Route path="/setting/Language" element={<LanguagePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
