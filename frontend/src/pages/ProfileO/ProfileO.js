import React from "react"
import style from './ProfileO.module.scss'
import Line from "@components/Line/Line";
import Photo from "@components/PhotoMini/PhotoMini";
import {connect} from "react-redux";
import {push} from "connected-react-router";

export default connect(
  (store) => ({
    location: store.router.location
  }),
  (dispatch) => ({
    redirectToCreateEvent: () => {
      dispatch(push('/create-event'))
    },
    redirectToVolRate: () => {
      dispatch(push('/vol-rate'))
    },
    redirectToChildrenList: () => {
      dispatch(push('/children-list'))
    },
    redirectToHelpRequest: () => {
      dispatch(push('/help-request'))
    },
  })
)(class ProfileO extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button_names: {
        1: {
          id: 1, name: '', onClick: (() => {
          })
        },
        2: {
          id: 2, name: 'воспитанники', onClick: this.props.redirectToChildrenList
        },
        3: {
          id: 3, name: 'создание мероприятия', onClick: this.props.redirectToCreateEvent
        },

        4: {
          id: 4, name: 'запрос помощи', onClick: this.props.redirectToHelpRequest
        },
        5: {
          id: 5, name: ' ', onClick: (() => {
          })},
          6: {
            id: 6, name: 'оценить волонтеров', onClick: this.props.redirectToVolRate
          },
        },
        photos: {
          1: {id: 1, img: 'https://osvitoria.media/wp-content/uploads/2020/09/cover_ed_aftercovid.jpg'},
          2: {
            id: 2,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvRLAm3cEYJdIdTEw1L4VPkgFuYKaWhkOw_Q&usqp=CAU"
          },
          3: {id: 3, img: "https://afabrica.ru/images/masterklass/mk_corporat/b36ZWlBH4Sg.jpg"},
          4: {
            id: 4,
            img: 'http://www.divadance.ru/images/imagemer/studia_tanzev_201306_kontsert_diva_dance/104_detskoe_gogo_shkolniki1.jpg'
          },
          5: {id: 5, img: "https://kudaufa.ru/uploads/b06ff4df667f8b0ce586c8ada7706196.jpg"},
          6: {id: 6, img: "https://golfstreamfond.ru/wp-content/uploads/2019/10/Game-Turnir-2-300x199.jpg"},

        }
      }
    }

    render()
    {
      const {button_names, photos} = this.state
      return (
        <div className={style.orphanage}>
          <Line/>

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
                  <button
                    key={e.id}
                    className={style.action}
                    onClick={e.onClick}
                  >{e.name}</button>
                ))
              }
            </div>

            <div className={style.photogal}>
              {
                Object.values(photos).map(e => (<Photo
                    key={e.id}
                    id={e.id}
                    img={e.img}
                  />
                ))
              }
            </div>

          </div>

        </div>
      )
    }
  }

)
