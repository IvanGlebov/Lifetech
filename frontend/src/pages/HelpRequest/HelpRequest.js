import React from "react"
import style from './HelpRequest.module.scss'
import {connect} from "react-redux";
import {push} from "connected-react-router";


export default connect(
  (store) => ({}),
  (dispatch) => ({
    redirectToProfile: () => {
      dispatch(push('/profile'))
    }
  })
)(class HelpRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: {
        1: {
          id: 1,
          desc: 'Название мероприятия:',
          placeholder: 'Введите название мероприятия',
          type: 'text'
        },
        2: {
          id: 2,
          desc: 'Описание запроса',
          placeholder: 'Введите описание запроса для волонтеров',
          type: 'text'
        }
      }
    }
  }

  render() {
    const {forms} = this.state
    return (
      <div className={style.create_event}>
        <div className={style.block}>
          <h2>Запрос на помощь</h2>
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
          <button>Отправить</button>
          <button className={style.close} onClick={this.props.redirectToProfile}>закрыть</button>
        </div>
      </div>
    )
  }
})
