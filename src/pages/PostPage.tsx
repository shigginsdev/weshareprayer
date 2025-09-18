// src/pages/PostsPage.tsx
import "../styles/landing.css";
import Post from "../components/Post";

export default function PostsPage() {
  return (
    <div className="landing">
      {/* optional top bar here */}
      <main className="main">
        <aside className="sidebar sidebar--left">
          {/* left widgets (optional) */}
        </aside>

        <section className="feed" aria-label="Posts">
          {/* Composer (optional) */}
          <div className="composer card">
            <div className="composer__row">
              <div className="composer__avatar" />
              <input
                className="composer__input"
                placeholder="Share a prayer or encouragement..."
              />
              <button className="composer__btn">Post</button>
            </div>
          </div>

          {/* Posts */}
          <Post postId="post-001" />
          <Post postId="post-002" />
          <Post postId="post-003" />
        </section>

        <aside className="sidebar sidebar--right">
          {/* right widgets (optional) */}
        </aside>
      </main>
    </div>
  );
}