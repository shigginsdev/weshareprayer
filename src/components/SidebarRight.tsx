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

export default function RightSidebar() {
  return (
    <aside className="sidebar sidebar--right">
      <div className="card widget-activity">
        <div className="card__header">Recent Updates</div>
        {notifications.map((n) => (
          <div className="activity-item" key={n.id}>
            <div className="activity__icon" />
            <div className="activity__text">{n.text}</div>
            <div className="activity__time">{n.time}</div>
          </div>
        ))}
      </div>

      {/* <div className="card widget-ad">
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
      </div> */}
    </aside>
  );
}