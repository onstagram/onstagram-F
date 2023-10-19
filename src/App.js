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
import SaveStory from "./components/Profile/SaveStoryPage"
import SettingPage from "./pages/Setting/SettingPage"
import LanguagePage from "./pages/Setting/LanguagePage"
import AppAndWebPage from "./components/Setting/AppAndWeb"
import UserPage from "./pages/UserPage"
import UserSavedPage from "./pages/UserSavedPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          {/* <Route element={<PrivateRoute />}> */}
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<ProFilePage />} />
          <Route path="/quest" element={<QuestPage />} />
          <Route path="/reels" element={<ReelsPage />} />
          <Route path="/profile/saved" element={<ProfileSavedPage />} />
          <Route path="/profile/tagged" element={<ProfileTaggedPage />} />
          <Route path="/profile/savestory" element={<SaveStory />} />
          <Route path="/message" element={<MessagePage />} />
          {/* <Route path="/logout" element={<LogoutPage />} /> */}
          <Route path="/setting/edit" element={<SettingPage />} />
          <Route path="/setting/Language" element={<LanguagePage />} />
          <Route path="/setting/AppAndWeb" element={<AppAndWebPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/user/saved" element={<UserSavedPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignPage />} />
        </Route>
    
      </Routes>
    </BrowserRouter>
  )
}

export default App
