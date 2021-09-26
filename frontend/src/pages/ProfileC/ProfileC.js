import React from "react"
import style from './ProfileC.module.scss'
import {connect} from "react-redux";

export default connect(
  (store) => ({}),
  (dispatch) => ({})
)(class ProfileC extends React.Component {

  render() {
    return (
      <div className={style.child}>
        <div className={style.name}>
          <div className={style.circle}> </div>
          <h2>Ник воспитанника </h2>
        </div>
        <div className={style.buttons}>
          <div className={style.buttons1}>
            <div className={style.but}>Мои достижения</div>
            <div className={style.but}>Мои цели</div>
          </div>
          <div className={style.buttons2}>
            <div className={style.but}>Создать запрос на мероприятие</div>
            <div className={style.but}>Наставник</div>
          </div>
          <div className={style.buttons3}>
            <div className={style.but}>Курсы и профориентация</div>
            <div className={style.but}>Мероприятия</div>
          </div>
        </div>
      </div>
    )
  }
})
