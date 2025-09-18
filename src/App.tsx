// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Topbar from './components/Topbar'
import SidebarLeft from './components/SidebarLeft'
import SidebarRight from './components/SidebarRight'
import HomePage from './pages/HomePage'
import ComposePage from './pages/ComposePage'
import PostPage from './pages/PostPage'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className="landing">
        {/* Sticky header */}
        <header className="topbar">
          {/* Your Topbar component should render the .topbar__inner grid */}
          <Topbar />
        </header>

        {/* 3-column grid */}
        <div className="main">
          <aside className="sidebar sidebar--left">
            <SidebarLeft />
          </aside>

          {/* Center feed column; keep pages content-only */}
          <main className="feed">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/compose" element={<ComposePage />} />
              <Route path="/post/:id" element={<PostPage />} />
            </Routes>
          </main>

          <aside className="sidebar sidebar--right">
            <SidebarRight />
          </aside>
        </div>
      </div>
    </BrowserRouter>
  )
}
