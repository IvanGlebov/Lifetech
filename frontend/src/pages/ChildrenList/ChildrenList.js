import React from "react"
import style from './ChildrenList.module.scss'


export default class ChildrenList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: {
        1: {
          id: 1,
          desc: 'Таблица:',
          placeholder: 'Имя/логин/пароль',
          type:'text'
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
          {
            Object.values(forms).map(f =>
              (<form key={f.id} className={style.form}>
                  <p>{f.desc}</p>

                  <table width="750" cellPadding="5" cellSpacing="0">
                    <tr>
                      <td width="150">Имя воспитанника</td>
                      <td width="300">Логин</td>
                      <td width="300">Пароль</td>
                    </tr>
                  </table>

                </form>
              ))
          }
        </div>
      </div>
    )
  }
}
