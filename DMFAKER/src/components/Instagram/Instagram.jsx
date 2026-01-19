import React from 'react';
import { IoCallOutline, IoVideocamOutline, IoInformationCircleOutline, IoChevronBack } from 'react-icons/io5';
import { BsEmojiSmile, BsImage, BsHeart } from 'react-icons/bs';
import { FiMic } from 'react-icons/fi';
import './instagram.css';

const InstagramDM = ({ contactname, message, chatfriend, image }) => {
  const getSimpleTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="insta-dm-container">
      <div className="insta-header">
        <div className="header-left">
          <IoChevronBack className="back-icon-mobile" />
          <div className="header-profile-pic">
            <div>
                <img src={image} className='profile-image' />
            </div>
          </div>
          <div className="header-info">
            <span className="contact-name">{contactname}</span>
            <span className="active-status">Active now</span>
          </div>
        </div>
        <div className="header-right">
          <IoCallOutline className="header-icon" />
          <IoVideocamOutline className="header-icon" />
          <IoInformationCircleOutline className="header-icon" />
        </div>
      </div>

      {/* <div className="insta-messages-area">
        <div className="message-list-wrapper">
          {chatfriend ? (
            <div className="msg-row friend-row">
              <div className="msg-avatar"></div>
              <div className="msg-bubble friend-bubble">
                <p>{chatfriend}</p>
              </div>
            </div>
          ) : null}

          {message.map((item, index) =>
            index % 2 !== 0 ? (
              <div className="msg-row friend-row" key={index}>
                <div className="msg-avatar"></div>
                <div className="msg-bubble friend-bubble">
                  <p>{item.text}</p>
                </div>
              </div>
            ) : null
          )}

          {message.map((item, index) =>
            index % 2 === 0 ? (
              <div className="msg-row user-row" key={index}>
                <div className="msg-bubble user-bubble">
                  <p>{item.text}</p>
                </div>
              </div>
            ) : null
          )}

          <div className="seen-status">Seen {getSimpleTime()}</div>
        </div>
      </div> */}


      <div className="insta-messages-area">
        <div className="message-list-wrapper">
          {chatfriend ? (
            <div className="msg-row friend-row">
               <div className={image ? "msg-avatar" : "" }>
                   {image ? (<><img src={image} className='msg-full' /></>) : null}
                </div>              
                
              <div className="msg-bubble friend-bubble">
                <p>{chatfriend}</p>
              </div>
            </div>
          ) : null}

          {message.map((item, index) =>
            index % 2 !== 0 ? (
              <div className="msg-row friend-row" key={index}>
                <div className={image ? "msg-avatar" : "" }>
                   {image ? (<><img src={image} className='msg-full' /></>) : null}
                </div>
                <div className="msg-bubble friend-bubble">
                  <p>{item.text}</p>
                </div>
              </div>
            ) : (
              <div className="msg-row user-row" key={index}>
                <div className="msg-bubble user-bubble">
                  <p>{item.text}</p>
                </div>
              </div>
            )
          )}

          <div className="seen-status">Seen {getSimpleTime()}</div>
        </div>
      </div>



      <div className="insta-footer">
        <div className="input-pill">
          <button className="pill-icon"><BsEmojiSmile /></button>
          <input type="text" placeholder="Message..." className="insta-input" />
          <div className="pill-actions">
            <button className="pill-icon"><FiMic /></button>
            <button className="pill-icon"><BsImage /></button>
            <button className="pill-icon"><BsHeart /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramDM;
