import React, { useState } from 'react'
import './header.css'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import {
  FaBed,
  FaPlane,
  FaCarAlt,
  FaTaxi,
  FaCalendarAlt,
  FaPeopleArrows,
} from 'react-icons/fa'

const Header = ({ type }) => {
  const [destination, setDestination] = useState('')
  const [showDate, setShowDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ])
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })

  const navigate = useNavigate()
  const handleOption = (name, operation) => {
    setOptions((preValue) => {
      return {
        ...preValue,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      }
    })
  }

  const handleSearch = () => {
    navigate('/hotels', { state: { destination, date, options } })
  }
  return (
    <>
      <div className="header">
        <div
          className={
            type === 'list' ? 'headerContainer listMode' : 'headerContainer'
          }
        >
          <div className="headerList">
            <div className="headerListItems active">
              <FaBed />
              <span>stays</span>
            </div>
            <div className="headerListItems">
              <FaPlane />
              <span>Flights</span>
            </div>
            <div className="headerListItems">
              <FaCarAlt />
              <span>Car Rentals</span>
            </div>
            <div className="headerListItems">
              <FaBed />
              <span>Attractions</span>
            </div>
            <div className="headerListItems">
              <FaTaxi />
              <span>Airport Taxes</span>
            </div>
          </div>
          {type !== 'list' && (
            <>
              <h1 className="headerTitle">A lifetime of discount</h1>
              <div className="headerDesc">
                <p>
                  {' '}
                  Get rewarded for your travels - unluck instant savings of 10%
                  or more with a free Alma Booking account
                </p>
                <button className="headerBtn">sign in / Register</button>
                <div className="headerSearchBar">
                  <div className="headerSearchItem">
                    <FaBed className="headerIcon" />
                    <input
                      type="text"
                      placeholder="where are you going"
                      className="headerSearchInput"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </div>
                  <div className="headerSearchItem">
                    <FaCalendarAlt
                      className="headerIcon"
                      onClick={() => setShowDate(!showDate)}
                    />
                    <span className="headerSearchText">{`${format(
                      date[0].startDate,
                      'MM/dd/yyyy',
                    )} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
                    {showDate && (
                      <DateRange
                        minDate={new Date()}
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                      />
                    )}
                  </div>
                  <div className="headerSearchItem">
                    <FaPeopleArrows className="headerIcon" />
                    <span
                      onClick={() => setOpenOptions(!openOptions)}
                      className="headerSearchText"
                    >
                      {`${options.adult} adult . ${options.children} children  ${options.room} room`}
                      ,
                    </span>
                    {openOptions && (
                      <div className="options">
                        <div className="optionItem">
                          <span className="optionText">Adult</span>
                          <div className="optionCounterWrapper">
                            <button
                              disabled={options.adult <= 1}
                              className="optionCounter"
                              onClick={() => handleOption('adult', 'd')}
                            >
                              -
                            </button>
                            <span className="optionNumber">
                              {options.adult}
                            </span>
                            <button
                              className="optionCounter"
                              onClick={() => handleOption('adult', 'i')}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="optionItem">
                          <span className="optionText">Children</span>
                          <div className="optionCounterWrapper">
                            <button
                              disabled={options.children <= 1}
                              className="optionCounter"
                              onClick={() => handleOption('children', 'd')}
                            >
                              -
                            </button>
                            <span className="optionNumber">
                              {options.children}
                            </span>
                            <button
                              className="optionCounter"
                              onClick={() => handleOption('children', 'i')}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="optionItem">
                          <span className="optionText">Room</span>
                          <div className="optionCounterWrapper">
                            <button
                              disabled={options.room <= 1}
                              className="optionCounter"
                              onClick={() => handleOption('room', 'd')}
                            >
                              -
                            </button>
                            <span className="optionNumber">{options.room}</span>
                            <button
                              className="optionCounter"
                              onClick={() => handleOption('room', 'i')}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="headerSearchItem">
                    <button className="headerBtn" onClick={handleSearch}>
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Header
