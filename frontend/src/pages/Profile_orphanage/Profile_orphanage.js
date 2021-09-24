import React from "react"
import style from './Profile_orphanage.module.scss'
import Line from "../../components/Line/Line";
import Header from "../../components/Header/Header";


export default class Profile_orphanage extends React.Component {

  render() {
    return (
      <div className={style.orphanage}>
        <Line/>
        <Header/>
        <div className={style.content}>
          <div className={style.name}>
            <button className={style.info}>
              <i className="bi bi-info-circle"/>
            </button>
            <h2>Название детского дома</h2>
          </div>
          <div className={style.actions}>
            <button className={style.action}>hello</button>
            <button className={style.action}>buy me</button>
            <button className={style.action}>buy me</button>
            <button className={style.action}>buy me</button>
            <button className={style.action}>buy me</button>
            <button className={style.action}>buy me</button>
          </div>
        </div>


      </div>
    )
  }
}