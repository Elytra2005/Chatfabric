import React, { use, useEffect, useRef, useState } from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaSnapchatGhost } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { IoChatbubbleSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import '../Container/Container.css'
import Whatsapp from '../Whatsapp/Whatsapp';
import Instagram from '../Instagram/Instagram';
import Snapchat from '../Snapchat/Snapchat';
import Logo from '../../assets/logo.png'
import XChat from '../X/X';
const Container = () => {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  
  const [message, setMessage] = useState([]);
  const [chatfriend, setChatFriend] = useState("Hey do you want to chat?"); 
  const [friendname, setFriendName] = useState("Contact Name");
  const [image, setImage] = useState(null); 
  const [handle, setHandle] = useState("Handle");
  const [number, setNumber] = useState(0);


  useEffect(() => {
     const imageExists = localStorage.getItem("profilePic");
     if(imageExists) {
        setImage(imageExists);
     } 
  }, []);

  // converts it into base 64 url
  const  fileToBase64 = (file) => {
      return new Promise((resolve, reject) => {
         const reader = new FileReader();
         reader.onload = () => resolve(reader.result);  
         reader.onerror = reject;
         reader.readAsDataURL(file);
      });
   };      

  // loops through the uploaded files and converts them into base64 so we can save it into local storage
  const handleProfilePicture = async (event) => {
      inputRef2.current.click();
      const files = event.target.files; 
      if(files.length > 0) {
         const base64 = await fileToBase64(files[0]);
         localStorage.setItem("profilePic", base64);
         setImage(base64);
      }
  }

 

  const updateMessage = () => {
    setMessage(oldArray => [...oldArray, {id: oldArray.length + 1, text: ''}]);
    console.log(message);
  }

   const handleText = (id, newText) => {
      setMessage(message.map(item => {
        return item.id === id ? {...item, text: newText} : item
      }));
  }

  const defaultChange = (event) => {
      setChatFriend(event.target.value)
  }

  const handleFriendName = (event) => {
      setFriendName(event.target.value || "Contact Name"); 
  }

  const handleXhandle = (event) => {
     setHandle(event.target.value);
  }

  return (
    <div className="container">
      <div className='side-contain'>
           <div className='logo-and-name'>
               {/* <IoChatbubbleSharp />
               <p>ChatFabric</p> */}
               <img src={Logo} className='chatfabric-logo' alt='chatfabric logo' />
           </div>
           <div className='button-section'>
               <div className='button-style button-instagram' onClick={() => setNumber(1)}>
                  <AiFillInstagram />
                  <p>Instagram</p>
               </div>
               <div className='button-style button-snapchat' onClick={() => setNumber(2)}>
                  <FaSnapchatGhost />
                  <p>Snapchat</p>
               </div>
               <div className='button-style button-whatsapp' onClick={() => setNumber(3)}>
                  <IoLogoWhatsapp />
                  <p>Whatsapp</p>
               </div>
               <div className='button-style button-x' onClick={() => setNumber(4)}>
                  <span>𝕏</span>
                  <p>X</p>
               </div>
           </div>

           <div className='People '>
                  <div className='reciver'>
                  <p>Sender</p>
                  <div className='people-box'>
                        <div className='take-image'>
                           <input ref={inputRef2} onChange={handleProfilePicture} accept="image/*" class="hidden" id="image-take-800" type="file"></input>
                              <div className={image ? "user-cirlce" : ""} onClick={handleProfilePicture}>
                                    {image ? (<><img src={image} className='user-full' /></>) : <FaRegUser />}
                                 </div>
                        </div>
                        <input onChange={handleFriendName} type='text' placeholder='Friend'  className='people-input' />
                       {number === 4 ? (<input onChange={handleXhandle} type='text' placeholder='The X Handle'  className='people-input' />) : null} 

                  </div>
                  </div>
              
               
                  <div className='sender'>
                     <p>Reciver</p>
                     <div className='people-box'>
                        <div className='take-image'>
                                 <input ref={inputRef} accept="image/*" class="hidden" id="image-take-800" type="file"></input>
                           <div className='user-circle' onClick={() => inputRef.current.click()}>
                              <FaRegUser />
                           </div>
                              </div>
                        <input type='text' placeholder='You'  className='people-input' />
                     </div>
                  </div>
             

           </div>

           <div className='messages'>
              <p>Messages</p>
             <div className="message-box">
                            <div className='image-side'>
                              <div className={image ? "user-cirlce" : ""}>
                                 {image ? (<><img src={image} className='user-full' /></>) : <FaRegUser />}
                              </div>
                            </div>
                            <p>Friend</p>
                            <div className="input-side">
                                   <input type='text' onChange={defaultChange} placeholder='message'  className='people-input' />
                            </div>
               </div>

         {message.map((item, index) => {
                  return index % 2 === 0 ? (
                     <div className="message-box" key={index}>
                        <div className='image-side'>
                        <div className='user-circle'>
                           <FaRegUser />
                        </div>
                        </div>
                        <p>You</p>
                        <div className="input-side">
                        {/* I could have approached this differently but it does the job */}
                        <input type='text' id='friend' onChange={(event) => handleText(item.id, event.target.value)} placeholder='message' className='people-input' />
                        </div>
                     </div>
                  ) : (
                     <div className="message-box" key={index}>
                        <div className='image-side'>
                        <div className={image ? "user-cirlce" : ""}>
                              {image ? (<><img src={image} className='user-full' /></>) : <FaRegUser />}
                        </div>
                        </div>
                        <p>Friend</p>
                        <div className="input-side">
                         {/* I could have approached this differently but it does the job */}
                        <input type='text' id='friend' placeholder='message' onChange={(event) => handleText(item.id, event.target.value)} className='people-input' />
                        </div>
                     </div>
                  );
          })}


             <div className='button-style bg-blue' onClick={updateMessage}>
                <p>Add Message</p>
             </div>
           </div>
      </div>

      <div className='contain-social'>
        {number === 1 ? (<Whatsapp contactname={friendname} message={message} chatfriend={chatfriend} />) : null}
        {number === 2 ? (<Instagram contactname={friendname} message={message} image={image} chatfriend={chatfriend} />) : null}
        {number === 3 ? (<Snapchat contactname={friendname} message={message} image={image} chatfriend={chatfriend} />) : null}
        {number === 4 ? (<XChat contactname={friendname} handle={handle} message={message} image={image} chatfriend={chatfriend} />) : null}
      </div>
    </div>
  );
};

export default Container;