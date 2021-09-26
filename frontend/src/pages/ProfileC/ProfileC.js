import React from "react"
import style from './ProfileC.module.scss'
import {connect} from "react-redux";
import {push} from "connected-react-router";

export default connect((store) => ({}),
  (dispatch) => ({
    redirectToGallery: () => {
      dispatch(push('/gallery'))
    },
    redirectToCreateRequest: () => {
      dispatch(push('/create-request'))
    },
  })
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
            <div className={style.but}>
              <div>Мои достижения</div>
              <div>
                <ul>
                  <li>награда Золотой орёл</li>
                  <li>волонтёрство</li>
                </ul>
              </div>
            </div>
            <div className={style.but}>
              <div>Мои цели</div>
              <div>
                <ul>
                  <li>сдать ЕГЭ</li>
                  <li>поступить в хороший вуз</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={style.buttons2}>
            <div className={style.but} onClick={this.props.redirectToCreateRequest}>Создать запрос на мероприятие</div>
            <div className={style.but}>Наставник</div>
          </div>
          <div className={style.buttons3}>
            <div className={style.but}> </div>
            <div className={style.but} onClick={this.props.redirectToGallery}>Мероприятия</div>
          </div>
        </div>
      </div>
    )
  }
})
