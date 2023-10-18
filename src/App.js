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
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<ProFilePage />} />
        <Route path="/quest" element={<QuestPage />} />
        <Route path="/reels" element={<ReelsPage />} />
        <Route path="/profile/saved" element={<ProfileSavedPage />} />
        <Route path="/profile/tagged" element={<ProfileTaggedPage />} />
        <Route path="/profile/savestory" element={<SaveStory />} />
        <Route path="/message" element={<MessagePage />} />
        </Route>
        <Route path="/" element={<PublicRoute><MainPage /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><LoginPage /></ PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><SignPage /></ PublicRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
