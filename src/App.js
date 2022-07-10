import React, { useState } from "react";
import axios from 'axios';
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Main from "./Components/Main/Main";


const user = {
  fullname: "Lorem Ipsum",
  handle: "@l__Ipsum",
  tweets: 0,
  cover_photo:
    "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
  profile_image:
    "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
  following: 0,
  followers: 0,
  accounts: [
    {
      fullname: "Lorem",
      handle: "lorem",
      totaltweets: "2k",
      profileImage:
        "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
      tweetCaption:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia vero facilis sed voluptas doloremque qui odio omnis dignissimos sint natus?",
      tweets: {
        tweet:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia vero facilis sed voluptas doloremque qui odio omnis dignissimos sint natus?",
        dateTweeted: "date",
        image:
          "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
      },
    },
    {
      fullname: "Lorem ipsum",
      handle: "l_ipsum",
      totaltweets: 1987,
      profileImage:
        "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
      tweetCaption:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia vero facilis sed voluptas doloremque qui odio omnis dignissimos sint natus?",
      tweets: {
        tweet:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia vero facilis sed voluptas doloremque qui odio omnis dignissimos sint natus?",
        dateTweeted: "date",
        image:
          "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
      },
    },
    {
      fullname: "Dolor Sit",
      handle: "d_sit",
      totaltweets: 1009,
      profileImage:
        "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
      tweetCaption:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia vero facilis sed voluptas doloremque qui odio omnis dignissimos sint natus?",
      tweets: {
        tweet:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia vero facilis sed voluptas doloremque qui odio omnis dignissimos sint natus?",
        dateTweeted: "date",
        image:
          "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
      },
    },
  ],
};



function App() {
  const [popup, setPopup] = useState(false);
  const [exit, setExit] = useState(true)
  const [userProfile, setUserProfile] = useState(user);

  axios.get('http://localhost:5601/user')
    .then(result => {
      let data = result.data
      return data
    })
    .then(data => {
      let emails = data.map(l => l.email)
      console.log(emails)
    })
    .catch(err => console.log(err))

  function clicked(){
    setPopup(!popup)
    setExit(!exit)
  }

  return (
    <div className="container">
        <Nav className='column' popup={popup} onclick={clicked} userInfo={userProfile} />
        <Main className='column' userInfo={userProfile} />
    </div>
  );
}

export default App;
