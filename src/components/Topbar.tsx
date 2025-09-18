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

const makeAvatar = (seed: number): string =>
  `https://i.pravatar.cc/100?img=${(seed % 70) + 1}`;

export default function Topbar() {
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