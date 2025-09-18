import React, { useMemo, useState } from "react";
import "./landing.css";

/** ---- Types ---- */
type PostId = number;

interface PostItem {
  id: PostId;
  author: string;
  avatar: string;
  time: string;         // display string like "2h ago"
  text: string;
  image?: string;
  prayed: number;
  comments: number;
  shares: number;
}

/** --- Fake data generators --- */
const makeAvatar = (seed: number): string =>
  `https://i.pravatar.cc/100?img=${(seed % 70) + 1}`;

const makePhoto = (seed: number): string =>
  `https://picsum.photos/seed/${seed}/900/500`;

const initialPosts: PostItem[] = [
  {
    id: 1,
    author: "Mary Watson",
    avatar: makeAvatar(11),
    time: "2h ago",
    text:
      "Please pray for my sister’s surgery tomorrow. Trusting God for calm and a skilled surgical team.",
    image: makePhoto(101),
    prayed: 203,
    comments: 12,
    shares: 4,
  },
  {
    id: 2,
    author: "Jon Wilson",
    avatar: makeAvatar(22),
    time: "1d ago",
    text:
      "Praise report 🙌 Our friend found a job after months of searching. Thank you all for praying!",
    image: makePhoto(202),
    prayed: 784,
    comments: 31,
    shares: 9,
  },
  {
    id: 3,
    author: "William Henry",
    avatar: makeAvatar(33),
    time: "3d ago",
    text:
      "Praying for peace across our community. If you have requests, drop them below and we’ll pray together.",
    image: makePhoto(303),
    prayed: 91,
    comments: 7,
    shares: 2,
  },
];

const pagesYouMayLike = [
  { id: 1, title: "Hope Church", meta: "Community", thumb: "" },
  { id: 2, title: "Daily Devotionals", meta: "Inspiration", thumb: "" },
  { id: 3, title: "Worship & Praise", meta: "Music", thumb: "" },
  { id: 4, title: "Volunteer Network", meta: "Service", thumb: "" },
];

const topNews = [
  { id: 1, title: "New prayer groups launching next week", meta: "2h ago" },
  { id: 2, title: "How to post an anonymous request", meta: "1d ago" },
  { id: 3, title: "Feature roadmap for Q4", meta: "3d ago" },
];

const notifications = [
  { id: 1, text: "Anna prayed for your request", time: "5m" },
  { id: 2, text: "James commented: “Standing with you!”", time: "24m" },
  { id: 3, text: "Sarah shared your post", time: "1h" },
  { id: 4, text: "New follower: Michael", time: "3h" },
];

const friends = [
  { id: 1, name: "Ammy Jacob" },
  { id: 2, name: "Jabed Moni" },
  { id: 3, name: "Daniel Reed" },
];

function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar__inner">
        <div className="brand">
          <div className="brand__logo" />
          <div className="brand__name">We Share Prayer</div>
        </div>

        <nav className="nav-tabs">
          <div className="nav-tabs__item nav-tabs__item--active">Home</div>
          <div className="nav-tabs__item">Messages</div>
          <div className="nav-tabs__item">Notifications</div>
        </nav>

        <div className="topbar__right">
          <div className="search">
            <span role="img" aria-label="search">🔎</span>
            <input placeholder="Search" />
          </div>
          <button className="icon-btn" title="Create">➕</button>
          <img className="avatar" src={makeAvatar(5)} alt="me" />
        </div>
      </div>
    </header>
  );
}

