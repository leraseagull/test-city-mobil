import React from 'react'
import { carInFocus } from './Focus'

export default class Car extends React.Component {
  render() {
    const car = {
      mark: this.props.item.mark,
      model: this.props.item.model,
      tarif: this.props.item.tariffs,
    }
    const { mark, model, tarif } = car
    const tariffsList = this.props.tariffsList

    return (
      <div className="row">
        <div className="car-name" onMouseEnter={(t) => carInFocus(t)}>
          {mark.concat(' ', model)}
        </div>
        <div className="cars-year row">
          {tariffsList.map((item, index) => {
            return (
              <div
                className="car-year"
                onMouseEnter={(t) => carInFocus(t)}
                key={index}
              >
                {tarif[`${item}`] ? tarif[`${item}`].year : '-'}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
