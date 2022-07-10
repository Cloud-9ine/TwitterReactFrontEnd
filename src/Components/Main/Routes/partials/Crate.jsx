import {Link} from 'react-router-dom'

const Crate = ({ title, contentType, items }) => {
  return (
    <div className="crate">
      {contentType ? (
        <>
          <div className="crate_head spaced">
            <h3>{title}</h3>
          </div>

          <div className="crate_acc_div">
            {items.accounts.map((item, index) => {
              return (
                <Link
                  to={`/${item.handle}`}
                  style={linkStyle}
                  key={index}
                >
                  <div className=" row crate_account highlight spaced">
                    <div className="crate_acc_details">
                      <div className="profile" style={{padding:'0'}}>
                        <img
                          src={item.profileImage}
                          style={{width:'2.9rem'}}
                          alt=""
                        />
                      </div>
                      <div>
                        <div
                          className="full-name one u"
                          style={{ textOverflow: "ellipsis" }}
                        >
                          {item.fullname}
                        </div>
                        <div className="twitter__handle two">
                          {`@${item.handle}`}
                        </div>
                      </div>
                    </div>

                    <button className="follow_btn">Follow</button>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="show_more" id="">
            <span>Show more</span>
          </div>
        </>
      ) : (
        <>
          <div className="crate_head spaced">
            <h3>{title}</h3>
          </div>

          <div className="crate_acc_div">
            {items.accounts.map((item, index) => {
              return (
                <div className="spaced highlight" key={index}>
                  <div className="trend_topics">
                    <div className="trend_details">
                      <div className="post_location two">
                        {"Trending in Ghana"}
                      </div>
                      <div className="full-name one">
                        {item.fullname.split(" ")[0]}
                      </div>
                      <div className="tweet_score two">
                        {`${item.totaltweets} Tweets`}
                      </div>
                    </div>
                    <div className="dot_highlight">
                      <i className="bi bi-three-dots"></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="show_more" id="">
            <span>Show more</span>
          </div>
        </>
      )}
    </div>
  );
}

const linkStyle = {
  textDecoration: 'none',
  color:'black',
  height:'fit-content',
}

export default Crate