function LeftSidebar() {
  return (
    <aside className="sidebar sidebar--left">
      <div className="card widget-about">
        <img
          className="about-cover"
          alt=""
          src="https://picsum.photos/seed/cover/800/240"
        />
        <div className="about-user">
          <img className="about-avatar" alt="" src={makeAvatar(8)} />
          <div>
            <div style={{ fontWeight: 700, color: "#111827" }}>Erik Ammen</div>
            <div className="card__body" style={{ padding: 0 }}>
              “You are not alone. We pray together.”
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card__header">Pages You May Like</div>
        <ul className="widget-list">
          {pagesYouMayLike.map((p) => (
            <li key={p.id}>
              <div className="widget-list__thumb" />
              <div>
                <div className="widget-list__title">{p.title}</div>
                <div className="widget-list__meta">{p.meta}</div>
              </div>
              <button className="badge">Follow</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <div className="card__header">Latest Top News</div>
        <ul className="widget-list">
          {topNews.map((n) => (
            <li key={n.id}>
              <div className="widget-list__thumb" />
              <div className="widget-list__title">{n.title}</div>
              <div className="widget-list__meta">{n.meta}</div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function RightSidebar() {
  return (
    <aside className="sidebar sidebar--right">
      <div className="card widget-activity">
        <div className="card__header">Recent Notifications</div>
        {notifications.map((n) => (
          <div className="activity-item" key={n.id}>
            <div className="activity__icon" />
            <div className="activity__text">{n.text}</div>
            <div className="activity__time">{n.time}</div>
          </div>
        ))}
      </div>

      <div className="card widget-ad">
        <div className="card__header">Advertisement</div>
        <div className="ad-box">AD SPACE</div>
      </div>

      <div className="card widget-friends">
        <div className="card__header">Friends Zone</div>
        {friends.map((f) => (
          <div className="friend" key={f.id}>
            <div className="friend__avatar" />
            <div className="friend__name">{f.name}</div>
            <div className="friend__status" title="online" />
          </div>
        ))}
      </div>
    </aside>
  );
}

function Composer({ onPost }: { onPost: (text: string) => void }) {
  const [value, setValue] = useState<string>("");

  return (
    <div className="composer card">
      <div className="composer__row">
        <div className="composer__avatar" />
        <input
          className="composer__input"
          placeholder="Share a prayer request..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && value.trim()) {
              onPost(value.trim());
              setValue("");
            }
          }}
        />
        <button
          className="composer__btn"
          onClick={() => {
            if (value.trim()) {
              onPost(value.trim());
              setValue("");
            }
          }}
        >
          Share
        </button>
      </div>
    </div>
  );
}

function Post({ post, onPrayed }: { post: PostItem; onPrayed: (id: PostId) => void }) {
  return (
    <article className="post card">
      <div className="post__header">
        <img className="post__avatar" src={post.avatar} alt={post.author} />
        <div>
          <div className="post__author">{post.author}</div>
          <div className="post__meta">{post.time}</div>
        </div>
        <button className="icon-btn" title="More">⋯</button>
      </div>

      <div className="post__content">{post.text}</div>
      {post.image && <img className="post__media" src={post.image} alt="" />}

      <div className="post__actions">
        <button className="post__action" onClick={() => onPrayed(post.id)}>
          <span>🙏</span>
          <span>Prayed</span>
          <span className="count">{post.prayed}</span>
        </button>
        <button className="post__action" onClick={() => console.log("comment", post.id)}>
          <span>💬</span>
          <span>Comment</span>
          <span className="count">{post.comments}</span>
        </button>
        <button className="post__action" onClick={() => console.log("share", post.id)}>
          <span>↗</span>
          <span>Share</span>
          <span className="count">{post.shares}</span>
        </button>
      </div>
    </article>
  );
}

function Feed() {
  const [posts, setPosts] = useState<PostItem[]>(initialPosts);

  const handleNewPost = (text: string) => {
    const id = Math.max(...posts.map((p) => p.id)) + 1;
    const newPost: PostItem = {
      id,
      author: "You",
      avatar: makeAvatar(99),
      time: "Just now",
      text,
      image: Math.random() > 0.6 ? makePhoto(id) : undefined,
      prayed: 0,
      comments: 0,
      shares: 0,
    };
    setPosts([newPost, ...posts]);
  };

  const handlePrayed = (id: PostId) => {
    setPosts((arr) =>
      arr.map((p) =>
        p.id === id ? { ...p, prayed: p.prayed + 1 } : p
      )
    );
  };

  return (
    <section className="feed">
      <Composer onPost={handleNewPost} />
      {posts.map((p) => (
        <Post key={p.id} post={p} onPrayed={handlePrayed} />
      ))}
    </section>
  );
}

export default function App() {
  useMemo(() => {
    document.title = "We Share Prayer — Home";
  }, []);

  return (
    <div className="landing">
      <Topbar />
      <main className="main">
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </main>
    </div>
  );
}