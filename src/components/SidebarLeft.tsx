import React, { useMemo, useState } from "react";
import "../styles/landing.css";

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

export default function LeftSidebar() {
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

      {/* <div className="card">
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
      </div> */}

      {/* <div className="card">
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
      </div> */}
    </aside>
  );
}