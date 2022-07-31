import React from 'react'
import './searchItem.css'

const SearchItem = () => {
  return (
    <>
      <div className="searchItem">
        <img
          src="https://images.pexels.com/photos/2563984/pexels-photo-2563984.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="searchImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Tower Street Apartment</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire studio + 1 bathroom + 21m 1 full bed
          </span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="cancelOptSUbtitle">
            You can cancel later, so lock in this great price today
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$123</span>
            {/* <br /> */}
            <span className='siTaxOpt'>includes taxes and fees</span>
            <button className="siCheckButton">See availaibilty</button>{' '}
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchItem
