// XChat.jsx
import React from "react";
import {
  Plus,
  Sticker,          // ✅ replaces Gif (lucide-react doesn't export Gif)
  Smile,
  Image as ImageIcon,
  MoreHorizontal,
  CheckCheck,
} from "lucide-react";
import "../X/X.css";
import VerifiedBadge from "./VerifiedBadge";

function XChat({handle, contactname, message, chatfriend, image }) {
  const getSimpleTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const hasMessages =
    Boolean(chatfriend) || (Array.isArray(message) && message.length > 0);

  return (
    <div className="x-shell">
      {/* HEADER */}
      <div className="x-topbar">
        <div className="x-top-left">
          <div className="x-avatar">
            {image ? <img src={image} alt="" /> : <div className="x-avatar-ph" />}
          </div>

            <span className="x-name-row">
              <span className="x-name">{contactname}</span>
              <VerifiedBadge size={18} />
            </span>
        </div>

        <button className="x-icon-btn" aria-label="More">
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* BODY */}
      <div className="x-body">
        <div className="x-canvas">
          {/* Profile card (centered like the reference) */}
          <div className="x-profile-card">
            <div className="x-profile-avatar">
              {image ? <img src={image} alt="" /> : <div className="x-avatar-ph" />}
            </div>

            <div className="x-profile-name-row">
              <span className="x-profile-name">{contactname}</span>
              <VerifiedBadge size={18} />
            </div>

            <div className="x-profile-sub">@{handle} • <br /> Joined May 2021</div>

            <button className="x-view-profile">View Profile</button>
          </div>

          {/* Messages */}
          <div className="x-message-list">
            <div className="x-date-divider">
              <span>Oct 21, 2025</span>
            </div>

            {/* Optional first friend message (same logic pattern) */}
            {chatfriend ? (
              <div className="x-row x-friend-row">
                <div className="x-bubble x-friend-bubble">
                  <p>{chatfriend}</p>
                </div>
              </div>
            ) : null}

            {/* Same mapping logic: odd index = friend, even index = user */}
            {message.map((item, index) =>
              index % 2 !== 0 ? (
                <div className="x-row x-friend-row" key={index}>
                  <div className="x-bubble x-friend-bubble">
                    <p>{item.text}</p>
                  </div>
                </div>
              ) : (
                <div className="x-row x-user-row" key={index}>
                  <div className="x-bubble x-user-bubble">
                    <p>{item.text}</p>

                    {/* X-like tiny time + check */}
                    <div className="x-meta">
                      <span className="x-time">{getSimpleTime()}</span>
                      <CheckCheck size={14} className="x-check" />
                    </div>
                  </div>
                </div>
              )
            )}

            {!hasMessages ? null : <div className="x-bottom-spacer" />}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="x-footer">
        <button className="x-circle x-plus" aria-label="Add">
          <Plus size={22} />
        </button>

        <button className="x-circle" aria-label="GIF">
          <Sticker size={18} />
        </button>

        <button className="x-circle" aria-label="Emoji">
          <Smile size={18} />
        </button>

        <div className="x-input-wrap">
          <input className="x-input" placeholder="Unencrypted message" />
        </div>

        <button className="x-circle" aria-label="Image">
          <ImageIcon size={18} />
        </button>
      </div>
    </div>
  );
}

export default XChat;
