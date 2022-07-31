import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import SearchItem from '../../components/searchItem/SearchItem'
import './list.css'
import { useEffect } from 'react'

const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(null)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(null)

  useEffect(() => {
    setDestination(location.state.destination)
    setOptions(location.state.options)
  }, [destination, location.state.destination, location.state.options, options])
  return (
    <>
      <div>
        <Navbar />
        <Header type="list" />
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="listSearchTitle">Search</h1>
              <div className="listItem">
                <label htmlFor="">Destination</label>
                <input type="text" placeholder={destination} />
              </div>
              <div className="listItem">
                <label htmlFor="">Check in Date</label>
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                  date[0].endDate,
                  'MM/dd/yyyy',
                )}`}</span>
                {openDate && (
                  <DateRange
                    minDate={new Date()}
                    onChange={(item) => setDate([item.selection])}
                    ranges={date}
                  />
                )}
              </div>
              <div className="listItem">
                <label htmlFor="">Options</label>
                <div className="lsOptions">
                  <div className="searchOptionItem">
                    <span className="seachOptText">
                      Min price <small>per night</small>{' '}
                    </span>
                    <input type="number" className="searchOptInput" />
                  </div>
                  <div className="searchOptionItem">
                    <span className="seachOptText">
                      Max price <small>per night</small>{' '}
                    </span>
                    <input type="number" className="searchOptInput" />
                  </div>
                  <div className="searchOptionItem">
                    <span className="seachOptText">Adult price</span>
                    <input
                      min={1}
                      type="number"
                      className="searchOptInput"
                      placeholder={options.adult}
                    />
                  </div>
                  <div className="searchOptionItem">
                    <span className="seachOptText">children</span>
                    <input
                      min={0}
                      type="number"
                      className="searchOptInput"
                      placeholder={options.children}
                    />
                  </div>
                  <div className="searchOptionItem">
                    <span className="seachOptText">Room</span>
                    <input
                      min={1}
                      type="number"
                      className="searchOptInput"
                      placeholder={options.room}
                    />
                  </div>
                </div>
              </div>
              <button className="optionSearch">Search</button>
            </div>
            <div className="listResult">
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default List
