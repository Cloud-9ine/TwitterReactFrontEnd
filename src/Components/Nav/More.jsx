import React from 'react'

const More = ({show,onclick}) => {
  return (
    <div className={show ? `pop-up pop-up_visible` : `pop-up`} onClick={onclick}>
      <div className='linkDiv'>
        <a href="/home" className="pop_up__links">
          <div className="popup_row"> Bookmarks </div>
        </a>
        <a href="/home" className="pop_up__links">
          <div className="popup_row"> Lists </div>
        </a>
        <a href="/home" className="pop_up__links">
          <div className="popup_row"> Topics</div>
        </a>
        <a href="/home" className="pop_up__links">
          <div className="popup_row"> Moments</div>
        </a>
        <a href="/home" className="pop_up__links">
          <div className="popup_row"> Newsletters</div>
        </a>
        <a href="/home" className="pop_up__links">
          <div className="popup_row"> Twitter for Professionals </div>
        </a>
        <a href="/home" className="pop_up__links">
          <div className="popup_row"> Twitter Ads </div>
        </a>
        <a href="/home" className="pop_up__links">
          <div className="popup_row"> Analytics </div>
        </a>
        <a href="/home" className="pop_up__links">
          <div className="popup_row"> Settings and privacy </div>
        </a>
        <a href="/home" className="pop_up__links">
          <div className="popup_row"> Help Center </div>
        </a>
        <a href="/home" className="pop_up__links">
          <div className="popup_row"> Display </div>
        </a>
        <a href="/home" className="pop_up__links">
          <div className="popup_row"> Keyboard shortcuts </div>
        </a>
      </div>
    </div>
  );
}

export default More