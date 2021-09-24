import React from "react"
import style from './Content.module.scss'


export default class Content extends React.Component {

  render() {
    return (
      <div className={style.content}>
        <span>Тебя приветствует платформа добрых дел! Мы объединяем тех, кто нуждается в помощи, с тем, кто может помочь! </span>
        <img src={'#'} alt={'img'}/>
        <span>Нас уже ХХХ, мы провели ХХХ, сейчас реализуется ХХХ мероприятий! Стань одним из нас!</span>

      </div>
    )
  }
}