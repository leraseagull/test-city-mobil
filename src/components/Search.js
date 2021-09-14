import { useState } from 'react'
import search from '../assets/icons/search.png'

import List from './List'

export function Search() {
  const [searchValue, setSearchValue] = useState('')
  const onClickSearchButton = () => {
    const searchButton =
      document.getElementsByClassName('search-input')[0].value
    setSearchValue(searchButton)
  }
  const onChangeSearchInput = (event) => {
    console.log(event)
    setSearchValue(event.target.value)
  }

  return (
    <>
      <div className="search">
        <input
          className="search-input"
          style={{
            backgroundImage: `url(${searchValue === '' ? search : ''})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left 16px center',
            paddingLeft: `${searchValue === '' ? '38px' : '16px'}`,
          }}
          type="text"
          placeholder="Поиск"
          // если закоментить onChange, то поиск будет работать через btn / Enter (стили заданы только для onChange)
          onChange={onChangeSearchInput}
          onKeyUp={(event) =>
            event.key === 'Enter' ? onChangeSearchInput(event) : ''
          }
        />
        <div className="search-btn" onClick={onClickSearchButton}>
          Найти
        </div>
      </div>
      <List input={searchValue} />
    </>
  )
}
