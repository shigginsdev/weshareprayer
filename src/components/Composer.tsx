import React, { useMemo, useState } from "react";
import "../styles/landing.css";

type Props = { onPost: (text: string) => void };

export default function Composer({ onPost }: Props) {
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