import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Explore from "./Routes/Explore";
import Notifications from "./Routes/Notifications";
import Messages from "./Routes/Messages";
import Profile from "./Routes/Profile";



const Main = ({userInfo}) => {
  return (
    <div className="main">
      <Routes>
        <Route path="/home" element={<Home userInfo={userInfo} />} />
        <Route path="/explore" element={<Explore userInfo={userInfo} />} />
        <Route
          path="/notifications"
          element={<Notifications userInfo={userInfo} />}
        >
          <Route path="" element={<All userInfo={userInfo} />}></Route>
          <Route path="mentions" element={<Mentions userInfo={userInfo} />}></Route>
        </Route>
        <Route path="/messages" element={<Messages userInfo={userInfo} />} />
        <Route path="/profile" element={<Profile userInfo={userInfo} />}>
          <Route path="" element={<Tweets />}></Route>
          <Route path="tweetsReplies" element={<TweetsReplies />}></Route>
          <Route path="media" element={<Media />}></Route>
          <Route path="likes" element={<Likes />}></Route>
        </Route>
      </Routes>
    </div>
  );
}



//Notifications Routes...
const All = ({userInfo}) => {
  return (
    <>
      {
        userInfo.accounts.map((info, index) => {
          return (
            <div
              className="info row spaced highlight"
              key={index}
              style={{
                borderBottom: "1px solid gainsboro",
                alignItems: "flex-start",
                gap: 0,
                height: "auto",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <div style={{ marginRight: "10px" }}>
                <svg viewBox="0 0 24 24" className="icon">
                  <g>
                    <path
                      d="M22.99 11.295l-6.986-2.13-.877-.326-.325-.88L12.67.975c-.092-.303-.372-.51-.688-.51-.316 0-.596.207-.688.51l-2.392 7.84-1.774.657-6.148 1.82c-.306.092-.515.372-.515.69 0 .32.21.6.515.69l7.956 2.358 2.356 7.956c.09.306.37.515.69.515.32 0 .6-.21.69-.514l1.822-6.15.656-1.773 7.84-2.392c.303-.09.51-.37.51-.687 0-.316-.207-.596-.51-.688z"
                      fill="#794BC4"
                    ></path>
                  </g>
                </svg>
              </div>

              <div className="note_acc" style={{ paddingTop: "0" }}>
                <div
                  className="profile"
                  style={{ padding: "0", marginTop: "-2px" }}
                >
                  <img src={info.profileImage} alt="" />
                </div>
                <h4 className="acc_fullname" style={{padding:'10px 0'}}>{info.fullname} </h4>
                <div
                  className="tweet_caption"
                  style={{ fontSize: "17px", color: "dimgrey" }}
                >
                  {info.tweetCaption}
                </div>
              </div>

              <div>
                <i className="bi bi-three-dots"></i>
              </div>
            </div>
          );
        })
      }
    </>
  );
};

const Mentions = () => {
  return (
    <div className="spaced">
      <h3>Who to follow</h3>
    </div>
  );
};

 

//Profile Routes...
const Tweets = () => {
  return(
    <div className='spaced'>
    <h3>Who to follow</h3>
    </div>
  );
};

const TweetsReplies = () => {
  return <div>TweetsReplies</div>;
};

const Media = () => {
  return <div>Media</div>;
};

const Likes = () => {
  return <div>Likes</div>;
};


export default Main