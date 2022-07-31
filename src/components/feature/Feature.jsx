import React from 'react'
import './feature.css'

const Feature = () => {
  return (
    <>
      <div className="featured">
        <div className="featuredItems">
          <img
            src="https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
          </div>
        </div>
        <div className="featuredItems">
          <img
            src="https://images.pexels.com/photos/5140475/pexels-photo-5140475.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Qatar</h1>
            <h2>530 properties</h2>
          </div>
        </div>
        <div className="featuredItems">
          <img
            src="https://images.pexels.com/photos/3566191/pexels-photo-3566191.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Austin</h1>
            <h2>220 properties</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feature
