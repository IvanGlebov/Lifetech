import React from "react";
import style from './Login.module.scss'
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {doFetchUser} from "../../reducers/userActions";
import PropTypes from "prop-types";


export default connect(
  (store) => ({}),
  (dispatch) => ({
    redirectToMain: () => dispatch(push('/')),
    fetchUser: () => doFetchUser(dispatch)
  })
)(class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {login: '', password: ''};
      this.handleChangeLogin = this.handleChangeLogin.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this)
    }

    static propTypes = {
      fetchUser: PropTypes.func.isRequired
    }

    handleChangeLogin(event) {
      this.setState({login: event.target.value});
    }

    handleChangePassword(event) {
      this.setState({password: event.target.value});
    }

    componentDidMount() {
      this.props.fetchUser()
    }

    render() {
      return (
        <div className={style.login}>
          <div className={style.block}>
            <div className={style.top}>
              <h3>Вход</h3>
            </div>
            <div>
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
              <button onClick={this.props.redirectToMain} className={style.but}>войти</button>
            </div>
          </div>
        </div>
      )
    }
  }
)