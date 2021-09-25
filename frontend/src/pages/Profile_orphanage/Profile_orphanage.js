import React from "react"
import style from './Profile_orphanage.module.scss'
import Line from "../../components/Line/Line";
import Header from "../../components/Header/Header";

export default class Profile_orphanage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button_names: {
        1: {id: 1, name: 'воспитанники'},
        2: {id: 2, name: 'статистика'},
        3: {id: 3, name: 'статусы мероприятий'},
        4: {id: 4, name: 'проведенные мероприятия'},
        5: {id: 5, name: 'запрос помощи'},
        6: {id: 6, name: 'обратная связь'},
      }
    }
  }

  render() {
    const {button_names} = this.state
    return (
      <div className={style.orphanage}>
        <Line/>
        <Header/>

        <div className={style.content}>

          <div className={style.name}>
            <button className={style.info}>
              <i className="bi bi-info-circle"/>
            </button>
            <h2>Название детского дома</h2>
          </div>

          <div className={style.actions}>
            {
              Object.values(button_names).map(e => (
                <button key={e.id} className={style.action}>{e.name}</button>
              ))
            }
          </div>

          <div className={style.photogal}>


          </div>

        </div>

      </div>
    )
  }
}
