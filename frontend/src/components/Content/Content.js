import React from "react"
import style from './Content.module.scss'
import img from '@images/photoChildren.svg'


export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {people: 'XXX', past: 'XXX', future: 'XXX'}
  }

  render() {
    const {people, past, future} = this.state
    return (
      <div className={style.content}>
        <h3>
          Тебя приветствует платформа добрых дел! Мы не волшебники, но здесь происходят настоящие ЧУДЕСА!
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