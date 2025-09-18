// src/components/Post.tsx
import { useEffect, useState } from "react";
import "../styles/landing.css";

type PostItem = {
  id: string;
  text: string;
  ownerName?: string;
  createdAt?: string;
  avatarUrl?: string;
};

type PostProps = {
  postId: string;
  onPrayed?: (id: string) => void;
};

function formatTimestamp(iso?: string) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function Post({ postId, onPrayed }: PostProps) {
  const [post, setPost] = useState<PostItem | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        // TODO: replace with real API call
        const fakeData: PostItem = {
          id: postId,
          text: `This is a placeholder prayer for ${postId}. Lord, bring peace and strength today.`,
          ownerName: "Demo User",
          createdAt: new Date().toISOString(),
          avatarUrl: "", // optional
        };
        if (!cancelled) setPost(fakeData);
      } catch (err) {
        console.error("Failed to load post", err);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [postId]);

  if (!post) return <div className="card"><div className="card__body">Loading…</div></div>;

  return (
    <article className="post card" aria-labelledby={`post-title-${post.id}`}>
      {/* Header */}
      <header className="post__header">
        {/* Avatar */}
        {post.avatarUrl ? (
          <img className="post__avatar" src={post.avatarUrl} alt={`${post.ownerName ?? "User"} avatar`} />
        ) : (
          <div className="post__avatar" aria-hidden />
        )}

        {/* Author + meta */}
        <div>
          <div className="post__author" id={`post-title-${post.id}`}>
            {post.ownerName ?? "Anonymous"}
          </div>
          <div className="post__meta">{formatTimestamp(post.createdAt)}</div>
        </div>

        {/* Optional badge / menu spot */}
        <div className="badge">Prayer</div>
      </header>

      {/* Content */}
      <div className="post__content">
        <p>{post.text}</p>
      </div>

      {/* Actions */}
      <div className="post__actions" role="group" aria-label="Post actions">
        <button
          className="post__action"
          onClick={() => onPrayed?.(post.id)}
          aria-label="I prayed for this"
        >
          <span>🙏</span> <span className="count">Pray</span>
        </button>
        <button className="post__action" aria-label="Comment on this post">
          💬 <span>Comment</span>
        </button>
        <button className="post__action" aria-label="Share this post">
          ↗ <span>Share</span>
        </button>
      </div>
    </article>
  );
}
