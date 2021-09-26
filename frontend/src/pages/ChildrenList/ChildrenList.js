import React from "react"
import style from './ChildrenList.module.scss'


export default class ChildrenList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: {
        1: {
          id: 1,
          name: 'Маша',
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

          <table className={style.tableNames} width="900" cellPadding="5" cellSpacing="0">
            <tr>
              <th width="300">Имя воспитанника</th>
              <th width="300">Логин</th>
              <th width="300">Пароль</th>
            </tr>
            <tr>
              <td width="300">Андрей</td>
              <td width="300">yhf53kfhdj</td>
              <td width="300">thrtj645Q</td>
            </tr>
            <tr>
              <td width="300">Тимофей</td>
              <td width="300">e4543ys</td>
              <td width="300">uifiY7766g</td>
            </tr>
            <tr>
              <td width="300">Ангелина</td>
              <td width="300">yjk683da</td>
              <td width="300">ghhR45ED9</td>
            </tr>
            </table>
        </div>
      </div>
    )
  }
}
