import { Routes, Route, BrowserRouter } from "react-router-dom"
import "./App.css"
import MainPage from "./pages/MainPage"
import ProFilePage from "./pages/ProfilePage"
import QuestPage from "./pages/QuestPage"
import ReelsPage from "./pages/ReelsPage"
import MessagePage from "./pages/MessagePage"
import ProfileSavedPage from "./pages/ProfileSavedPage"
import ProfileTaggedPage from "./pages/ProfileTaggedPage"
import LoginPage from "./pages/LoginPage"
import SignPage from "./pages/SignPage"
import ChattingPage from "./pages/ChattingPage"
import UserPage from "./pages/UserPage"
import UserSavedPage from "./pages/UserSavedPage"
import SettingPage from "./pages/Setting/SettingPage"
import LanguagePage from "./pages/Setting/LanguagePage"
import AppWebPage from "./pages/Setting/AppWebPage"
import Write from "./components/Profile/Write"
import SaveStoryPage from "./components/Profile/SaveStoryPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignPage />} />
        <Route path="/profile" element={<ProFilePage />} />
        <Route path="/quest" element={<QuestPage />} />
        <Route path="/reels" element={<ReelsPage />} />
        <Route path="/message" element={<MessagePage />} />
        <Route path="/profile/saved" element={<ProfileSavedPage />} />
        <Route path="/profile/tagged" element={<ProfileTaggedPage />} />
        <Route path="/profile/savestory" element={<SaveStoryPage />} />
        <Route path="/setting/edit" element={<SettingPage />} />
        <Route path="/setting/language" element={<LanguagePage />} />
        <Route path="/setting/appweb" element={<AppWebPage />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
