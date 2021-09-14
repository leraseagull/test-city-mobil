import { useState, useEffect } from 'react'
import { requestURL } from './consts'
import filter from '../assets/icons/filter.png'

import Car from './Car'

function List(searchValue) {
  const inputValue = searchValue.input
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])
  const [toggle, setToggle] = useState(0)

  const tariffsList = items.tariffs_list
  let filterCar

  useEffect(() => {
    fetch(requestURL)
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result)
          setIsLoaded(true)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])
  const includeValue = (value) => {
    return items.cars
      .map((item) => item)
      .filter(function (item) {
        let includeValue = item.mark.concat(' ', item.model)
        return includeValue.toLowerCase().includes(value)
      })
  }
  isLoaded ? (filterCar = includeValue(inputValue)) : (filterCar = items.cars)
  if (error) {
    return <div>Ошибка: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Загрузка...</div>
  } else {
    return (
      <>
        <div className="table">
          <div className="table-header">
            <div className="row">
              <div
                className="cars"
                onClick={() => setToggle(toggle === 0 ? 1 : 0)}
              >
                Марка и модель
                <img
                  src={filter}
                  alt="filter"
                  style={{
                    position: 'absolute',
                    right: '20px',
                    transform: `rotate(${(toggle === 1 ? 1 : 0) * 180}deg)`,
                  }}
                />
              </div>
              <div className="tariffs row">
                {tariffsList.map((item, index) => {
                  return (
                    <div className="tariff-name" key={index}>
                      {item}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="table-body">
            {toggle === 0
              ? filterCar.map((item, index) => {
                  return (
                    <Car item={item} tariffsList={tariffsList} key={index} />
                  )
                })
              : filterCar.reverse().map((item, index) => {
                  return (
                    <Car item={item} tariffsList={tariffsList} key={index} />
                  )
                })}
          </div>
        </div>
      </>
    )
  }
}
export default List
