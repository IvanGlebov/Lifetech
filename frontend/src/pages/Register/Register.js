import React from "react";
import style from './Register.module.scss'
import {connect} from "react-redux";
import {push} from "connected-react-router";


export default connect(
  (store) => ({}),
  (dispatch) => ({
    redirectToMain: () => dispatch(push('/'))
  })

)(class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {email: '', login: '', password: ''};
      this.handleChangeEmail = this.handleChangeEmail.bind(this)
      this.handleChangeLogin = this.handleChangeLogin.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this)
    }


    handleChangeEmail(event) {
      this.setState({email: event.target.value});
    }

    handleChangeLogin(event) {
      this.setState({login: event.target.value});
    }

    handleChangePassword(event) {
      this.setState({password: event.target.value});
    }


    render() {
      return (
        <div className={style.login}>
          <div className={style.block}>
            <div className={style.top}>
              <h3>Регистрация</h3>
            </div>
            <div>
              <input
                maxLength={50}
                placeholder={'введите email'}
                required={true}
                type="text"
                onChange={this.handleChangeEmail}
                value={this.state.email}
              />
              <input
                maxLength={50}
                placeholder={'введите логин'}
                required={true}
                type="text"
                onChange={this.handleChangeLogin}
                value={this.state.login}
              />
              <input
                maxLength={50}
                placeholder={'введите пароль'}
                required={true}
                type='password'
                onChange={this.handleChangePassword}
                value={this.state.password}
              />
            </div>
            <div className={style.bottom}>
              <button onClick={this.props.redirectToMain} className={style.but}>зарегистрироваться</button>
            </div>
          </div>
        </div>
      )
    }
  }
)