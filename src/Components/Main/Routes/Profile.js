import React from 'react'
import { Link, Outlet } from "react-router-dom";
import Search from './partials/Search';
import Crate from './partials/Crate';
import Footer from './partials/Footer';


const Profile = ({userInfo}) => {
  return (
    <div className="row">
      <div className="col">
        <div className="content-container">
          <div className="row header spaced">
            <div className="row ">
              <div className="back">
                <svg
                  viewBox="0 0 24 24"
                  className="icon "
                  style={{ borderRadius: "50%" }}
                >
                  <g>
                    <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
                  </g>
                </svg>
              </div>
              <div>
                <div>
                  <h4>{userInfo.fullname}</h4>
                </div>
                <div className="totaltweets" style={{ fontSize: "x-small" }}>
                  0 Tweets
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="profile_info">
            <div className="image-container">
              <div className="cover-div" coverimage={userInfo.cover_photo}>
                <img src={userInfo.cover_photo} className="cover-photo" />
              </div>
              <img src={userInfo.profile_image} className="profile-photo" />
              <button className="edit-btn highlight">Edit Profile</button>
            </div>

            <div className="profile-essentials">
              <div>
                <div className="profile-fullname">
                  <h3>{userInfo.fullname}</h3>
                </div>
                <div className="profile-handle ">
                  <span>{userInfo.handle}</span>
                </div>
              </div>

              <div className="date_join rvp">
                <span
                  className="row"
                  style={{ gap: ".5rem", alignItems: "flex-end" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="icon"
                    style={{ fill: "rgb(83, 100, 113)", width: "1.1rem" }}
                  >
                    <g>
                      <path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path>
                      <circle cx="7.032" cy="8.75" r="1.285"></circle>
                      <circle cx="7.032" cy="13.156" r="1.285"></circle>
                      <circle cx="16.968" cy="8.75" r="1.285"></circle>
                      <circle cx="16.968" cy="13.156" r="1.285"></circle>
                      <circle cx="12" cy="8.75" r="1.285"></circle>
                      <circle cx="12" cy="13.156" r="1.285"></circle>
                      <circle cx="7.032" cy="17.486" r="1.285"></circle>
                      <circle cx="12" cy="17.486" r="1.285"></circle>
                    </g>
                  </svg>
                  {` Joined ${userInfo.date}`}
                </span>
              </div>
              <div className="profile_stats rvp">
                <div className="following u">
                  <span>
                    <span
                      style={{ color: "black" }}
                    >{`${userInfo.following} `}</span>
                    Following
                  </span>
                </div>
                <div className="followers u">
                  <span>
                    <span
                      style={{ color: "black" }}
                    >{`${userInfo.followers} `}</span>
                    Followers
                  </span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="profile_content">
            <div className="profile_nav" style={profileNavStyle}>
              <div className="profile_col ">
                <Link to={"/profile"} className="profile_link">
                  <div>Tweets</div>
                </Link>
              </div>
              <div className="profile_col">
                <Link to={"/profile/tweetsReplies"} className="profile_link">
                  <div>Tweets & replies</div>
                </Link>
              </div>
              <div className="profile_col">
                <Link to={"/profile/media"} className="profile_link">
                  <div>Media</div>
                </Link>
              </div>
              <div className="profile_col">
                <Link to={"/profile/likes"} className="profile_link">
                  <div>Likes</div>
                </Link>
              </div>
            </div>
            <div className="profile_nav_content">
              <Outlet />
            </div>
          </div>
        </div>
      </div>

      <div className="col">
        <Search inner={true} />
        <br />
        <div>
          <Crate title={"You might like"} contentType={true} items={userInfo} />{" "}
          <br />
          <Crate
            title={"Trends for you"}
            contentType={false}
            items={userInfo}
          />
          <Footer />
        </div>
      </div>
    </div>
  );
}

const profileNavStyle = {
  maxWidth: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: 0,
  padding: 0,
};


const headerChild = () => {
  return(
    <div>Hello</div>
  )
}

export default Profile