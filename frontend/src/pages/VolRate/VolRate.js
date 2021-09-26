import React from "react"
import style from './VolRate.module.scss'


export default class VolRate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: {
        1: {
          id: 1,
          desc: 'Имя волонтёра:',
          placeholder: 'Введите имя волонтёра',
          type:'text'
        },
        2: {
          id: 2,
          desc: 'Оцените работу волонтёра',
          placeholder: 'Введи описание мероприятия',
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

          <button>Оценить</button>
        </div>
      </div>
    )
  }
}
