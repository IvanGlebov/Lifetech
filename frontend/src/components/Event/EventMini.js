import React from "react"
import style from './EventMini.module.scss'


export default class EventMini extends React.Component {

  render() {
    const {id, img, description, name} = this.props
    return (
      <div className={style.event}>
        <img src={img} alt={'img'}/>
        <div className={style.desc}>
          <h5> {name}</h5>
          {description}
        </div>
      </div>
    )
  }
}