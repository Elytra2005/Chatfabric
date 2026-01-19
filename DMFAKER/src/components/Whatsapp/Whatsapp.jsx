import React from 'react';
import { IoArrowBack, IoVideocam, IoCall } from 'react-icons/io5';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { BsEmojiSmile } from 'react-icons/bs';           // thin emoji smile
import { FiPaperclip, FiCamera, FiMic } from 'react-icons/fi'; // thin line icons
import { MdDoneAll } from 'react-icons/md'; // double checkmark
import '../Whatsapp/Whatsapp.css'

const Whatsapp = ({contactname, message, chatfriend}) => {

 const getSimpleTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false   // ← change to true for 12-hour + AM/PM
      });
 }


  return (
    <div className="whatsapp">
      <div className='platform-bar'>
          <div className='platform-time'>
             <p>9:41</p>
          </div>
          <div className='platform-icons'>
                <div className="icon cellular-bars">
                     <div className="bar bar-1"></div>
                     <div className="bar bar-2"></div>
                     <div className="bar bar-3"></div>
                     <div className="bar bar-4"></div>
                 </div>
                <div className="icon wifi-icon">
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                                <path d="M9 13C9.69 13 10.25 12.44 10.25 11.75C10.25 11.06 9.69 10.5 9 10.5C8.31 10.5 7.75 11.06 7.75 11.75C7.75 12.44 8.31 13 9 13ZM9 7C10.93 7 12.68 7.78 13.95 9.05L15.36 7.64C13.68 5.95 11.44 5 9 5C6.56 5 4.32 5.95 2.64 7.64L4.05 9.05C5.32 7.78 7.07 7 9 7ZM9 1C5.62 1 2.49 2.34 0.22 4.61L1.63 6.03C3.53 4.12 6.14 3 9 3C11.86 3 14.47 4.12 16.37 6.03L17.78 4.61C15.51 2.34 12.38 1 9 1Z" fill="black"/>
                            </svg>
                </div>
                <div className="icon battery">
                            <div className="battery-body">
                                <div className="battery-fill"></div>
                            </div>
                            <div className="battery-tip"></div>
                </div>
          </div>
      </div>

      <div className='top bg-wtsapp'>
          <div className='left'>
            <IoArrowBack className='back-icon' />
            <div className='profile-section'>
              <div className='profile-pic'>
                <FaRegUser />
              </div>
              <div className='contact-info'>
                <h4>{contactname}</h4>
                <p>online</p>
              </div>
            </div>
          </div>
          
          <div className='right'>
            <IoVideocam className='icon' />
            <IoCall className='icon' />
            <BsThreeDotsVertical className='icon' />
          </div>
       </div>
       <div className='middle middle-wtsapp'>

      {/* <div className='friend'> */}

        <div className='chatbubble'>
             <p>{chatfriend}</p>
         </div>

         {message.map((item, index) => (
           index % 2 !== 0 ? (
             <div className='friend' key={index}>
               <div className='chatbubble'>
                 <p>{item.text}</p>
                 <p className='time-stamp'>{getSimpleTime()}</p>
               </div>
             </div>
           ) : (
             <div className='You' key={index}>
               <div className='chatbubble-2'>
                 <p style={{ margin: 0 }}>{item.text}</p>
                 <p className='time-stamp'>
                   {getSimpleTime()} <MdDoneAll style={{ fontSize: '14px', color: '#34B7F1' }} />
                 </p>
               </div>
             </div>
           )
         ))}
      {/* </div> */}
     </div>


<div className="bottom bottom-whatsapp">
         <div className="input-wrapper">
           <button className="icon-btn emoji-btn">
             <BsEmojiSmile />
           </button>

           <input
             type="text"
             placeholder="Type a message"
             className="message-input"
           />

           <button className="icon-btn attach-btn">
             <FiPaperclip />
           </button>

           <button className="icon-btn camera-btn">
             <FiCamera />
           </button>
         </div>

         <button className="icon-btn mic-btn">
           <FiMic />
         </button>
       </div>

   </div>
  );
};

export default Whatsapp;