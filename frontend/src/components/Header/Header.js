import React from "react"
import style from './Header.module.scss'
import {connect} from "react-redux";

export default connect(
  (store) => ({
    authorized: store.user.getIn(['authorized'])
  })
)
(class Header extends React.Component {

  render() {
    const {authorized} = this.props
    return (
      <div className={style.header}>
        {authorized ?

          <form>
            <button className={style.person}>
              <i className="bi bi-person-circle"/>
            </button>
            <button className={style.register}>выйти</button>
          </form>

          :
          <form>
            <button className={style.login}>войти</button>
            <button className={style.register}>зарегистрироваться</button>
          </form>
        }
      </div>
    )
  }
})