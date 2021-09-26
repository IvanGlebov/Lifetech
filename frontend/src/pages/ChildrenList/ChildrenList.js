import React from "react"
import style from './ChildrenList.module.scss'
import {push} from "connected-react-router";
import {connect} from "react-redux";


export default connect(
  (store) => ({}),
  (dispatch) => ({
    redirectToProfile: () => {
      dispatch(push('/profile'))
    }
  })
)(class ChildrenList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        forms: {
          1: {
            id: 1,
            name: 'Олег',
            login: 'fghhhfh',
            password: 'tffghfh'
          }
        }
      }
    }

    render() {
      const {forms} = this.state
      return (
        <div className={style.create_event}>
          <div className={style.block}>
            <h2>Список воспитанников</h2>

            <table className={style.tableNames} width="60%" cellPadding="5" cellSpacing="0">
              <tr>
                <th width="33%">Имя воспитанника</th>
                <th width="33%">Логин</th>
                <th width="33%">Пароль</th>
              </tr>
              <tr>
                <td width="33%">Андрей</td>
                <td width="33%">yhf53kfhdj</td>
                <td width="33%">thrtj645Q</td>
              </tr>
              <tr>
                <td width="33%">Тимофей</td>
                <td width="33%">e4543ys</td>
                <td width="33%">uifiY7766g</td>
              </tr>
              <tr>
                <td width="33%">Ангелина</td>
                <td width="33%">yjk683da</td>
                <td width="33%">ghhR45ED9</td>
              </tr>
            </table>
            <button className={style.close} onClick={this.props.redirectToProfile}>закрыть</button>
          </div>
        </div>
      )
    }
  }
)
