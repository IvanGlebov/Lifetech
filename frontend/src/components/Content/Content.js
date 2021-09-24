import React from "react"
import style from './Content.module.scss'
import img from '@images/Russia.svg'


export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {people: 1000, past: 1000, future: 1000}
  }

  render() {
    const {people, past, future} = this.state
    return (
      <div className={style.content}>
        <h3>Тебя приветствует платформа добрых дел!
          Мы объединяем тех, кто нуждается в помощи, с тем, кто может помочь!
        </h3>
        <img src={img} alt={'img'}/>
        <div>
          Нас уже <b>{people}</b>,
          мы провели <b>{past}</b>,
          сейчас реализуется <b>{future}</b> мероприятий!
          Стань одним из нас!
        </div>

      </div>
    )
  }
}