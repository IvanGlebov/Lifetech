import React from "react"
import style from './CreateRequest.module.scss'
import {connect} from "react-redux";
import {push} from "connected-react-router";


export default connect(
  (store) => ({}),
  (dispatch) => ({
    redirectToProfile: () => {
      dispatch(push('/profile'))
    }
  })
)(class CreateRequest extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        forms: {
          1: {
            id: 1,
            desc: 'Тема мероприятия:',
            placeholder: 'Введи тему мероприятия (например, кино/футбол/театр/лепка)',
            type: 'text'
          },
          2: {
            id: 2,
            desc: 'Описание мероприятия',
            placeholder: 'Введи описание мероприятия',
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
            <h2>Моё мероприятие</h2>
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
  }
)