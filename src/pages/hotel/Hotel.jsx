import React, { useState } from 'react'
import {
  FaMapMarkerAlt,
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
} from 'react-icons/fa'
import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Hotel = () => {
  const [slideNum, setSlideNum] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpen = (index) => {
    setSlideNum(index)
    setOpenModal(true)
  }

  const images = [
    {
      src:
        'https://images.pexels.com/photos/71177/pexels-photo-71177.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      src:
        'https://images.pexels.com/photos/1796721/pexels-photo-1796721.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      src:
        'https://images.pexels.com/photos/1675942/pexels-photo-1675942.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      src:
        'https://images.pexels.com/photos/3105066/pexels-photo-3105066.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      src:
        'https://images.pexels.com/photos/71177/pexels-photo-71177.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      src:
        'https://images.pexels.com/photos/1446624/pexels-photo-1446624.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ]
  const handleClick = (direction) => {
    let newSlideIndex

    if (direction === 'l') {
      newSlideIndex = slideNum === 0 ? 5 : slideNum - 1
    }
    if (direction === 'r') {
      newSlideIndex = slideNum === 5 ? 0 : slideNum + 1
    }
    setSlideNum(newSlideIndex)
  }
  return (
    <>
      <div>
        <Navbar />
        <Header type="list" />
        <div className="hotelContainer">
          {openModal && (
            <div className="slider">
              <FaTimes onClick={() => setOpenModal(false)} className="close" />
              <FaArrowLeft className="arrow" onClick={() => handleClick('l')} />
              <div className="sliderWrapper">
                <img src={images[slideNum].src} alt="" className="sliderImg" />
              </div>
              <FaArrowRight
                className="arrow"
                onClick={() => handleClick('r')}
              />
            </div>
          )}

          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">Grand Hotel</h1>
            <div className="hotelAddress">
              <FaMapMarkerAlt />
              <span>Eton st 125 New York</span>
            </div>
            <span className="hotelDistance">
              Excellent location - 500m from center
            </span>
            <span className="hotelPriceHig">
              Book a stay over $124 at this property and get a free airport taxi
            </span>
            <div className="hotelImages">
              {images.map((img, index) => {
                return (
                  <div key={index} className="hotelImageWrapper">
                    <img
                      onClick={() => handleOpen(index)}
                      src={img.src}
                      alt=""
                      className="hotelIimage"
                    />
                  </div>
                )
              })}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className="hoteTitle">Stay in the heart of krakow</h1>
                <p className="hotelDesc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam vitae consequuntur impedit eaque quod maiores, quos
                  est iure, nihil quam in, autem odit aliquam ipsam itaque?
                  Corrupti quo voluptatibus, quaerat dolorum praesentium a sint
                  nulla velit? Itaque alias autem tenetur. Lorem, ipsum dolor
                  sit amet consectetur adipisicing elit. Adipisci officia ullam
                  fugit vitae atque tempora? Fuga blanditiis omnis, aspernatur
                  optio labore culpa vel dolorum aliquid sit cum excepturi
                  placeat repellendus.
                </p>
                <br />
                <p className="hotelDesc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam vitae consequuntur impedit eaque quod maiores, quos
                  est iure, nihil quam in, autem odit aliquam ipsam itaque?
                  Corrupti quo voluptatibus, quaerat dolorum praesentium a sint
                  nulla velit? Itaque alias autem tenetur. Lorem, ipsum dolor
                  sit amet consectetur adipisicing elit. Adipisci officia ullam
                  fugit vitae atque tempora? Fuga blanditiis omnis, aspernatur
                  optio labore culpa vel dolorum aliquid sit cum excepturi
                  placeat repellendus.
                </p>
              </div>
              <div className="hotelDetailPrice">
                <h1>Perfect for a 9-night stay!</h1>
                <span>
                  located in the real heart of krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>$945</b>(9 night)
                </h2>
                <button>Reserve ir Book now !</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Hotel
