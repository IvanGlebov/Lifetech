import React from "react"
import style from './Profile_child.module.scss'
import Line from "@components/Line/Line";
import Header from "@components/Header/Header";

export default class Profile_child extends React.Component {
  render() {
    const {button_names} = this.state
    return (
      <div className={style.children}>
        <Line/>
        <Header/>

        <div className={style.content}>

          <div className={style.name}>
            <div className={style.ava}></div>
            <h2>Никнейм ребёнка</h2>
          </div>

          <div className={style.actions}>
            <button className={style.achievements}>мои достижения</button>
            <button className={style.goals}>мои цели</button>
            <div className={style.requests}>
              <button className={style.myRequests}>мои запросы</button>
              <button className={style.createRequests}>создать запрос</button>
            </div>
            <button className={style.mentors}>наставник</button>
            <button className={style.courses}>курсы</button>
            <button className={style.events}>мероприятия</button>
          </div>


        </div>

      </div>
    )
  }
}