import React from "react";
import { ArrowLeft, Play, Camera, Smile, Image as ImageIcon } from "lucide-react";
import "./snapchat.css";

function Snapchat({ contactname , message, chatfriend, image }) {
  const getSimpleTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="snap-shell">
      <div className="snap-topbar">
        <div className="snap-topbar-left">
          <button className="snap-top-circle" aria-label="Back">
            <ArrowLeft size={20} strokeWidth={2.5} />
          </button>

          <div className="snap-title">
            <div className="snap-ghost-wrap">
              {image ? (
                <img src={image} className="snap-ghost-img" alt="" />
              ) : (
                <div className="snap-ghost-badge">
                  <div className="snap-ghost-mark" />
                </div>
              )}
            </div>
            <span className="snap-name">{contactname}</span>
          </div>
        </div>

        <button className="snap-top-circle" aria-label="Play">
          <Play size={18} fill="currentColor" />
        </button>
      </div>

      {/* BODY / CHAT AREA */}
      <div className="snap-body">
        <div className="snap-chat-container">
          <div className="snap-message-list">
            
            {/* Friend Card */}
            {chatfriend && (
              <div className="snap-row-group">
                <div className="snap-username snap-user-team">{contactname}</div>
                <div className="snap-row snap-border-blue">
                  <div className="snap-card">
                    
                    <div className="snap-card-text">
                      <div className="snap-card-title">{chatfriend}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {message && message.map((item, index) => (
              <div key={index} className="snap-row-group">
                <div className={`snap-username ${index % 2 !== 0 ? 'snap-user-team' : 'snap-user-me'}`}>
                  {index % 2 !== 0 ? contactname : "ME"}
                </div>
                
                <div className={`snap-row ${index % 2 !== 0 ? 'snap-border-blue' : 'snap-border-red'}`}>
                  <div className="snap-card">
                    {index % 2 !== 0 && (
                      <div className="snap-card-icon">
                        <div className="snap-card-ghost-inner" />
                      </div>
                    )}
                    <div className="snap-card-text">
                      <div className="snap-card-title">{item.text}</div>
                      <div className="snap-card-sub">
                        {index % 2 !== 0 ? "help.snapchat.com" : "Delivered"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="snap-opened">Opened {getSimpleTime()}</div>
          </div>
        </div>
      </div>

      <div className="snap-bottom">
        <button className="snap-circle-btn" aria-label="Camera">
          <Camera size={22} />
        </button>

        <div className="snap-compose">
          <input className="snap-input" placeholder="Send a chat" />
          <span className="snap-input-hint">Drag & drop to upload</span>
        </div>

        <button className="snap-circle-btn" aria-label="Emoji">
          <Smile size={22} />
        </button>

        <button className="snap-circle-btn" aria-label="Image">
          <ImageIcon size={22} />
        </button>
      </div>
    </div>
  );
}

export default Snapchat;