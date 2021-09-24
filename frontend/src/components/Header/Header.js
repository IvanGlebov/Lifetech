import React from "react"
import style from './Header.module.scss'


export default class Header extends React.Component {

  render() {
    return (
      <div className={style.header}>
        <button className={style.register}>зарегистрироваться</button>
        <button className={style.login}>войти</button>
      </div>
    )
  }
}