import React from "react"
import style from './Header.module.scss'
import {connect} from "react-redux";
import {push} from "connected-react-router";

export default connect(
  (store) => ({
    authorized: store.user.getIn(['authorized']),
  }),
  (dispatch) => ({
    redirectToLogin: () => dispatch(push('/login')),
    redirectToRegister: () => dispatch(push('/register')),

  })
)
(class Header extends React.Component {

  render() {
    const {authorized} = this.props
    return (
      <div className={style.header}>
        {authorized
          ? <form>
            <button className={style.person}>
              <i className="bi bi-person-circle"/>
            </button>
            <button className={style.register}>выйти</button>
          </form>
          : <form>
            <button onClick={this.props.redirectToLogin} className={style.login}>войти</button>
            <button onClick={this.props.redirectToRegister} className={style.register}>зарегистрироваться</button>
          </form>
        }
      </div>
    )
  }
})