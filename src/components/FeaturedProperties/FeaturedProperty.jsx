import React from 'react'
import './featureProperty.css'

const FeaturedProperty = () => {
  return (
    <>
      <div className="featureProp">
        <div className="featurePropItem">
          <img
            src="https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="featurePropImg"
          />
          <span className="featurePropName">Apart Hotel State Miasto</span>
          <span className="featurePropCity">Madrid</span>
          <span className="featurePropPrice">starting from $129 </span>
          <div className="featurePropRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="featurePropItem">
          <img
            src="https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="featurePropImg"
          />
          <span className="featurePropName">Apart Hotel State Miasto</span>
          <span className="featurePropCity">Madrid</span>
          <span className="featurePropPrice">starting from $129 </span>
          <div className="featurePropRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="featurePropItem">
          <img
            src="https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="featurePropImg"
          />
          <span className="featurePropName">Apart Hotel State Miasto</span>
          <span className="featurePropCity">Madrid</span>
          <span className="featurePropPrice">starting from $129 </span>
          <div className="featurePropRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedProperty
