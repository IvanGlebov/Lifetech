import React from "react"
import style from './CreateEvent.module.scss'
import {connect} from "react-redux";
import {push} from "connected-react-router";


export default connect(
  (store) => ({}),
  (dispatch) => ({
    redirectToProfile: () => {
      dispatch(push('/profile'))
    }
  })
)(class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: {
        1: {
          id: 1,
          desc: 'Ссылка на чат в telegram:',
          placeholder: 'Введите ссылку на чат в Telegram ля вашего мероприятия',
          type: 'url'
        },
        2: {
          id: 2,
          desc: 'Название мероприятия',
          placeholder: 'Введите название вашего мероприятия',
          type: 'text'
        },
        3: {
          id: 3,
          desc: 'Описание мероприятия',
          placeholder: 'Введите описание вашего мероприятия',
          type: 'text'
        },
        4: {
          id: 4,
          desc: 'Прикрепить фотографию',
          placeholder: 'Выберите фотографию',
          type: 'file'
        },
        5: {
          id: 5,
          desc: 'Количество волонтеров',
          placeholder: 'Введите количество волонтеров',
          type: 'number'
        },
      }
    }
  }

  render() {
    const {forms} = this.state
    return (
      <div className={style.create_event}>
        <div className={style.block}>
          <h2>Создание мероприятия</h2>
          {
            Object.values(forms).map(f =>
              (<form key={f.id} className={style.form}>
                  <p>{f.desc}</p>
                  <input
                    placeholder={f.placeholder}
                    type={f.type}
                    required={true}
                  />
                </form>
              ))
          }
          <button>Создать мероприятие</button>
          <button className={style.close} onClick={this.props.redirectToProfile}>закрыть</button>
        </div>
      </div>
    )
  }
})