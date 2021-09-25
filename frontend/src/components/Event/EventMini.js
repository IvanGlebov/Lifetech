import React from "react"
import style from './EventMini.module.scss'


export default class EventMini extends React.Component {

  render() {
    const {id, img, description, name, right} = this.props
    return (
      <div className={right ? style.event1 : style.event2}>
        <img className={style} src={img} alt={'img'}/>
        <div className={style.desc}>
          <h4> {name}</h4>
          {description}
        </div>
      </div>
    )
  }
}