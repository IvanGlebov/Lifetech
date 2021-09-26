import React from "react"
import style from './VolRate.module.scss'
import {connect} from "react-redux";
import {push} from "connected-react-router";


export default connect(
  (store) => ({}),
  (dispatch) => ({
    redirectToProfile: () => {
      dispatch(push('/profile'))
    }
  })
)(class VolRate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: {
        1: {
          id: 1,
          desc: 'Имя волонтёра:',
          placeholder: 'Введите имя волонтёра',
          type: 'text'
        },
        2: {
          id: 2,
          desc: 'Оцените работу волонтёра',
          placeholder: 'Введите оценку от 0 до 5',
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
          <h2>Оценить волонтёра</h2>
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

          <button>Оценить</button>
          <button className={style.close} onClick={this.props.redirectToProfile}>закрыть</button>
        </div>
      </div>
    )
  }
})
